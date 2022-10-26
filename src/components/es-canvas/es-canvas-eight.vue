<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text-button text="点击切换" @onButtonClicked="changeGlobalCompositeOperation"/>
      <es-canvas-component
        ref="canvasView17"
        id="17"
        class="test_canvas1_view"
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
  name: '合成',
  mixins: [ESPage],
  mounted: function () {
    //------------------绘制矩形1----------------
    const cxt17 = this.$refs.canvasView17;
    // 清除画布
    cxt17.clearRect(0, 0, 320, 320); // 正常绘制第一个矩形
    cxt17.fillStyle('#00E5EE');
    cxt17.fillRect(10, 10, 200, 200); // 设置canvas的合成类型
    cxt17.globalCompositeOperation('xor'); // 绘制第二个矩形
    cxt17.fillStyle('rgba(255, 0, 0, 0.5)');
    cxt17.fillRect(110, 110, 200, 200);
    cxt17.drawAction('合成');
  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit('onButtonFocused', e.isFocused);
    },

    changeGlobalCompositeOperation() {
      const globalCompositeOperationArr = ['source-over', 'source-atop',
        'source-in', 'source-out',
        'destination-over', 'destination-atop',
        'destination-in', 'destination-out',
        'lighter', 'copy', 'xor'];

      const index = globalCompositeOperationArr.indexOf(this.globalCompositeOperation);
      if (index < globalCompositeOperationArr.length - 1) {
        console.log("当前index=============" + index)
        this.globalCompositeOperation = globalCompositeOperationArr[index + 1];
      } else {
        console.log("当前index 归0=============" + index)
        this.globalCompositeOperation = globalCompositeOperationArr[0];
      }
      let str = this.globalCompositeOperation;
      const cxt17 = this.$refs.canvasView17;
      // 清除画布
      cxt17.clearRect(0, 0, 320, 320); // 正常绘制第一个矩形
      cxt17.fillStyle('#00E5EE');
      cxt17.fillRect(10, 10, 200, 200); // 设置canvas的合成类型
      cxt17.globalCompositeOperation(str); // 绘制第二个矩形
      cxt17.fillStyle('rgba(255, 0, 0, 0.5)');
      cxt17.fillRect(110, 110, 200, 200);
      cxt17.drawAction('');
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
.test_canvas1_view {
  width: 300px;
  height: 300px;
}

</style>
