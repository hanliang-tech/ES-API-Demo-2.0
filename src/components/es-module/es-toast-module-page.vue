<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="点击显示Toast" @onButtonClicked="showToast"/>
      <text-button text="点击显示ShortToast" @onButtonClicked="showShortToast"/>
      <text-button text="点击显示LongToast" @onButtonClicked="showLongToast"/>
    </div>
  </div>
</template>

<script>
import {ESPage, ESToast} from "@extscreen/es-core";

export default {
  name: "Toast模块",
  mixins: [ESPage],
  methods: {
    showToast() {
      ESToast.showToast("这是一个Toast")
    },
    showLongToast() {
      ESToast.showToast("这是一个LongToast")
    },
    showShortToast() {
      ESToast.showShortToast("这是一个ShortToast")
    }
  }
}
</script>
<style>
</style>
