<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="绑定服务" @onButtonClicked="bindService"/>
      <text-button text="初始化" @onButtonClicked="initService"/>
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
import {ESLog} from "@extscreen/es-log";
import {ESPage, ESToast} from "@extscreen/es-core";
import {ESAndroidAudioPlayerService} from "@extscreen/es-android-audio-player";

const TAG = "AndroidAudioPlayerService";
export default {
  name: 'AndroidAudioPlayerService',
  mixins: [ESAndroidAudioPlayerService, ESPage],
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    bindService() {
      this.bindAudioPlayerService();
    },

    initService() {
      this.initAudioPlayer();
    },

    onAudioPlayerServiceBindSuccess() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onAudioPlayerServiceBindSuccess----->>>");
      }
      ESToast.showToast("绑定服务成功")
    },

    onAudioPlayerServiceBindError() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onAudioPlayerServiceBindError----->>>");
      }
      ESToast.showToast("绑定服务失败")
    },

    onAudioPlayerInitError() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onAudioPlayerInitError----->>>");
      }
      ESToast.showToast("初始化AudioPlayer失败")
    },
    onAudioPlayerInitSuccess() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onAudioPlayerInitSuccess----->>>");
      }
      ESToast.showToast("初始化AudioPlayer成功")
    },

    playAudio() {
      let url1 = "http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/absolute_music_set_out.mp3"
      let url2 = "http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/500years.mp3"
      let url = {
        url: url2,
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
      this.seekTo(6000)
    },
    speedAudio() {
      this.setPlayRate(2);
    },
    //------------------------------------
    onPlayerPlaying() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onPlayerPlaying----->>>");
      }
    },
  },
};
</script>

<style scoped>
</style>
