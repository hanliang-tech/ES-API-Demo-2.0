<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <loading-view color="#40b883" style="width: 120px;height: 120px;"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'Loading',
  mixins: [ESPage],
  data() {
    return {};
  },
};
</script>

<style>
</style>
