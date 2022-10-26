<template>
  <div class="test_player_manager_root">
    <es-player-manager
      :loop-play="false"
      :ad-app-name="appName"
      :ad-app-key="appKey"
      :player-window-type="2"
      :ad-test-server="true"
      :es-player-list="esPlayerList"
      :es-player-view-list="esPlayerViewList"
      :ad-front-player-view-list="adFrontPlayerViewList"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerCompleted="onPlayerCompleted"
      ref="tv_player_manager"/>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";
import {
  ES_PLAY_SERIES_TYPE_M1905,
  ES_PLAY_SERIES_TYPE_REAL_URL,
  ES_PLAY_SERIES_TYPE_SOHU,
  ES_PLAY_SERIES_TYPE_TVBC,
  ESPlayerManager,
  KEYCODE_DPAD_CENTER,
  KEYCODE_ENTER
} from "@extscreen/es-player-manager";

import {ESPlayerWatermark} from "@extscreen/es-player-watermark";
import {ESPlayerAlert} from "@extscreen/es-player-alert";
import {ES_AD_TYPE_FRONT} from "@extscreen/es-ad-player";
import {adPausedProvider} from "@/views/ad/ADPausedProvider";
import {adProvider} from "@/views/ad/ADProvider";
import {alertWindowProvider} from "./PlayerAlertProvider";
import {watermarkProvider} from "./PlayerWatermarkProvider";
import {ESVideoPlayer} from "@extscreen/es-video-player";


const TAG = "PLAYER_MANAGER";
export default {
  name: 'test_player_manager',
  mixins: [ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin, ESKeyEventMixin],
  data() {
    return {
      adFrontPlayerViewList: [ESPlayerWatermark, ESPlayerAlert],
      esPlayerViewList: [ESPlayerWatermark, ESPlayerAlert],
      esPlayerList: [ESVideoPlayer],
      //
      progress: 0,
      duration: 0,
      durationTimer: null,
      progressTimer: null,

      appKey: '2ezER7',
      appName: '天气skill',
    };
  },
  mounted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----xxxxxmounted------>>>>' + JSON.stringify(ESVideoPlayer.props));
    }
    this.initPlayer();
    this.playVideo();
  },
  methods: {
    initPlayer() {
      // ESVideoPlayer.playerType = 0;
      // ESTVBCPlayer.playerType = 1;
      // ESSohuPlayer.playerType = 2;
      // ESM1905Player.playerType = 3;
      // ESEmptyPlayer.playerType = 4;
      // this.esPlayerList = [ESVideoPlayer, ESTVBCPlayer, ESSohuPlayer, ESM1905Player, ESEmptyPlayer];
    },
    onESResume() {
      this.$refs.tv_player_manager.resume();
    },
    onESPause() {
      this.$refs.tv_player_manager.stop();
    },
    onESStop() {

    },
    onESDestroy() {
      this.$refs.tv_player_manager.release();
    },
    onESNewIntent(intent) {

    },
    playVideo() {
      let ijkSeries = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
          }],
        },
        type: 1,
      }
      let sohuSeries = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            videoId: Number('7818452'),//
            albumId: Number('9752932')//
          }],
        },
        type: ES_PLAY_SERIES_TYPE_SOHU,
      }
      let tvbcSeries = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            videoId: 'J002051',//
            episodeNo: 'J00205'
          }],
        },
        watermark: this.generateWatermark(),
        alert: this.generateAlert(),
        type: 2,
        frontAD: {
          support: false,
          provider: {
            provider: adProvider,
            providerParams: {
              adId: 'extscreen-runtime',
              adType: ES_AD_TYPE_FRONT,
              adVideoType: '1',
              albumId: '1111',
              mediaId: '1111',
            },
          },
          analyze: {
            test: '1111',
          }
        },
        pauseAD: {
          support: true,
          provider: {
            provider: adPausedProvider,
            providerParams: {
              adId: 'extscreen-pause',
              adType: ES_AD_TYPE_FRONT,
              adVideoType: '1',
              albumId: '1111',
              mediaId: '1111',
            },
          },
          analyze: {
            test: '1111',
          }
        }
      }
      let m1905Series = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            videoId: "F2014120055",//
          }],
        },
        type: ES_PLAY_SERIES_TYPE_M1905,
      }
      let playInfo = {
        seriesIndex: 0,
        seriesList: [ijkSeries, tvbcSeries,]
      }
      this.$refs.tv_player_manager.playVideo(playInfo);
    },
    generateAlert() {
      return {
        support: true,
        provider: alertWindowProvider,
        providerParams: {}
      };
    },
    generateWatermark() {
      return {
        support: true,
        provider: watermarkProvider,
        providerParams: {
          videoId: '',
          watermarkId: '',
          contentType: '',
        }
      };
    },
    onPlayerPlaying() {
      this.startProgressTimer();
      this.getDuration();
    },
    onPlayerStopped() {
      this.stopProgressTimer();
    },
    onPlayerCompleted() {
      this.stopProgressTimer();
    },
    getDuration() {
      if (!this.$refs.tv_player_manager) {
        return;
      }
      let d = this.$refs.tv_player_manager.getDuration();
      if (d < 0) {
        this.duration = 0;
      } else {
        this.duration = d;
      }
    },
    getCurrentPosition() {
      if (!this.$refs.tv_player_manager) {
        return;
      }
      let p = this.$refs.tv_player_manager.getCurrentPosition();
      if (p < 0) {
        this.progress = 0;
      } else {
        this.progress = p;
      }
    },
    startDurationTimer() {
      this.stopDurationTimer()
      this.durationTimer = setInterval(() => {
        this.getDuration();
      }, 500);
    },
    stopDurationTimer() {
      clearInterval(this.durationTimer);
    },
    startProgressTimer() {
      this.stopProgressTimer()
      this.progressTimer = setInterval(() => {
        this.getCurrentPosition();
      }, 500);
    },
    stopProgressTimer() {
      clearInterval(this.progressTimer);
    },

    onBackPressed() {
      if (this.$refs.tv_player_manager.isVideoPlayerPaused()) {
        this.$refs.tv_player_manager.start();
        return;
      }

      this.$refs.tv_player_manager.stop();
      this.$refs.tv_player_manager.release();
      ESLaunchManager.finishESPage();
    },

    //页面复写即可
    onKeyDown(keyEvent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onKeyDown------>>>>' + JSON.stringify(keyEvent));
      }
      let handle = this.$refs.tv_player_manager.onKeyDown(keyEvent);
      if (handle) {
        return;
      }
      switch (keyEvent.keyCode) {
        case KEYCODE_ENTER:
        case KEYCODE_DPAD_CENTER:
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----onKeyUp------>>>>' + JSON.stringify(keyEvent));
          }
          if (!this.$refs.tv_player_manager.isVideoPlayerPaused()) {
            this.$refs.tv_player_manager.pause();
          } else {
            this.$refs.tv_player_manager.start();
          }
          break;
      }
    },
    //页面复写即可
    onKeyUp(keyEvent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onKeyUp------>>>>' + JSON.stringify(keyEvent));
      }
      let handle = this.$refs.tv_player_manager.onKeyUp(keyEvent);
      if (handle) {
        return;
      }
    },
  },
  components: {
    'es-player-manager': ESPlayerManager,
  }
};
</script>

<style scoped>

.test_player_manager_root {
  width: 1920px;
  height: 1080px;
  background-color: palevioletred;
}

</style>
