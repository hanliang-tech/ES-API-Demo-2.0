<template>
  <div class="es-video-player-view-component">
    <es-video-player-view-component
      ref="es_video_player"
      class="es-video-player-view-component"
      :on-duration-changed-callback="onDurationChanged"
      :on-progress-changed-callback="onProgressChanged"
      @player-volume-changed="onPlayerVolumeChanged"
      @player-left-volume-changed="onLeftVolumeChanged"
      @player-right-volume-changed="onRightVolumeChanged"
      @player-status-changed="onPlayerStatusChanged"
      @player-aspect-ratio-list-changed="onAllAspectRatioChanged"
      @player-aspect-ratio-changed="onAspectRatioChanged"
      @player-rate-list-changed="onAllPlayRateChanged"
      @player-rate-changed="onPlayRateChanged"
      @player-error="onPlayerError"
      @player-info="onPlayerInfo"/>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage} from "@extscreen/es-core";

const TAG = "VideoPlayer";
export default {
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onESCreate(params) {
      this.playUrl();
    },
    playUrl() {
      let url = 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/10/02/ecb823e3-e8f5-4d14-a04b-cd37d9064ebe.mp4';
      this.$refs.es_video_player.play(
        url,
        0,
        1,
        1,
      );
      this.$refs.es_video_player.start();
    },
    //---------------------------------------------
    onDurationChanged(duration) {
    },
    onProgressChanged(progress) {
    },
    onPlayerVolumeChanged(evt) {
    },
    onLeftVolumeChanged(leftVolume) {
    },
    onRightVolumeChanged(rightVolume) {
    },
    onPlayerStatusChanged(event) {
    },
    onAllAspectRatioChanged(event) {
    },
    onAspectRatioChanged(event) {
    },
    onAllPlayRateChanged(event) {
    },
    onPlayRateChanged(event) {
    },
    onPlayerError(event) {
    },
    onPlayerInfo(event) {
    },
    //---------------------------------------------
    onBackPressed() {
      this.$refs.es_video_player.stop();
      this.$refs.es_video_player.release();
      ESLaunchManager.finishESPage();
    }
  },
};
</script>

<style scoped>

.es-video-player-view-component {
  width: 1920px;
  height: 1080px;
}

</style>
