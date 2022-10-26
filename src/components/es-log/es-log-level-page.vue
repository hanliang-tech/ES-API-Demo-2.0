<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="设置打印日志级别" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

export default {
  name: '日志打印级别',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onButtonClicked() {
      ESLog.setMinimumLoggingLevel(ESLog.DEBUG);
    }
  }
};
</script>

<style>
</style>
