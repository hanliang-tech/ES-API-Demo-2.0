<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-canvas-component
        ref="canvasView12"
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
  name: '进度条',
  mixins: [ESPage],
  data() {
    return {
      processInterval: null
    }
  },
  mounted: function () {

    //------------------进度条------------------------------------
    const ctx12 = this.$refs.canvasView12;
    ctx12.lineWidth(10);//宽度
    let degree = 360;
    this.processInterval = setInterval(function () {
      ctx12.clearRect(0, 0, 500, 400);//擦掉，重新绘制
      //用设计的底色圆环
      ctx12.strokeStyle('#54FF9F');//BEBEBE  54FF9F
      ctx12.lineWidth(10);//宽度
      ctx12.beginPath();
      ctx12.arc(150, 200, 100, 0, 2 * Math.PI);     //画圆
      ctx12.stroke();
      //第二个圆环
      if (degree >= 0) {
        ctx12.strokeStyle('#BEBEBE');//描边底色
        ctx12.lineWidth(10);//宽度
        ctx12.beginPath();
        ctx12.arc(150, 200, 100, 3 * Math.PI / 2, degree / 360 * Math.PI * 2 - Math.PI / 2);
        ctx12.stroke();
        degree -= 3;
        ctx12.drawAction('进度条');
      } else {
        //循环加载
        degree = 360;
        //一次加载完毕
        if (this.processInterval) {
          clearInterval(this.processInterval);     //结束循环
        }
        ctx12.clearRect(0, 0, 500, 400);
        ctx12.drawAction('绘制完毕');
        ctx12.drawFinish();
      }
    }, 200);

  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit('onButtonFocused', e.isFocused);
    },
    onClick(e) {
    },
  },
  beforeDestroy() {
    if (this.processInterval) {
      clearInterval(this.processInterval);     //结束循环
    }
  }
};
</script>

<style scoped>

.canvas_layout_style {
  width: 600px;
  height: 600px;
}

</style>
