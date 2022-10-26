<template>
  <div class="es_player_manager_behind_ad_root">
    <es-player-manager
      :ad-app-name="appName"
      :ad-app-key="appKey"
      :ad-test-server="true"
      :loop-play="true"
      :player-window-type="2"
      :es-player-list="esPlayerList"
      class="es_player_manager_behind_css"
      ref="es_player_manager"/>
    <div class="index_root_content_row_css_test" :clipChildren="false">
      <text-button text="40" @onButtonClicked="on40ButtonClicked"/>
      <text-button text="30" @onButtonClicked="on30ButtonClicked"/>
      <text-button text="0" @onButtonClicked="on0ButtonClicked"/>
      <text-button text="100" @onButtonClicked="on100ButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {
  ESPlayerManager,
} from "@extscreen/es-player-manager";
import { ESAudioManager, ESLaunchManager, ESPage } from '@extscreen/es-core';
import {ESVideoPlayer} from "@extscreen/es-video-player";
import {adProvider} from "./ADProvider";

export default {
  name: 'es_player_behind_ad_sample',
  mixins: [ESPage],
  data() {
    return {
      appKey: '2ezER7',
      appName: '天气skill',
      esPlayerList: [ESVideoPlayer],
      isPaused: false,
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
        behindAD: {
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
      if (this.isPaused) {
        this.$refs.es_player_manager.resume();
      }
      this.isPaused = false;
    },
    onESPause() {
      this.isPaused = true;
      this.$refs.es_player_manager.stop();
    },
    onESDestroy() {
      this.$refs.es_player_manager.release();
    },
    onBackPressed() {
      this.$refs.es_player_manager.stop();
      this.$refs.es_player_manager.release();
      ESLaunchManager.finishESPage();
    },
    on40ButtonClicked() {
      ESAudioManager.setStreamVolume(3, 40, 1)
    },
    on30ButtonClicked() {
      ESAudioManager.setStreamVolume(3, 30, 1)
    },
    on0ButtonClicked() {
      ESAudioManager.setStreamVolume(3, 0, 1)
    },
    on100ButtonClicked() {
      ESAudioManager.setStreamVolume(3, 100, 1)
    },
  },
  components: {
    'es-player-manager': ESPlayerManager,
  }
};
</script>

<style scoped>

.es_player_manager_behind_ad_root {
  width: 1920px;
  height: 1080px;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.es_player_manager_behind_css {
  position: absolute;
}

.index_root_content_row_css_test {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 1920px;
}

</style>
