<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="打印日志" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

export default {
  name: '使用初探',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onButtonClicked() {
      if (ESLog.isLoggable(ESLog.VERBOSE)) {
        ESLog.v(TAG, "----------VERBOSE--------->>>")
      }
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----------DEBUG--------->>>")
      }
      if (ESLog.isLoggable(ESLog.INFO)) {
        ESLog.i(TAG, "----------INFO--------->>>")
      }
      if (ESLog.isLoggable(ESLog.WARN)) {
        ESLog.w(TAG, "----------WARN--------->>>")
      }
      if (ESLog.isLoggable(ESLog.ERROR)) {
        ESLog.e(TAG, "----------ERROR--------->>>")
      }
    }
  }
};
</script>

<style>
</style>
