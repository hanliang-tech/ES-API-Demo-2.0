<template>
  <div class="es_player_manager_root">
    <es-player-manager
      :player-window-type="2"
      :ad-app-name="appName"
      :ad-app-key="appKey"
      :ad-test-server="true"
      :ad-front-player-view-list="adFrontPlayerViewList"
      :es-player-list="esPlayerList"
      ref="es_player_manager"/>
  </div>
</template>

<script>
import {
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import {ESPage} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";
import ESADFrontPlayerHelloView from "./es_ad_front_player_hello_view"
import {adProvider} from "./ADProvider";

export default {
  name: 'es_ad_front_player_view_sample',
  mixins: [ESPage],
  data() {
    return {
      appKey: '2ezER7',
      appName: '天气skill',
      esPlayerList: [ESVideoPlayer],
      adFrontPlayerViewList: [ESADFrontPlayerHelloView],
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
        playerType: 1,
        frontAD: {
          support: true,
          provider: {
            provider: adProvider,
            providerParams: {
              adVideoType: 'xxxx',
              albumId: 'xxxxx',
              mediaId: 'xxxxx',
            },
          },
        },
      }
      let playInfo = {
        seriesIndex: 0,
        seriesList: [series]
      }
      this.$refs.es_player_manager.playVideo(playInfo);
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

.es_player_manager_root {
  width: 1920px;
  height: 1080px;
  background-color: black;
}

</style>
