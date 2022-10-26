<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <text text="绘制不带颜色logo"></text>
        <es-canvas-component
          ref="canvasView5"
          class="canvas_layout_style"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制带颜色logo"></text>
        <es-canvas-component
          ref="canvasView6"
          class="canvas_layout_style"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制渐变颜色"></text>
        <es-canvas-component
          ref="canvasView9"
          class="canvas_layout_style"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制渐变logo"></text>
        <es-canvas-component
          ref="canvasView10"
          class="canvas_layout_style"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";
import {CanvasGradient} from '@extscreen/es-canvas-component';

const TAG = 'TEST_';

export default {
  name: '复杂',
  mixins: [ESPage],
  mounted: function () {
    /* const r = 20
    const h = 380
    const p = Math.PI
    const s = 60 */

    const r = 20;
    const h = 300;
    const p = Math.PI;
    const s = 40;

    //------------------不带颜色logo----------------
    const ctx5 = this.$refs.canvasView5;
    ctx5.beginPath();
    ctx5.moveTo(h / 2 + s, h / 2);
    ctx5.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true);
    ctx5.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false);
    ctx5.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false);
    ctx5.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false);
    ctx5.moveTo(h / 2 + s * 2, h / 2 + s + s / 2);
    ctx5.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false);
    ctx5.moveTo(h / 2 + s / 4 * 3, h / 2 + s / 2);
    ctx5.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false);
    ctx5.fill();
    ctx5.drawAction('绘制不带颜色的logo');
    ctx5.beginPath();
    ctx5.moveTo(h / 2 + s, h / 2);
    ctx5.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true);
    ctx5.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false);
    ctx5.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false);
    ctx5.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false);
    ctx5.fill();
    ctx5.drawAction('绘制不带颜色的logo');

    //------------------带颜色logo----------------
    const ctx6 = this.$refs.canvasView6;
    ctx6.beginPath();
    ctx6.moveTo(r * 2, r);
    ctx6.arc(r * 2, r * 2, r, -p / 2, -p, true);
    ctx6.lineTo(r, h - r * 2);
    ctx6.arc(r * 2, h - r * 2, r, p, p / 2, true);
    ctx6.lineTo(h - r * 2, h - r);
    ctx6.arc(h - r * 2, h - r * 2, r, p / 2, 0, true);
    ctx6.lineTo(h - r, r * 2);
    ctx6.arc(h - r * 2, r * 2, r, 0, -p / 2, true);
    ctx6.closePath();
    ctx6.stroke();
    ctx6.drawAction('绘制外边界');

    ctx6.beginPath();
    ctx6.moveTo(h / 2 + s, h / 2);
    ctx6.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true);
    ctx6.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false);
    ctx6.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false);
    ctx6.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false);
    ctx6.fillStyle('#4285f5');
    ctx6.fill();
    ctx6.drawAction('绘制logo');

    ctx6.beginPath();
    ctx6.moveTo(h / 2 + s * 2, h / 2 + s + s / 2);
    ctx6.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false);
    ctx6.fillStyle('#e94335');
    ctx6.fill();
    ctx6.drawAction('绘制logo');

    ctx6.beginPath();
    ctx6.moveTo(h / 2 + s / 4 * 3, h / 2 + s / 2);
    ctx6.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false);
    ctx6.fillStyle('#f9bc05');
    ctx6.fill();
    ctx6.drawAction('绘制带颜色logo');

    //------------------绘制渐变矩形----------------
    const ctx9 = this.$refs.canvasView9;
    //ctx9.fillStyle('#00ccff');
    const gradient = new CanvasGradient(0, 0, 300, 300);
    gradient.addColorStop(0, '#000fff');
    gradient.addColorStop(1, '#00ff00');
    ctx9.fillStyle(gradient);
    ctx9.fillRect(20, 20, 200, 200);
    ctx9.drawAction('渐变');

    //--------------------------绘制渐变logo
    const ctx = this.$refs.canvasView10;
    const linGrad1 = new CanvasGradient(h, h, 0, 0);
    linGrad1.addColorStop(0, '#FFFAFA');
    linGrad1.addColorStop(0.8, '#E4C700');
    linGrad1.addColorStop(1, 'rgba(228,199,0,0)');

    ctx.fillStyle(linGrad1);
    ctx.fillRect(0, 0, h, h);
    ctx.drawAction('绘制背景颜色');

    const linGrad2 = new CanvasGradient(0, 0, h, h);
    linGrad2.addColorStop(0, '#C1FFC1');
    linGrad2.addColorStop(0.5, '#ffffff');
    linGrad2.addColorStop(1, '#00BFFF');

    ctx.beginPath();
    ctx.moveTo(r * 2, r);
    ctx.arc(r * 2, r * 2, r, -p / 2, -p, true);
    ctx.lineTo(r, h - r * 2);
    ctx.arc(r * 2, h - r * 2, r, p, p / 2, true);
    ctx.lineTo(h - r * 2, h - r);
    ctx.arc(h - r * 2, h - r * 2, r, p / 2, 0, true);
    ctx.lineTo(h - r, r * 2);
    ctx.arc(h - r * 2, r * 2, r, 0, -p / 2, true);
    ctx.closePath();
    ctx.lineWidth(10);
    ctx.strokeStyle(linGrad2);
    ctx.stroke();
    ctx.drawAction('绘制边框渐变');

    ctx.beginPath();
    ctx.moveTo(h / 2 + s, h / 2);
    ctx.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true);
    ctx.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false);
    ctx.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false);
    ctx.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false);
    ctx.fillStyle('#4286f5');
    ctx.fill();
    ctx.drawAction('');

    ctx.beginPath();
    ctx.moveTo(h / 2 + s * 2, h / 2 + s + s / 2);
    ctx.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false);
    ctx.fillStyle('rgb(234, 67, 53)');
    ctx.fill();
    ctx.drawAction('');

    ctx.beginPath();
    ctx.moveTo(h / 2 + s / 4 * 3, h / 2 + s / 2);
    ctx.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false);
    ctx.fillStyle('rgba(250, 188, 5, 1)');
    ctx.fill();
    ctx.drawAction('渐变logo');

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
  data() {
    return {};
  },
};
</script>

<style scoped>

.canvas_layout_style {
  width: 300px;
  height: 300px;
}

</style>
