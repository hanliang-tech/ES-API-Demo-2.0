<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <text text="flex-direction：column"></text>
        <div class="es-flex-column-css">
          <es-flex-view-one/>
          <es-flex-view-two/>
          <es-flex-view-three/>
          <es-flex-view-four/>
          <es-flex-view-five/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="flex-direction：column-reverse"></text>
        <div class="es-flex-column-reverse-css">
          <es-flex-view-one/>
          <es-flex-view-two/>
          <es-flex-view-three/>
          <es-flex-view-four/>
          <es-flex-view-five/>
        </div>
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
  name: 'column',
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
.es-flex-column-css {
  width: 400px;
  height: 900px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #40b883;
}

.es-flex-column-reverse-css {
  width: 400px;
  height: 900px;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #40b883;
}
</style>
