<template>
  <div class="es-sdk-root-css">
    <es-ad-front-player-manager
      ref="es_ad_player_manager"
      class="es-ad-player-manager-css"
      :ad-player-view-list="adPlayerViewList"
      :ad-app-key="appKey"
      :ad-app-name="appName"
      :ad-test-server="true"
      :player-window-type="2"
      :player-z-index="0"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerCompleted="onPlayerCompleted"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
    </div>
  </div>
</template>

<script>
import {
  ESLaunchManager,
  ESPage,
} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";
import {ESADFrontPlayerView} from "@extscreen/es-ad-player-view";
import {ESADFrontPlayerManager} from "@extscreen/es-ad-front-player-manager";
import {adProvider} from "@/components/es-ad-player/provider/LaunchADProvider";

const TAG = "AD_PLAYER";
export default {
  name: '开屏广告播放管理器',
  mixins: [ESPage],
  data() {
    return {
      appKey: '7dc15107ec1341ae80bf5f49fee16af2',
      appName: 'ad',
      adPlayerViewList: [ESADFrontPlayerView],
    };
  },
  methods: {
    onESCreate(params) {
      this.playVideo();
    },
    playVideo() {
      let playInfo = {
        seriesIndex: 0,
        seriesList: [{
          id: 0,
          urls: {
            urlIndex: 0,
            urlList: [],
          },
          provider: {
            provider: adProvider,
            providerParams: {}
          }
        }]
      }
      this.$refs.es_ad_player_manager.playVideo(playInfo);
    },
    onPlayerPlaying() {
    },
    onPlayerStopped() {
    },
    onPlayerCompleted() {
    },
    onBackPressed() {
      this.$refs.es_ad_player_manager.stop();
      this.$refs.es_ad_player_manager.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-ad-front-player-manager': ESADFrontPlayerManager,
  }
};
</script>

<style scoped>

.es-ad-player-manager-css {
  position: absolute;
}
</style>
