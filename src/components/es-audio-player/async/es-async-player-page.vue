<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="播放" @onButtonClicked="loadAudio"/>
      <text-button text="停止" @onButtonClicked="stopAudio"/>
    </div>
  </div>

</template>

<script>
import {ESAsyncPlayer} from "@extscreen/es-async-player";
import {ESLaunchManager, ESPage} from "@extscreen/es-core";

const TAG = "TEST_";
export default {
  name: 'AsyncPlayer',
  mixins: [ESPage],
  data() {
    return {
      soundId: '',
    };
  },
  methods: {
    onESCreate(params) {
      ESAsyncPlayer.init().then(
        () => {
        },
        error => {
        });
    },
    loadAudio() {
      let url = "http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/absolute_music_set_out.mp3";
      ESAsyncPlayer.play(url, 1, 2, true)
    },
    stopAudio() {
      ESAsyncPlayer.stop()
    },
    onBackPressed() {
      this.stopAudio();
      ESLaunchManager.finishESPage();
    }
  },
};
</script>

<style scoped>
</style>
