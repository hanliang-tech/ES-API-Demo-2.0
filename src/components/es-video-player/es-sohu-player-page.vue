<template>
  <div class="test_sohu_player_root">
    <es-sohu-player
      ref="es_sohu_player"
      @onPlayerInitialized="onPlayerInitialized"/>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESSohuPlayer} from "@extscreen/es-sohu-player";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";

const TAG = "IJK_PLAYER";
export default {
  name: 'es-sohu-player',
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
        ESLog.d(TAG, this.$refs.es_sohu_player.getPlayer() + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    playVideo() {
      let url = {
        videoId: Number('7818452'),//
        albumId: Number('9752932')//
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }

      this.$refs.es_sohu_player.playUrls(urls, {});
      this.$refs.es_sohu_player.start();
    },
    initPlayer() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----play----->>>>');
      }
      this.$refs.es_sohu_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.es_sohu_player.stop();
      this.$refs.es_sohu_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-sohu-player': ESSohuPlayer,
  }
};
</script>

<style scoped>

.test_sohu_player_root {
  width: 1920px;
  height: 1080px;
}

</style>
