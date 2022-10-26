<template>
  <div class="tabs_root">
    <div class="es-sdk-root-css">
      <title class="es-sdk-content-title-css"
             :text="'单Page模式(tv-list)'"/>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from '@extscreen/es-core';

export default {
  name: 'es-tabs-single-page',
  mixins: [ESPage]
};
</script>

<style scoped>

</style>
