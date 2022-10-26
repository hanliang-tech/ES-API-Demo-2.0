<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-column-css">
        <text text="首先把auido文件夹下所有的音频放入/data/data/com.extscreen.runtime/cache/audio系统目录"></text>
        <div class="es-sdk-content-row-css">
          <text-button text="初始化" @onButtonClicked="initAudio"/>
          <text-button text="加载所有" @onButtonClicked="initAllAudio"/>
        </div>
        <div class="es-sdk-content-row-css">
          <text-button text="加载1" @onButtonClicked="loadAudio(0)"/>
          <text-button text="加载2" @onButtonClicked="loadAudio(1)"/>
          <text-button text="加载3" @onButtonClicked="loadAudio(2)"/>
          <text-button text="加载4" @onButtonClicked="loadAudio(3)"/>
          <text-button text="加载5" @onButtonClicked="loadAudio(4)"/>
          <text-button text="加载6" @onButtonClicked="loadAudio(5)"/>
          <text-button text="加载7" @onButtonClicked="loadAudio(6)"/>
          <text-button text="加载8" @onButtonClicked="loadAudio(7)"/>
          <text-button text="加载9" @onButtonClicked="loadAudio(8)"/>
          <text-button text="加载10" @onButtonClicked="loadAudio(9)"/>
          <text-button text="加载10" @onButtonClicked="loadAudio(10)"/>
          <text-button text="加载11" @onButtonClicked="loadAudio(11)"/>
          <text-button text="加载12" @onButtonClicked="loadAudio(12)"/>
          <text-button text="加载13" @onButtonClicked="loadAudio(13)"/>
          <text-button text="加载14" @onButtonClicked="loadAudio(14)"/>
        </div>
        <div class="es-sdk-content-row-css">
          <text-button text="播放" @onButtonClicked="playAudio"/>
          <text-button text="开始" @onButtonClicked="resumeAudio"/>
          <text-button text="暂停" @onButtonClicked="pauseAudio"/>
          <text-button text="停止" @onButtonClicked="stopAudio"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESPage, ESToast} from "@extscreen/es-core";
import {
  ESSoundPoolAudioPlayerMixin,
  ESSoundPoolAudioPlayerModule
} from "@extscreen/es-soundpool-audio-player";

const TAG = "TEST_";
export default {
  name: 'SoundPool加载多个音频',
  mixins: [ESPage, ESSoundPoolAudioPlayerMixin],
  data() {
    return {
      soundId: '',
      streamId: -1,
      audioList: [
        "/data/data/com.extscreen.runtime/cache/audio/welcome_back.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/ready_go.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/du.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/right.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/good.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/great.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/excellent.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/puzzle.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/choice.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/follow_read.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/book_end.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/classes_start.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/songs.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/books.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/books_together.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/lock_classes.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/vip_classes.mp3",
        "/data/data/com.extscreen.runtime/cache/audio/free_classes_end.mp3",
      ]
    };
  },
  mounted() {
  },
  methods: {
    onESSoundPoolLoadComplete(value) {
      ESToast.showToast(JSON.stringify(value))
    },
    initAllAudio() {
      for (let i = 0; i < this.audioList.length; i++) {
        this.loadAudio(i)
      }
    },
    initAudio() {
      ESSoundPoolAudioPlayerModule.initSoundPool(1, 2, 30, 3);
    },
    loadAudio(index) {
      ESSoundPoolAudioPlayerModule
        .load(this.audioList[index])
        .then(
          (soundId) => {
            this.soundId = soundId;
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, soundId + "--------load----success----->>>>>");
            }
          },
          //
          error => {
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, "--------load---error--->>>>>" + error);
            }
          });
    },
    playAudio() {
      ESSoundPoolAudioPlayerModule.play(this.soundId,
        1,
        1,
        10,
        0,
        1)
        .then(
          (streamId) => {
            this.streamId = streamId;
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, "--------play----success----->>>>>" + streamId);
            }
          },
          //
          error => {
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, "--------play---error--->>>>>" + error);
            }
          });
    },
    resumeAudio() {
      ESSoundPoolAudioPlayerModule.resume(this.streamId)
    },
    pauseAudio() {
      ESSoundPoolAudioPlayerModule.pause(this.streamId)
    },
    stopAudio() {
      ESSoundPoolAudioPlayerModule.stop(this.streamId)
    },
  },
};
</script>

<style scoped>
</style>
