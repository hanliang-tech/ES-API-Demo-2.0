<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <qr-view
        style="width:200px; height:200px;"
        content="http://www.xxxx.com/"
        :optimize="true"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: '二维码',
  mixins: [ESPage],
  data() {
    return {};
  },
};
</script>

<style>
</style>
