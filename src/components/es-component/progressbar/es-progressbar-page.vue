<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <progress-bar
        :max-progress="100"
        :progress="60"
        :corner-radius="8"
        :secondary-progress="80"
        :background-color="backgroundColor"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        class="es-progress-bar-css"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'ProgressBar组件',
  mixins: [ESPage],
  data() {
    return {
      secondaryColor: '#54D00C',
      backgroundColor: '#7415B1',
      primaryColor: {
        startColor: '#FFD900',
        endColor: '#54D00C'
      }
    };
  },
};
</script>

<style>
.es-progress-bar-css {
  width: 800px;
  height: 10px;
  border-radius: 0;
}
</style>
