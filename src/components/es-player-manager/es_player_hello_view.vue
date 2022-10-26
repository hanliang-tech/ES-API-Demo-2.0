<template>
  <div class="es-player-view-root-css"
       :style="{width : playerViewWidth, height : playerViewHeight}">
    <span class="es-player-view-title-css">{{ playerInfo }}</span>
    <span class="es-player-view-title-css">{{ seriesInfo }}</span>
    <span class="es-player-view-title-css">{{ urlsInfo }}</span>
    <span class="es-player-view-title-css">{{ urlInfo }}</span>
  </div>
</template>

<script>

import {ESPlayerView} from "@extscreen/es-player";
import {
  ES_PLAYER_WINDOW_TYPE_FLOAT,
  ES_PLAYER_WINDOW_TYPE_FULL,
  ES_PLAYER_WINDOW_TYPE_SMALL
} from "@extscreen/es-player-manager";

const TAG = "ESPlayerHelloView";

export default {
  name: 'ESPlayerHelloView',
  mixins: [ESPlayerView],
  data() {
    return {
      playerInfo: '',
      seriesInfo: '',
      urlsInfo: '',
      urlInfo: '',

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
    onVideoPlayerPlayInfo(playInfo) {
      this.playerInfo = JSON.stringify(playInfo);
    },
    onVideoPlayerPlaySeries(series) {
      this.seriesInfo = JSON.stringify(series);
    },
    onVideoPlayerPlayUrls(urlList) {
      this.urlsInfo = JSON.stringify(urlList);
    },
    onVideoPlayerPlayUrl(url) {
      this.urlInfo = JSON.stringify(url);
    },
    onVideoPlayerPlaying() {
    },
    //覆写其他方法
  },
  components: {}
}
</script>

<style scoped>
.es-player-view-root-css {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.es-player-view-title-css {
  width: 1920px;
  height: 100px;
  background-color: #F7B500;
  font-size: 20px;
  color: #FFFFFF;
}

</style>
