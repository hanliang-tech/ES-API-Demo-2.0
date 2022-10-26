<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">MIXINS</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <div class="index_root_content_row_css">
        <text text="生命周期"/>
        <text :text="lifecycle"/>
      </div>
      <div class="index_root_content_row_css">
        <text text="Key事件"/>
        <text :text="keyEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESBackPress, ESKeyEvent, ESPageLifecycle} from "@extscreen/es-core";

const TAG = "TEST_MIXINS";
export default {
  name: 'test_mixins',
  mixins: [ESBackPress, ESKeyEvent, ESPageLifecycle],
  data() {
    return {
      keyEvent: '',
      lifecycle: '',
    };
  },
  mounted() {

  },
  methods: {
    onBackPressed() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onBackPressed----->>>");
      }
    },
    onKeyDown(keyEvent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onKeyDown----->>>" + JSON.stringify(keyEvent));
      }
      this.keyEvent = JSON.stringify(keyEvent);
    },
    onKeyUp(keyEvent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onKeyUp----->>>" + JSON.stringify(keyEvent));
      }
      this.keyEvent = JSON.stringify(keyEvent);
    },
    onESResume() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onESResume----->>>");
      }
      this.lifecycle = 'onESResume'
    },
    onESPause() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onESPause----->>>");
      }
      this.lifecycle = 'onESPause'
    },
    onESNewIntent(intent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "-----onESNewIntent----->>>" + JSON.stringify(intent));
      }
      this.lifecycle = 'onESNewIntent'
    },
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
