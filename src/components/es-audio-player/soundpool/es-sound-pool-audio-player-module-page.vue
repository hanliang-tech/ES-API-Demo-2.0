<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="首先把qicheng.mp3 放入/data/data/com.extscreen.runtime/cache/audio/qicheng.mp3系统目录"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="初始化" @onButtonClicked="initAudio"/>
        <text-button text="加载" @onButtonClicked="loadAudio"/>
        <text-button text="播放" @onButtonClicked="playAudio"/>
        <text-button text="恢复" @onButtonClicked="resumeAudio"/>
        <text-button text="暂停" @onButtonClicked="pauseAudio"/>
        <text-button text="停止" @onButtonClicked="stopAudio"/>
        <text-button text="循环播放" @onButtonClicked="loopAudio"/>
        <text-button text="倍速播放" @onButtonClicked="rateAudio"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import {
  ESSoundPoolAudioPlayerMixin,
  ESSoundPoolAudioPlayerModule
} from "@extscreen/es-soundpool-audio-player";

import {ESLog} from "@extscreen/es-log";

const SOUND_TAG = "TEST_TT";

export default {
  name: 'SoundPoolAudioPlayerModule',
  mixins: [ESPage, ESSoundPoolAudioPlayerMixin],
  data() {
    return {
      soundId: -1,
      streamId: -1,

      //
      maxStreams: 5,
      streamType: 3,
      contentType: 2,
      usage: 1,
    };
  },
  methods: {
    onESSoundPoolLoadComplete(status) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(SOUND_TAG, "--------onESSoundPoolLoadComplete----->>>>>" + JSON.stringify(status));
      }
      // sampleId – the sample ID of the sound loaded.
      //   status – the status of the load operation (0 = success)
      // {"status":0,"sampleId":1}
      if (status.status === 0 && this.soundId === status.sampleId) {
        //加载成功
      }
    },
    initAudio() {
      ESSoundPoolAudioPlayerModule.initSoundPool(
        this.usage, this.contentType, this.maxStreams, this.streamType
      )
    },
    loadAudio() {
      let url = "/data/data/com.extscreen.runtime/cache/audio/qicheng.mp3";
      ESSoundPoolAudioPlayerModule.load(url)
        .then(
          (soundId) => {
            this.soundId = soundId;
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(SOUND_TAG, url + "--------load----success----->>>>>" + soundId);
            }
          },
          //
          error => {
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(SOUND_TAG, "--------load---error--->>>>>" + error);
            }
          });
    },
    playAudio() {
      if (this.soundId > -1) {
        ESSoundPoolAudioPlayerModule.play(this.soundId,
          1, 1, 0, false, 1)
          .then(
            (streamId) => {
              this.streamId = streamId;
              if (ESLog.isLoggable(ESLog.DEBUG)) {
                ESLog.d(SOUND_TAG, "--------play----success----->>>>>" + streamId);
              }
            },
            //
            error => {
              if (ESLog.isLoggable(ESLog.DEBUG)) {
                ESLog.d(SOUND_TAG, "--------play---error--->>>>>" + error);
              }
            });
      }
    },
    resumeAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.resume(this.streamId)
      }
    },
    pauseAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.pause(this.streamId)
      }
    },
    stopAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.stop(this.streamId)
        ESSoundPoolAudioPlayerModule.unload(this.streamId)
        this.streamId = -1;
        this.soundId = -1;
      }
    },
    releaseAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.release(this.streamId)
      }
    },
    loopAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.setLoop(this.streamId, true)
      }
    },
    rateAudio() {
      if (this.streamId !== -1) {
        ESSoundPoolAudioPlayerModule.setRate(this.streamId, 2)
      }
    },
    onBackPressed() {
      this.stopAudio();
      this.releaseAudio();
      ESLaunchManager.finishESPage();
    }
  }
}

</script>

<style scoped>
</style>
