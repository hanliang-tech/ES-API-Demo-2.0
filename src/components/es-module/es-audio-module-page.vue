<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="获取当前Music音量" @onButtonClicked="onButtonClicked"/>
      <text-button text="设置Music音量40" @onButtonClicked="onAButtonClicked"/>
      <text-button text="设置Music音量30" @onButtonClicked="onBButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {
  ESPage,
  ESToast,
  ESAudioManager,
} from "@extscreen/es-core";

const TAG = "ESAudioManager";
export default {
  name: '音频管理模块',
  mixins: [ESPage],
  methods: {
    onESCreate(params) {
      ESAudioManager.init().then(
        () => {
        },
        error => {
        })
    },
    getMusicVolume() {
      let musicVolume = ESAudioManager.musicVolume
      ESToast.showToast("当前音量：" + musicVolume);
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----musicVolume------>>>>' + musicVolume);
      }
    },
    onButtonClicked() {
      this.getMusicVolume();
    },
    onAButtonClicked() {
      ESAudioManager.setStreamVolume(3, 40, 1)
    },
    onBButtonClicked() {
      ESAudioManager.setStreamVolume(3, 30, 1)
    },
  },
};
</script>

<style scoped>
</style>
