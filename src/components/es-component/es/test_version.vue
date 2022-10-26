<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">Version</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <es-ijk-player-view-component
        ref="video_view"
        name="ijk_video_view"
        :style="{width : 1920, height : 1080}"
        @player-es-info="onPlayerESInfo"/>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import Vue from "vue";

const TAG = "TEST_VERSION";
export default {
  name: 'test_version',
  data() {
    return {};
  },
  mounted() {
    this.$refs.video_view.getEsInfo();
    // this.AndroidNetworkModuleVersion()
    //   .then((result => {
    //       if (ESLog.isLoggable(ESLog.DEBUG)) {
    //         ESLog.d(TAG, '-----ESAudioRecordModuleVersion------>>>>' + JSON.stringify(result));
    //       }
    //     }),
    //     //
    //     error => {
    //       if (ESLog.isLoggable(ESLog.DEBUG)) {
    //         ESLog.d(TAG, '-----ESAudioRecordModuleVersion------>>>>');
    //       }
    //     });
  },
  methods: {
    onPlayerESInfo(info) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerESInfo------>>>>' + JSON.stringify(info));
      }
    },
    ESAudioRecordModuleVersion() {
      return Vue.Native.callNativeWithPromise('ESAudioRecordModule', 'getEsInfo');
    },

    AndroidNetworkModuleVersion() {
      return Vue.Native.callNativeWithPromise('AndroidNetworkModule', 'getEsInfo');
    },
    ESUploadModuleVersion() {
      return Vue.Native.callNativeWithPromise('ESUploadModule', 'getEsInfo');
    }
  },
  components: {}
};
</script>

<style scoped>

.sample_index_root_view_css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.index_root_content_css {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_root_content_row_css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 1920px;
}

.index_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

</style>
