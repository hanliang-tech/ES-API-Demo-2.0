<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="WakeLockAcquire" @onButtonClicked="onWakeLockAcquired"/>
      <text-button text="WakeLockRelease" @onButtonClicked="onWakeLockReleased"/>
    </div>
  </div>
</template>

<script>
import {ESPage, ESPowerManager, ESToast} from "@extscreen/es-core";

export default {
  name: "电源模块",
  mixins: [ESPage],
  methods: {
    onESCreate(params) {
      ESPowerManager.init().then(
        () => {

        },
        error => {

        }
      );
    },
    onWakeLockAcquired() {
      ESToast.showToast("wakeLockAcquire~");
      ESPowerManager.wakeLockAcquire();
    },
    onWakeLockReleased() {
      ESToast.showToast("wakeLockRelease~");
      ESPowerManager.wakeLockRelease();
    }
  }
}
</script>
<style>
</style>
