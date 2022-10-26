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
import {ESPage} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";

export default {
  name: '使用初探',
  mixins: [ESPage],
  data() {
    return {
      esPlayerList: [ESVideoPlayer],
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
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/09/09/d7213b17-9813-4178-b215-55b1accfcd9c.mp4',
          }],
        },
        playerType: 1,//播放器类型:1
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
