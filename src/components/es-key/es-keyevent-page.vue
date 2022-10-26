<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text text="按键查看效果"></text>
    </div>
  </div>
</template>

<script>
import {ESBackPress, ESKeyEvent, ESLaunchManager, ESToast} from "@extscreen/es-core";

export default {
  name: "按键",
  mixins: [ESBackPress, ESKeyEvent],
  methods: {
    onBackPressed() {
      ESLaunchManager.finishESPage();
    },
    onKeyDown(keyEvent) {
      ESToast.showToast("onKeyDown" + JSON.stringify(keyEvent))
    },
    onKeyUp(keyEvent) {
      ESToast.showToast("onKeyUp" + JSON.stringify(keyEvent))
    },
  }
}
</script>

<style>
</style>
