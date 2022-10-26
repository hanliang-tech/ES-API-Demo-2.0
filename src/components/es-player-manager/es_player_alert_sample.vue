<template>
  <div class="es_player_manager_root">
    <es-player-manager
      :player-window-type="2"
      :es-player-list="esPlayerList"
      :es-player-view-list="esPlayerViewList"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerCompleted="onPlayerCompleted"
      ref="es_player_manager"/>
  </div>
</template>

<script>
import {
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";
import {ESPlayerAlert} from "@extscreen/es-player-alert";
import {alertWindowProvider} from "./PlayerAlertProvider";

export default {
  name: 'es_player_alert_sample',
  mixins: [ESPage],
  data() {
    return {
      esPlayerList: [ESVideoPlayer],
      esPlayerViewList: [ESPlayerAlert],
      progress: 0,
      duration: 0,
      durationTimer: null,
      progressTimer: null,
    };
  },
  mounted() {
    this.playVideo();
  },
  methods: {
    playVideo() {
      let series = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
          }],
        },
        alert: this.generateAlert(),
        playerType: 1,//播放器类型:1
      }
      let playInfo = {
        seriesIndex: 0,
        seriesList: [series]
      }
      this.$refs.es_player_manager.playVideo(playInfo);
    },
    generateAlert() {
      return {
        support: true,
        provider: alertWindowProvider,
        providerParams: {}
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
      if (!this.$refs.es_player_manager) {
        return;
      }
      let d = this.$refs.es_player_manager.getDuration();
      if (d < 0) {
        this.duration = 0;
      } else {
        this.duration = d;
      }
    },
    getCurrentPosition() {
      if (!this.$refs.es_player_manager) {
        return;
      }
      let p = this.$refs.es_player_manager.getCurrentPosition();
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
    onESResume() {
      this.$refs.es_player_manager.resume();
    },
    onESPause() {
      this.$refs.es_player_manager.stop();
    },
    onESDestroy() {
      this.$refs.es_player_manager.release();
    },
    onBackPressed() {
      if (this.$refs.es_player_manager.isVideoPlayerPaused()) {
        this.$refs.es_player_manager.start();
        return;
      }

      this.$refs.es_player_manager.stop();
      this.$refs.es_player_manager.release();
      ESLaunchManager.finishESPage();
    },
  },
  components: {
    'es-player-manager': ESPlayerManager,
  }
};
</script>

<style scoped>

.es_player_manager_root {
  width: 1920px;
  height: 1080px;
  background-color: black;
}

</style>
