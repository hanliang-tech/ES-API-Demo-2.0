<template>
  <div class="es_player_manager_root">
    <es-player-manager
      :player-window-type="2"
      :es-player-list="esPlayerList"
      ref="es_player_manager"/>
  </div>
</template>

<script>
import {
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import {ESLifecycleMixin, ESPage} from "@extscreen/es-core";
import ESImagePlayer from "./es-image-player";

export default {
  name: 'es_player_sample',
  mixins: [ESPage],
  data() {
    return {
      esPlayerList: [ESImagePlayer],
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
            url: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/01/26/9a6992b0-05db-413c-9dbb-ab012ee8e742.jpg',
          }],
        },
        playerType: 11,//播放器类型:11
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
