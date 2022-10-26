<template>
  <div class="es_video_player_root">
    <es-video-player
      ref="es_video_player"
      @onPlayerInitialized="onPlayerInitialized"/>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";

const TAG = "VideoPlayer";
export default {
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onESCreate(params) {
      this.initPlayer();
    },
    onPlayerInitialized(playerType) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, this.$refs.es_video_player.getPlayer() + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    playVideo() {
      let url = {
        url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/09/30/4998e703-fcb3-4046-935b-1519ba9523dc.mp4',
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }

      this.$refs.es_video_player.playUrls(urls, {});
      this.$refs.es_video_player.start();
    },
    initPlayer() {
      this.$refs.es_video_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.es_video_player.stop();
      this.$refs.es_video_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-video-player': ESVideoPlayer,
  }
};
</script>

<style scoped>

.es_video_player_root {
  width: 1920px;
  height: 1080px;
}

</style>
