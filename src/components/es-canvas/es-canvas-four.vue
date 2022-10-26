<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <text text="绘制线拐点样式"></text>
        <es-canvas-component
          ref="canvasView11"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>

      <div class="es-sdk-content-column-css">
        <text text="绘制二阶贝塞尔曲线"></text>
        <es-canvas-component
          ref="canvasView13"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>

      <div class="es-sdk-content-column-css">
        <text text="绘制三阶贝塞尔曲线"></text>
        <es-canvas-component
          ref="canvasView14"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>

      <div class="es-sdk-content-column-css">
        <text text="绘制其他"></text>
        <es-canvas-component
          ref="canvasView15"
          id="15"
          class="canvas_layout_style_css"
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

import {CanvasGradient} from '@extscreen/es-canvas-component';
import {ESPage} from "@extscreen/es-core";

const TAG = 'TEST_';

export default {
  name: '图形',
  mixins: [ESPage],
  mounted: function () {
//------------------拐点样式------------------------------------
    const ctx11 = this.$refs.canvasView11;
    // 绘制第一条直线
    ctx11.beginPath();
    ctx11.moveTo(50, 100);
    ctx11.lineTo(150, 50);
    ctx11.lineTo(250, 100);
    ctx11.strokeStyle('#ff0000');
    ctx11.lineWidth(25);
    // 使用bevel
    ctx11.lineJoin('bevel');
    ctx11.stroke();
    // 绘制第二条直线
    ctx11.beginPath();
    ctx11.moveTo(50, 200);
    ctx11.lineTo(150, 150);
    ctx11.lineTo(250, 200);
    ctx11.strokeStyle('#00FF7F');
    ctx11.lineWidth(25);
    // 使用round
    ctx11.lineJoin('round');
    ctx11.stroke();
    // 绘制第三条直线
    ctx11.beginPath();
    ctx11.moveTo(50, 300);
    ctx11.lineTo(150, 250);
    ctx11.lineTo(250, 300);
    ctx11.strokeStyle('#0000CD');
    ctx11.lineWidth(25);
    // 使用miter
    ctx11.lineJoin('miter');
    ctx11.stroke();
    ctx11.drawAction('绘制线拐点样式');

    //------------------绘制二阶 三阶贝塞尔曲线------------------------------------
    const ctx13 = this.$refs.canvasView13;
    ctx13.strokeStyle('rgb(188,219,236)');//描框颜色
    ctx13.moveTo(20, 20);//起始点位置
    ctx13.quadraticCurveTo(50, 200, 200, 20);//拉扯点和结束点位置坐标
    ctx13.stroke();//开始描框
    ctx13.drawAction('二阶贝塞尔');

    const ctx14 = this.$refs.canvasView14;
    ctx14.beginPath();
    ctx14.moveTo(20, 20);
    ctx14.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx14.stroke();
    ctx14.drawAction('三阶贝塞尔');

    //------------------绘制复杂图形------------------------------------
    const ctx15 = this.$refs.canvasView15;
    // 草原
    this.drawPrairie(ctx15);
    // 天空
    this.drawSky(ctx15);
    // 云朵
    this.drawClouds(ctx15);
  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit('onButtonFocused', e.isFocused);
    },

    onClick(e) {

    },
    drawPrairie(ctx15) {
      ctx15.save();
      ctx15.beginPath();
      ctx15.moveTo(0, 420);
      ctx15.bezierCurveTo(250, 300, 350, 550, 800, 400);
      ctx15.lineTo(800, 600);
      ctx15.lineTo(0, 600);
      ctx15.closePath();
      const grd = new CanvasGradient(0, 600, 600, 0);
      grd.addColorStop(0, '#00aa58');
      grd.addColorStop(0.3, '#63aa7b');
      grd.addColorStop(1, '#04aa00');
      ctx15.fillStyle(grd);
      ctx15.fill();
      ctx15.restore();
      ctx15.drawAction('画草原');
    },

    drawCloud(ctx15, cx, cy, cw) {
      const maxWidth = 800;
      cx = cx % maxWidth;
      const ch = cw * 0.6;
      ctx15.beginPath();
      const grd = new CanvasGradient(0, 0, 0, cy);
      grd.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      grd.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
      ctx15.arc(cx, cy, cw * 0.19, 0, 360);
      ctx15.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360);
      ctx15.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360);
      ctx15.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360);
      ctx15.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360);
      ctx15.fillStyle(grd);
      ctx15.fill();
      ctx15.drawAction('单个云');
    },
    drawClouds(ctx15) {
      for (let i = 0; i < 10; i++) {
        const x0 = 500 * Math.random() + 50;
        const y0 = 200 * Math.random() + 50;
        const c0 = 100 * Math.random() + 50;
        // 单个云朵
        this.drawCloud(ctx15, x0, y0, c0);
      }
    },
    drawSky(ctx15) {
      ctx15.save();
      ctx15.beginPath();
      ctx15.moveTo(0, 420);
      ctx15.bezierCurveTo(250, 300, 350, 550, 800, 400);
      ctx15.lineTo(800, 0);
      ctx15.lineTo(0, 0);
      ctx15.closePath();
      const grd = new CanvasGradient(400, 0, 50, 400, 0, 200);
      grd.addColorStop(0, '#42a9aa');
      grd.addColorStop(1, '#2491aa');
      ctx15.fillStyle(grd);
      ctx15.fill();
      ctx15.restore();
      ctx15.drawAction('画天空');
    }
  },
  components: {},
  data() {
    return {};
  },

  beforeDestroy() {
    this.$refs.canvasView11.destoryView();
    this.$refs.canvasView13.destoryView();
    this.$refs.canvasView14.destoryView();
    this.$refs.canvasView15.destoryView();
  }
};
</script>

<style scoped>
.canvas_layout_style {
  width: 400px;
  height: 400px;
}

.canvas_layout_style_css {
  width: 400px;
  height: 400px;
}
</style>
