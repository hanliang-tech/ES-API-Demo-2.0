<template>
  <div class="test_tvbc_player_root">
    <es-tvbc-player
      ref="es_tvbc_player"
      @onPlayerInitialized="onPlayerInitialized"/>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESTVBCPlayer} from "@extscreen/es-tvbc-player";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";

const TAG = "IJK_PLAYER";
export default {
  name: 'es-tvbc-player',
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
        ESLog.d(TAG, this.$refs.es_tvbc_player.getPlayer() + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    playVideo() {
      let url = {
        videoId: 'J002051',//
        episodeNo: 'J00205'
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }

      this.$refs.es_tvbc_player.playUrls(urls, {});
      this.$refs.es_tvbc_player.start();
    },
    initPlayer() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----play----->>>>');
      }
      this.$refs.es_tvbc_player.initializePlayer();
    },
    onBackPressed() {
      this.$refs.es_tvbc_player.stop();
      this.$refs.es_tvbc_player.release();
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-tvbc-player': ESTVBCPlayer,
  }
};
</script>

<style scoped>

.test_tvbc_player_root {
  width: 1920px;
  height: 1080px;
}

</style>
