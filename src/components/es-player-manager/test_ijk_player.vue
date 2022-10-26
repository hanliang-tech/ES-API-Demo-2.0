<template>
  <div class="test_ijk_player_root">
    <es-video-player
      ref="tv_ijk_player"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerInitialized="onPlayerInitialized"/>
    <div class="es-ijk-player-cover-css">
      <span class="es-player-plying-time-css">启动播放时间：{{ playingTime }}</span>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";

const TAG = "IJK_PLAYER";
export default {
  name: 'test_ijk_player',
  mixins: [ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin],
  data() {
    return {
      deviceInfoShow: false,
      playingTime: 0,
      initTime: 0,
    };
  },
  mounted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '-----mounted------>>>>');
    }
    this.initTime = new Date().getTime();
    this.initPlayer();
  },
  methods: {
    onPlayerInitialized(playerType) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, this.$refs.tv_ijk_player.getPlayer() + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    onPlayerPlaying() {
      let now = new Date().getTime();
      this.playingTime = now - this.initTime;
    },
    playVideo() {
      let playerOptionArray = [
        {
          type: 1,
          category: 4,
          name: 'test',
          value: '111',
        }
      ]
      let url = {
        url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
        playerOptionArray: playerOptionArray,
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }

      this.$refs.tv_ijk_player.playUrls(urls, {});
      this.$refs.tv_ijk_player.start();
    },
    initPlayer() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----play----->>>>');
      }
      this.$refs.tv_ijk_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.tv_ijk_player.stop();
      this.$refs.tv_ijk_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-video-player': ESVideoPlayer,
  }
};
</script>

<style scoped>

.test_ijk_player_root {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.es-ijk-player-cover-css {
  width: 1920px;
  height: 100px;
  background-color: #F7B500;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.es-player-plying-time-css {
  font-size: 40px;
  color: red;
}

</style>
