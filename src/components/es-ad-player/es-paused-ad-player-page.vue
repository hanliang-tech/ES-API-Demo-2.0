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
      @onPlayerClickable="onPlayerClickable"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerInitialized="onPlayerInitialized"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="点击广告" @onButtonClicked="onButtonClicked"/>
      <text-button text="停止广告" @onButtonClicked="onStopButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ES_AD_TYPE_PAUSED, ESADPlayer} from "@extscreen/es-ad-player";
import {
  ESLaunchManager,
  ESPage,
} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

const TAG = "AD_PLAYER";
export default {
  name: '暂停广告',
  mixins: [ESPage],
  data() {
    return {
      deviceInfoShow: false,
      appKey: '2ezER7',//测试用
      appName: '天气skill',//测试用
    };
  },
  methods: {
    onESCreate(params) {
      this.initializeADPlayer();
    },
    onButtonClicked() {
      this.$refs.es_ad_player.clickPlayerView();
    },
    onStopButtonClicked() {
      this.$refs.es_ad_player.stop();
    },
    //---------------------------------
    onPlayerClickable(clickable) {
    },
    onPlayerPlaying() {
    },
    onPlayerError(errorCode, errorMessage) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#----------onPlayerError-------->>>>>errorCode:' + errorCode + " errorMessage:" + errorMessage);
      }
    },
    onPlayerInitialized(playerType) {
      this.$refs.es_ad_player.play({
        url: 'extscreen-pause',
        mediaId: '1111',
        adCount: 1,
        type: ES_AD_TYPE_PAUSED,
      }, 0);
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
