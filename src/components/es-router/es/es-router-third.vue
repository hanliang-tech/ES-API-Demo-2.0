<template>
  <div class="es-sdk-root-css" ref="sample_router_view">
    <title class="es-sdk-content-title-css" :text="time + ' 第三个页面 clearTask : 无'"></title>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-divider-css"/>
      <es-router-lifecycle-text ref="route_lifecycle_text"/>
      <es-router-title/>
      <es-router-content :stack="stack"/>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {getApp} from "@/util";
import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import ESRouterContent from './es-router-content'
import ESRouterTitle from './es-router-title'
import ESRouterLifecycleText from './es-router-lifecycle-text'

const TAG = "STACK";
export default {
  name: '第三个页面',
  mixins: [ESPage],
  props: {
    name: {
      type: String,
      default: 'RouterReplace'
    },
  },
  data() {
    return {
      stack: [],
      time: 0,
    };
  },
  mounted() {
    this.stack = this.$router.history.stack
    this.time = new Date().getTime();

    this.app = getApp()
    let params = this.$route.params;
    if (params) {
      ESLog.e(TAG, "------参数---params->>>" + JSON.stringify(params));
    }
    let query = this.$route.query;
    if (query) {
      ESLog.e(TAG, "------参数---query->>>" + JSON.stringify(query));
    }
    let app = this.app.$options.$superProps
    if (app) {
      ESLog.e(TAG, "------参数---app->>>" + JSON.stringify(app));
    }
    let appParams = this.app.$options.$superProps.params
    if (appParams) {
      ESLog.e(TAG, "------参数---appParams->>>" + JSON.stringify(appParams));
    }
  },
  onLifecycleChanged(evt) {
    ESLog.e("ESRouter", "--router_third---生命周期-->>>>" + evt)
  },
  methods: {
    // onESLifecycleChanged(evt) {
    //   ESLog.e(TAG, this.time + "--第三个页面-methods--生命周期-->>>>" + evt)
    // },
    onESCreate(params) {
      this.$refs.route_lifecycle_text.appendLifecycle('onESCreate')
      ESLog.e(TAG, this.time + "---第三个页面---onESCreate---生命周期--->>>>ref:" + this.$refs.sample_router_view)
    },
    onESStart() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESStart')
      ESLog.e(TAG, this.time + "---第三个页面---onESStart---生命周期--->>>>")
    },
    onESRestart() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESRestart')
      ESLog.e(TAG, this.time + "---第三个页面---onESRestart---生命周期--->>>>")
    },
    onESRestoreInstanceState(savedInstanceState) {
      this.$refs.route_lifecycle_text.appendLifecycle('onESRestoreInstanceState')
      ESLog.e(TAG, this.time + "---第三个页面---onRestoreInstanceState----生命周期-->>>>" + JSON.stringify(savedInstanceState))
    },
    onESResume() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESResume')
      ESLog.e(TAG, this.time + "---第三个页面---onESResume----生命周期-->>>>")
    },
    onESPause() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESPause')
      ESLog.e(TAG, this.time + "---第三个页面---onESPause---生命周期--->>>>")
    },
    onESSaveInstanceState(savedInstanceState) {
      this.$refs.route_lifecycle_text.appendLifecycle('onESSaveInstanceState')
      if (savedInstanceState) {
        savedInstanceState.path = '第三个页面';
        savedInstanceState.time = new Date().getTime();
      }
      ESLog.e(TAG, this.time + "---第三个页面---onSaveInstanceState---生命周期--->>>>" + JSON.stringify(savedInstanceState))
    },
    onESStop() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESStop')
      ESLog.e(TAG, this.time + "---第三个页面---onESStop----生命周期-->>>>")
    },
    onESDestroy() {
      this.$refs.route_lifecycle_text.appendLifecycle('onESDestroy')
      ESLog.e(TAG, this.time + "---第三个页面---onESDestroy---生命周期--->>>>")
    },
    onESNewIntent(intent) {
      this.$refs.route_lifecycle_text.appendLifecycle('onESNewIntent')
      ESLog.e(TAG, this.time + "---第三个页面---onESNewIntent---生命周期--->>>>" + JSON.stringify(intent))
    },
    onBackPressed() {
      ESLog.e(TAG, this.time + "--1-第三个页面---onBackPressed----生命周期-->>>>", this)
      ESLaunchManager.finishESPage();
    },
    // onDispatchKeyEvent(keyEvent) {
    //   ESLog.e(TAG, this.time + "---第三个页面---onDispatchKeyEvent------>>>>" + JSON.stringify(keyEvent))
    // },
    // onKeyDown(keyEvent) {
    //   ESLog.e(TAG, this.time + "---第三个页面---onKeyDown---按键--->>>>" + this.$refs.sample_router_view)
    // },
    // onKeyUp(keyEvent) {
    //   ESLog.e(TAG, this.time + "---第三个页面---onKeyUp---按键--->>>>", this)
    // },
  },
  components: {
    'es-router-content': ESRouterContent,
    'es-router-title': ESRouterTitle,
    'es-router-lifecycle-text': ESRouterLifecycleText,
  }
};
</script>

<style scoped>
</style>
