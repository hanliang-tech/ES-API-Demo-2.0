<template>
  <div class="test_m1905_player_root">
    <es-m1905-player
      ref="es_m1905_player"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerInitialized="onPlayerInitialized"/>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESM1905Player} from "@extscreen/es-m1905-player";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";

const TAG = "IJK_PLAYER";
export default {
  name: 'es-m1905-player',
  mixins: [ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin],
  data() {
    return {
      deviceInfoShow: false
    };
  },
  mounted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '-----mounted------>>>>');
    }
    this.initPlayer();
  },
  methods: {
    onPlayerInitialized(playerType) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, this.$refs.es_m1905_player.getPlayer() + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    onPlayerPlaying() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerPlaying------>>>>');
      }
    },
    playVideo() {
      let url = {
        videoId: "F2014120055",//
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }

      this.$refs.es_m1905_player.playUrls(urls, {});
      this.$refs.es_m1905_player.start();
    },
    initPlayer() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----play----->>>>');
      }
      this.$refs.es_m1905_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.es_m1905_player.stop();
      this.$refs.es_m1905_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-m1905-player': ESM1905Player,
  }
};
</script>

<style scoped>

.test_m1905_player_root {
  width: 1920px;
  height: 1080px;
}

</style>
