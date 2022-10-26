<template>
  <div class="es-view-component-root-page">
    <es-view-component
      class="es-view-component-page"
      ref="es_outer_view"
      :focusable="true"
      @on-es-ui-event="onOuterESUIEvent">
      <es-view-component
        ref="es_inner_view"
        class="es-view-component-page-button"
        :focusable="true"
        :requestFocus="true"
        :enableFocusBorder="true"
        :focusScale="1.1"
        @on-es-ui-event="onInnerESUIEvent">
      </es-view-component>
    </es-view-component>

    <div class="es-view-component-page-button"
         :focusable="true"
         :enableFocusBorder="true"
         :focusScale="1.1"
         @click="onESViewClicked">
      <span class="es-view-component-page-text">点击</span>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

const TAG = 'ESViewComponent'

export default {
  name: "es-view-component-page",
  mixins: [ESPage],
  methods: {
    onESViewClicked(e) {
      this.$refs.es_inner_view.sendUIEvent('onESUIEvent', {
        msg: 'hello~'
      });
    },
    onInnerESUIEvent(value) {
      ESLog.e(TAG, '-----onInnerESUIEvent----->>>>' + JSON.stringify(value));
    },
    onOuterESUIEvent(value) {
      ESLog.e(TAG, '-----onOuterESUIEvent----->>>>' + JSON.stringify(value));
    },
  },
}
</script>

<style scoped>

.es-view-component-root-page {
  width: 1920px;
  height: 1080px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.es-view-component-page {
  width: 500px;
  height: 500px;
  background-color: red;
  position: absolute;
}

.es-view-component-page-button {
  width: 550px;
  height: 80px;
  background-color: #42b983;
  margin: 20px;
  border-radius: 8px;
}

.es-view-component-page-text {
  width: 550px;
  height: 80px;
  font-size: 20px;
  text-align: center;
  color: white;
}

.es-view-component-page-title-text {
  width: 550px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  color: #42b983;
  margin-bottom: 100px;
}
</style>
