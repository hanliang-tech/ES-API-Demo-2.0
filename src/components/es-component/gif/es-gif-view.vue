<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-gif-view-component :url="url" class="gif_view_class"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'GIF',
  mixins: [ESPage],
  data() {
    return {
      url: 'http://qapi-moss.cp47.ott.cibntv.net:9099/huanshiting/channel_zero_agreement/playing_normal.gif',
    };
  },
};
</script>

<style scoped>
.gif_view_class {
  width: 100px;
  height: 100px;
}

</style>
