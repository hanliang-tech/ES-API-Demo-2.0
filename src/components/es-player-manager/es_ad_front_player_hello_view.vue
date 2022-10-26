<template>
  <div class="es-ad-player-view-root-css"
       :style="{width : playerViewWidth, height : playerViewHeight}">
    <span class="es-ad-player-view-title-css">{{ seriesInfo }}</span>
    <span class="es-ad-player-view-title-css">广告时长:{{ duration }}</span>
    <span class="es-ad-player-view-title-css">广告进度:{{ progress }}</span>
  </div>
</template>

<script>

import {
  ES_PLAYER_WINDOW_TYPE_FLOAT,
  ES_PLAYER_WINDOW_TYPE_FULL,
  ES_PLAYER_WINDOW_TYPE_SMALL
} from "@extscreen/es-player-manager";
import {ESADFrontPlayerView} from "@extscreen/es-ad-front-player-manager";

const TAG = "ESADFrontPlayerHelloView";

export default {
  name: 'ESADFrontPlayerHelloView',
  mixins: [ESADFrontPlayerView],
  data() {
    return {
      seriesInfo: '',
      canExitTime: 0,
      duration: 0,
      progress: 0,

      playerViewWidth: 0,
      playerViewHeight: 0,
    }
  },
  mounted() {
    this.initPlayerView();
  },
  methods: {
    initPlayerView() {
      switch (this.playerWindowType) {
        case ES_PLAYER_WINDOW_TYPE_SMALL:
          this.playerViewWidth = this.smallWindowWidth;
          this.playerViewHeight = this.smallWindowHeight;
          break;
        case ES_PLAYER_WINDOW_TYPE_FULL:
          this.playerViewWidth = this.fullWindowWidth;
          this.playerViewHeight = this.fullWindowHeight;
          break;
        case ES_PLAYER_WINDOW_TYPE_FLOAT:
          this.playerViewWidth = this.floatWindowWidth;
          this.playerViewHeight = this.floatWindowHeight;
          break;
      }
    },
    onADPlayerPlaySeries(series) {
      this.seriesInfo = JSON.stringify(series);
    },
    onADPlayerPlaying() {
    },
    onADPlayerExitTimeChanged(time) {
    },
    onADPlayerDurationChanged(duration) {
      this.duration = duration;
    },
    onADPlayerProgressChanged(progress) {
      this.progress = progress;
    },
    //覆写其他方法
  },
  components: {}
}
</script>

<style scoped>
.es-ad-player-view-root-css {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.es-ad-player-view-title-css {
  width: 1920px;
  height: 100px;
  background-color: #F7B500;
  font-size: 20px;
  color: #FFFFFF;
}

</style>
