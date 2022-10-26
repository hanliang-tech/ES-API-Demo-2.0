<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="播放" @onButtonClicked="playAudio"/>
      <text-button text="开始" @onButtonClicked="startAudio"/>
      <text-button text="暂停" @onButtonClicked="pauseAudio"/>
      <text-button text="停止" @onButtonClicked="stopAudio"/>
      <text-button text="快进" @onButtonClicked="seekAudio"/>
      <text-button text="倍速" @onButtonClicked="speedAudio"/>
    </div>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import {ESAudioPlayer} from "@extscreen/es-audio-player";

const TAG = "TEST_MEDIA_PLAYER";
export default {
  name: 'AudioPlayer',
  mixins: [ESAudioPlayer, ESPage],
  methods: {
    playAudio() {
      let url1 = "http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/absolute_music_set_out.mp3"
      let url2 = "http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/500years.mp3"
      let url = {
        url: url1,
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }
      this.playUrls(urls)
    },
    startAudio() {
      this.start()
    },
    pauseAudio() {
      this.pause()
    },
    stopAudio() {
      this.stop()
      this.release()
    },
    seekAudio() {
      this.seekTo(2000)
    },
    speedAudio() {
      this.setPlayRate(2);
    },
    onBackPressed() {
      this.stopAudio();
      ESLaunchManager.finishESPage();
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
