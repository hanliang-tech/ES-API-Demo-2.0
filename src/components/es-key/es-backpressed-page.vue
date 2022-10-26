<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text text="按返回键查看效果"></text>
    </div>
  </div>
</template>

<script>
import {ESBackPress, ESLaunchManager, ESToast} from "@extscreen/es-core";

export default {
  name: "返回键",
  mixins: [ESBackPress],
  methods: {
    onBackPressed() {
      ESToast.showToast("按返回键，关闭页面")
      ESLaunchManager.finishESPage();
    },
  }
}
</script>

<style>
</style>
