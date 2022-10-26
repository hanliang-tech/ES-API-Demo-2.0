<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="打开腾讯视频" @onButtonClicked="onButtonClicked"/>
      <text-button text="打开懂车帝快应用" @onButtonClicked="onDCDButtonClicked"/>
      <text-button text="打开四海钓鱼快应用" @onButtonClicked="onFishButtonClicked"/>
      <text-button text="打开欢小柚启动页面" @onButtonClicked="onYouButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage} from "@extscreen/es-core";

export default {
  name: 'Schema方式打开',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onButtonClicked() {
      ESLaunchManager.launchNativeApp([
        ['-d', 'tenvideo2://?action=1&cover_id=mzc00200tq7m03f&stay_flag=1&pull_from=1024041']]).then(
        () => {
        },
        error => {
        }
      )
    },
    onDCDButtonClicked() {
      ESLaunchManager.launchNativeApp([
        ['-d', 'esapp://action/start?pkg=es.com.dongchedi.tv&from=cmd']]).then(
        () => {
        },
        error => {
        }
      )
    },
    onFishButtonClicked() {
      ESLaunchManager.launchNativeApp([
        ['-d', 'esapp://action/start?pkg=es.com.fishing.tv&from=cmd']]).then(
        () => {
        },
        error => {
        }
      )
    },
    onYouButtonClicked() {
      ESLaunchManager.launchNativeApp([
        ['-p', 'com.extscreen.runtime'],
        ['-n', 'com.extscreen.runtime/com.extscreen.runtime.activity.LauncherActivity'],
      ]).then(
        () => {
        },
        error => {
        }
      )
    }
  }
};
</script>

<style>
</style>
