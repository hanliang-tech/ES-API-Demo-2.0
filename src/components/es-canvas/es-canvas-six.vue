<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text text="绘制蚂蚁线"></text>
      <es-canvas-component
        ref="canvasView3"
        class="canvas_layout_style"
        @click="onClick"
        @focus="onFocus"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1.1"/>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";

const TAG = 'TEST_';

export default {
  name: '蚂蚁线',
  mixins: [ESPage],
  data() {
    return {
      processInterval: null,
    }
  },
  mounted: function () {
    //------------------蚂蚁线----------------
    const cxt3 = this.$refs.canvasView3;
    let offset = 0;
    cxt3.lineWidth(2);
    this.processInterval = setInterval(() => {
      offset++;
      if (offset > 16) {
        offset = 0;
      }
      cxt3.clearRect(0, 0, 500, 500);
      cxt3.lineDashOffset(-offset);
      cxt3.setLineDash(8, 4);
      cxt3.strokeRect(10, 10, 280, 280);
      cxt3.drawAction('蚂蚁线');
    }, 1000);
  },
  beforeDestroy() {
    if (this.processInterval) {
      clearInterval(this.processInterval);
    }
  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit('onButtonFocused', e.isFocused);
    },
    onClick(e) {
    }
  },
};
</script>

<style scoped>

.canvas_layout_style {
  width: 300px;
  height: 300px;
}
</style>
