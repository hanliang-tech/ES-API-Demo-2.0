<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-canvas-component
        ref="canvasView18"
        id="18"
        class="canvas_layout_style"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1.1"
        @click="onClick"
        @focus="onFocus"/>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";

const TAG = 'TEST_';

export default {
  name: '渐变和阴影',
  mixins: [ESPage],
  mounted: function () {
    //------------------绘制渐变----------------
    const cxt18 = this.$refs.canvasView18;
    //渐变
    cxt18.shadowOffsetX(60)
    cxt18.shadowOffsetY(60)
    cxt18.shadowColor('#000000')
    cxt18.shadowBlur(10)
    cxt18.fillStyle('rgba(255,0,0,0.5)')
    cxt18.globalAlpha(0.5)
    cxt18.fillRect(0, 0, 200, 200);
    cxt18.drawAction("")

  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit('onButtonFocused', e.isFocused);
    },
    onClick(e) {

    }
  },
  components: {},
  // 切换canvas合成类型
  data() {
    return {};
  },
};
</script>

<style scoped>

.canvas_layout_style {
  width: 400px;
  height: 400px;
}

</style>
