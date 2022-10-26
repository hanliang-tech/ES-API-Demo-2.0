<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text :text="text"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

const TAG = "PageLifecycle"

export default {
  name: '生命周期管理',
  mixins: [ESPage],
  data() {
    return {
      text: '页面生命周期：',
    };
  },
  methods: {
    onESCreate(params) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESCreate----->>>>>" + JSON.stringify(params))
      }
      this.text = this.text + 'onESCreate-->'
    },
    onESRestart() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESRestart----->>>>>")
      }
      this.text = this.text + 'onESRestart-->'
    },
    onESStart() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESStart----->>>>>")
      }
      this.text = this.text + 'onESStart-->'
    },
    onESResume() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESResume----->>>>>")
      }
      this.text = this.text + 'onESResume-->'
    },
    onESPause() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESPause----->>>>>")
      }
      this.text = this.text + 'onESPause-->'
    },
    onESStop() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESStop----->>>>>")
      }
      this.text = this.text + 'onESStop-->'
    },
    onESDestroy() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESDestroy----->>>>>")
      }
      this.text = this.text + 'onESDestroy-->'
    },
    onESNewIntent(intent) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESNewIntent----->>>>>")
      }
      this.text = this.text + 'onESNewIntent-->'
    },
  }
};
</script>

<style>
</style>
