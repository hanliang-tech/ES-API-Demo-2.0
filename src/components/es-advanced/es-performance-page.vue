<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: '性能优化',
  mixins: [ESPage],
  data() {
    return {};
  },
};
</script>

<style>
</style>
