<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="平移" @onButtonClicked="translate"/>
        <text-button text="旋转" @onButtonClicked="rotate"/>
        <text-button text="缩放" @onButtonClicked="scale"/>
        <text-button text="变形" @onButtonClicked="transform"/>
      </div>
      <div class="es-sdk-content-row-css">
        <es-canvas-component
          ref="canvasView18"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";

const TAG = 'TEST_';

export default {
  name: 'test canvas5',
  mixins: [ESPage],
  mounted: function () {
    /* //------------------绘制渐变----------------
    const cxt1 = this.$refs.canvasView18;
    //渐变
    cxt1.shadowOffsetX(60)
    cxt1.shadowOffsetY(60)
    cxt1.shadowColor('#000000')
    cxt1.shadowBlur(10)
    cxt1.fillStyle('rgba(255,0,0,0.5)')
    cxt1.globalAlpha(0.5)
    cxt1.fillRect(0, 0, 200, 200);
    cxt1.drawAction("") */

    //动画变形
    const cxt1 = this.$refs.canvasView18;
    cxt1.fillStyle('#00E5EE');
    cxt1.fillRect(10, 10, 200, 200);
    cxt1.drawAction("动画变形")

    /* const canvas = this.$refs.canvasView16;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    //img.src = 'https://www.quickapp.cn/assets/images/home/logo_quickApp.png'
    img.src = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF';
    img.onload = function () {
      ctx.drawImage(img, 40, 40, 300, 100);
    }; */
    //------------------绘制bitmap 1 ----------------
    /* const cxt16 = this.$refs.canvasView16;
    const src = 'https://www.quickapp.cn/assets/images/home/logo_quickApp.png'
    console.log('图片src ====== ' +src);
    cxt16.drawImage(1,0, 0, 40, 40, 0, 0, 300, 100,src);
    console.log('图片src1 drawImage====== ');
    cxt16.drawAction('绘制图片');
    console.log('图片src1 drawAction====== '); */
    /* img.onload = function () {
      cxt16.drawImage(1, 0, 0, 40, 40, 0, 0, 300, 100);
      cxt16.drawAction('绘制图片');
    }; */
  },
  methods: {
    translate() {
      const cxt18 = this.$refs.canvasView18;
      // 清除画布
      cxt18.clearRect(0, 0, 0, 0)
      cxt18.fillStyle('#00E5EE');
      cxt18.translate(50, 50);
      cxt18.fillRect(0, 0, 200, 200);
      // reset current transformation matrix to the identity matrix
      cxt18.setTransform(1, 0, 0, 1, 0, 0);
      cxt18.drawAction("平移")
    },
    rotate() {
      const cxt18 = this.$refs.canvasView18;
      // 清除画布
      cxt18.clearRect(0, 0, 0, 0)
      cxt18.fillStyle('#00E5EE');
      cxt18.rotate(5 * Math.PI / 180)
      cxt18.fillRect(50, 50, 200, 200);
      cxt18.drawAction("")
    },
    scale() {
      const cxt18 = this.$refs.canvasView18;
      // 清除画布
      cxt18.clearRect(0, 0, 0, 0)
      cxt18.fillStyle('#00E5EE');
      cxt18.fillRect(0, 0, 200, 200);
      cxt18.scale(1.5, 1.5)
      cxt18.fillRect(0, 0, 200, 200);
      cxt18.drawAction("")
    },
    transform() {
      const cxt18 = this.$refs.canvasView18;
      // 清除画布
      cxt18.clearRect(0, 0, 0, 0)
      cxt18.fillStyle('#FFE4B5');
      cxt18.fillRect(0, 0, 250, 100)

      cxt18.transform(1, 0.5, -0.5, 1, 30, 10);
      cxt18.fillStyle('#FF0000');
      cxt18.fillRect(0, 0, 250, 100);

      cxt18.transform(1, 0.5, -0.5, 1, 30, 10);
      cxt18.fillStyle('#0000FF');
      cxt18.fillRect(0, 0, 250, 100);
      cxt18.drawAction("")
    },
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
