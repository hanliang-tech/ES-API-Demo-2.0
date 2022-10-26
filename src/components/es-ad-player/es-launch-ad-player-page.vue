<template>
  <div class="es-sdk-root-css">
    <es-ad-player
      ref="es_ad_player"
      class="es-ad-player-css"
      :app-key="appKey"
      :app-name="appName"
      :test-server="true"
      :player-width="1920"
      :player-height="1080"
      :player-z-index="0"
      @onPlayerError="onPlayerError"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerInitialized="onPlayerInitialized"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
    </div>
  </div>
</template>

<script>
import {ES_AD_TYPE_LAUNCH, ESADPlayer} from "@extscreen/es-ad-player";
import {
  ESLaunchManager,
  ESPage,
} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

const TAG = "AD_PLAYER";
export default {
  name: '开屏广告',
  mixins: [ESPage],
  data() {
    return {
      deviceInfoShow: false,
      appKey: '7dc15107ec1341ae80bf5f49fee16af2',//测试用
      appName: 'APP',//测试用
    };
  },
  methods: {
    onESCreate(params) {
      this.initializeADPlayer();
    },
    onPlayerInitialized(playerType) {
      this.$refs.es_ad_player.play({
        url: 'test-kaiping',
        mediaId: '1111',
        adCount: 1,
        type: ES_AD_TYPE_LAUNCH,
        playerType: 2,
        playerMediaCodec: true,
        playerOptions: [
          {
            type: 1,
            category: 4,
            name: 'string',
            value: 'xxxxxx',
          },
          {
            type: 0,
            category: 4,
            name: 'long',
            value: 10000,
          }
        ]
      }, 0);
    },
    onPlayerError(errorCode, errorMessage) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#----------onPlayerError-------->>>>>errorCode:' + errorCode + " errorMessage:" + errorMessage);
      }
    },
    onPlayerPlaying() {
    },
    initializeADPlayer() {
      this.$refs.es_ad_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.es_ad_player.stop();
      this.$refs.es_ad_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-ad-player': ESADPlayer,
  }
};
</script>

<style scoped>

.es-ad-player-css {
  position: absolute;
}
</style>
