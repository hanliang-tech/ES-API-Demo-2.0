<template>
  <div class="es_player_manager_root">
    <es-player-manager
      :player-window-type="2"
      :es-player-list="esPlayerList"
      @onPlayerInterceptError="onPlayerInterceptError"
      @onPlayerInterceptSuccess="onPlayerInterceptSuccess"
      ref="es_player_manager"/>
  </div>
</template>

<script>
import {
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import {ESPage} from "@extscreen/es-core";
import {ESVideoPlayer} from "@extscreen/es-video-player";
import {ESLog} from "@extscreen/es-log";
import {interceptor} from "./ESPlayerInterceptorProvider";


const TAG = "PlayerInterceptor"
export default {
  name: 'es_player_manager_sample',
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
            url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
          }],
        },
        interceptor: {
          support: true,
          provider: interceptor,
          providerParams: {
            id: "xxxx",
            otherParams: {xxx: "xxxx"}
          },
        },
        playerType: 1,//播放器类型:1
      }
      let playInfo = {
        seriesIndex: 0,
        seriesList: [series]
      }
      this.$refs.es_player_manager.playVideo(playInfo);
    },
    onPlayerInterceptError(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerInterceptError------>>>>' + JSON.stringify(value));
      }
    },
    onPlayerInterceptSuccess(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerInterceptSuccess------>>>>' + JSON.stringify(value));
      }
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
