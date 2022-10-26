<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text text="Text"></text>
      <text-button text="按钮" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: '模板',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onButtonClicked() {
    }
  }
};
</script>

<style>
</style>
