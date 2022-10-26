<template>
  <div class="es-sdk-root-css"> :clipChildren="false">
    <es-player-manager
      :player-window-type="2"
      :es-player-list="esPlayerList"
      class="es-player-manager-css"
      @onPlaySeries="onPlaySeries"
      ref="es_player_manager"/>
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <text-button :clipChildren="false" text="播放下一集" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {
  ESPlayerEventManager,
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import {ESPage, ESToast} from "@extscreen/es-core";

import {ESVideoPlayer} from "@extscreen/es-video-player";
import PlayerEventListener from "./PlayerEventListener";

export default {
  name: '播放事件监听',
  mixins: [ESPage],
  data() {
    return {
      esPlayerList: [ESVideoPlayer],
      index: -1,
    };
  },
  mounted() {
    ESPlayerEventManager.addVideoPlayerEventListener(PlayerEventListener)
    this.playVideo();
  },
  methods: {
    playVideo() {
      let series_one = {
        id: 0,
        urls: {
          urlIndex: 0,
          urlList: [{
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
          }],
        },
        playerType: 1,//播放器类型:1
      }
      let series_two = {
        id: 1,
        urls: {
          urlIndex: 0,
          urlList: [{
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/10/13/784b2eff-9529-47ff-96df-1f1da2b42b3d.mp4',
          }],
        },
        playerType: 1,//播放器类型:1
      }
      let series_three = {
        id: 1,
        urls: {
          urlIndex: 0,
          urlList: [{
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/10/11/1a81272c-c616-4cef-96d0-ad1f7c8d4f67_transcode_1137855.mp4',
          }],
        },
        playerType: 1,//播放器类型:1
      }
      let playInfo = {
        seriesIndex: 0,
        seriesList: [series_one, series_two, series_three]
      }
      this.$refs.es_player_manager.playVideo(playInfo);
    },
    onPlaySeries(series, index) {
      this.index = index;
      ESToast.showToast('index:' + index);
    },
    onButtonClicked() {
      this.$refs.es_player_manager.stop();
      this.$refs.es_player_manager.playSeriesByIndex(this.index + 1);
      // this.$refs.es_player_manager.playNextSeries();
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
  },
  components: {
    'es-player-manager': ESPlayerManager,
  }
};
</script>

<style scoped>

.es-player-manager-css {
  position: absolute;
  left: 0;
  top: 0;
}

</style>
