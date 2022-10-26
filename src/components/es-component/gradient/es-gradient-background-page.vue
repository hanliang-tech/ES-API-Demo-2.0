<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div :enableFocusBorder="true" :focusable="true"
           style="width: 300px;height: 200px; background-color: transparent "
           :gradientBackground="gradientBackground">
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'GradientBackground',
  mixins: [ESPage],
  data() {
    return {
      gradientBackground: {
        type: 0,
        shape: 0,
        colors: ['#40b883', '#4068b8'],
        cornerRadii4: [0, 5, 20, 0],
      },
    };
  },
};
</script>

<style>
</style>
