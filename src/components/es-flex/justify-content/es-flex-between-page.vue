<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="justify-content：space-between"></text>
      <div class="es-flex-justify-content-between-css">
        <es-flex-view-one/>
        <es-flex-view-two/>
        <es-flex-view-three/>
        <es-flex-view-four/>
        <es-flex-view-five/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

import ESFlexViewOne from '../view/es-flex-view-one'
import ESFlexViewTwo from '../view/es-flex-view-two'
import ESFlexViewThree from '../view/es-flex-view-three'
import ESFlexViewFour from '../view/es-flex-view-four'
import ESFlexViewFive from '../view/es-flex-view-five'

export default {
  name: 'space-between',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onButtonClicked() {
    }
  },
  components: {
    'es-flex-view-one': ESFlexViewOne,
    'es-flex-view-two': ESFlexViewTwo,
    'es-flex-view-three': ESFlexViewThree,
    'es-flex-view-four': ESFlexViewFour,
    'es-flex-view-five': ESFlexViewFive,
  }
};
</script>

<style>

.es-flex-justify-content-between-css {
  width: 1000px;
  height: 300px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #40b883;
}
</style>
