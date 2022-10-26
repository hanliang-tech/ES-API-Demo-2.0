<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="首先把qicheng.mp3 放入/data/data/com.extscreen.runtime/cache/audio/qicheng.mp3系统目录"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="播放" @onButtonClicked="playAudio"/>
        <text-button text="恢复" @onButtonClicked="resumeAudio"/>
        <text-button text="暂停" @onButtonClicked="pauseAudio"/>
        <text-button text="停止" @onButtonClicked="stopAudio"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESSoundPoolAudioPlayer} from "@extscreen/es-soundpool-audio-player";
import {ESLaunchManager, ESPage} from "@extscreen/es-core";

const TAG = "TEST_TT";
export default {
  name: 'SoundPoolAudioPlayer',
  mixins: [ESSoundPoolAudioPlayer, ESPage],
  data() {
    return {
      soundId: '',
      streamId: -1,
    };
  },
  methods: {
    onESCreate(params) {
      this.initSoundPool();
    },
    playAudio() {
      let url = "/data/data/com.extscreen.runtime/cache/audio/qicheng.mp3";
      this.play(url);
    },
    resumeAudio() {
      this.resume()
    },
    pauseAudio() {
      this.pause()
    },
    stopAudio() {
      this.stop()
    },
    onBackPressed() {
      this.stopAudio();
      this.release();
      ESLaunchManager.finishESPage();
    }
  },
};
</script>

<style scoped>
</style>
