<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="align-content：flex-start"></text>
      <div class="es-flex-align-content-start-css">
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

import ESFlexViewTwo from '../view/es-flex-view-two'
import ESFlexViewSix from '../view/es-flex-view-six'

export default {
  name: 'flex-start',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {},
  components: {
    'es-flex-view-two': ESFlexViewTwo,
    'es-flex-view-six': ESFlexViewSix,
  }
};
</script>

<style>

.es-flex-align-content-start-css {
  width: 1000px;
  height: 300px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #40b883;
}
</style>
