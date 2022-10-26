<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <text text="绘制矩形"></text>
        <es-canvas-component
          ref="canvasView1"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制各种矩形"></text>
        <es-canvas-component
          ref="canvasView2"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制蚂蚁线"></text>
        <es-canvas-component
          ref="canvasView3"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制文字"></text>
        <es-canvas-component
          ref="canvasView4"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制不带颜色logo"></text>
        <es-canvas-component
          ref="canvasView5"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制带颜色logo"></text>
        <es-canvas-component
          ref="canvasView6"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制裁切"></text>
        <es-canvas-component
          ref="canvasView7"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制保存恢复"></text>
        <es-canvas-component
          ref="canvasView8"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制渐变颜色"></text>
        <es-canvas-component
          ref="canvasView9"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制渐变logo"></text>
        <es-canvas-component
          ref="canvasView10"
          class="canvas_layout_style"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
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
        <text text="动画效果进度条"></text>
        <es-canvas-component
          ref="canvasView12"
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
          id="13"
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
        <text text="绘制其他View"></text>
        <es-canvas-component
          ref="canvasView15"
          class="canvas_layout_style2"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
          @click="onClick"
          @focus="onFocus"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="Text"></text>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="Text"></text>
      </div>
    </div>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";
import {CanvasGradient} from '@extscreen/es-canvas-component';

const TAG = 'TEST_';

export default {
  name: '使用初探',
  mixins: [ESPage],
  data() {
    return {
      interval: null,
      processInterval: null,
    };
  },
  mounted: function () {
    setTimeout(() => {

      const r = 20;
      const h = 400;
      const p = Math.PI;
      const s = 40;

      //------------------绘制矩形1----------------
      const cxt1 = this.$refs.canvasView1;
      cxt1.fillStyle('#ff0000');
      cxt1.fillRect(50, 50, 280, 280);
      cxt1.drawAction('绘制矩形');//afafaf  00ccff

      //------------------绘制矩形2----------------
      const cxt2 = this.$refs.canvasView2;
      cxt2.fillStyle('#00ccff');
      cxt2.fillRect(50, 50, 300, 300);
      cxt2.fillStyle('#afafaf');
      cxt2.fillRect(30, 30, 200, 200);
      cxt2.drawAction('绘制两个矩形');

      //------------------绘制边界----------------
      const cxt3 = this.$refs.canvasView3;
      let offset = 0;
      cxt3.lineWidth(2);
      this.interval = setInterval(() => {
        offset++;
        if (offset > 16) {
          offset = 0;
        }
        cxt3.clearRect(0, 0, 300, 300);
        cxt3.lineDashOffset(-offset);
        cxt3.setLineDash(4, 2);
        cxt3.strokeRect(10, 10, 280, 280);
        cxt3.drawAction('蚂蚁线');
      }, 500);

      //------------------绘制文字----------------
      const cxt4 = this.$refs.canvasView4;
      cxt4.textAlign('top');
      cxt4.font('40px');
      cxt4.fillText('hello 哈哈哈', 0, 150);
      cxt4.drawAction('done');

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

      //------------------裁切----------------
      const ctx7 = this.$refs.canvasView7;
      //绘制一个红色矩形
      ctx7.fillStyle('#ff0000');
      ctx7.fillRect(20, 20, 200, 200);
      //使用裁切路径绘制一个圆
      ctx7.beginPath();
      ctx7.arc(120, 120, 120, 0, Math.PI * 2, true);
      ctx7.clip();
      //绘制一个蓝色矩形，超出圆形裁切路径之外的部分无法绘制
      ctx7.fillStyle('#0000C8');
      ctx7.fillRect(80, 80, 200, 200);
      ctx7.drawAction('裁切');

      //------------------保存状态----------------
      const ctx8 = this.$refs.canvasView8;
      ctx8.fillRect(20, 20, 200, 200); // 使用默认设置，即黑色样式，绘制一个矩形
      ctx8.save(); // 保存当前黑色样式的状态
      ctx8.fillStyle('#ff0000'); // 设置一个填充样式，红色
      ctx8.fillRect(30, 30, 200, 200); // 使用红色样式绘制一个矩形
      ctx8.save(); // 保存当前红色样式的状态
      ctx8.fillStyle('#00ff00'); // 设置一个新的填充样式，绿色
      ctx8.fillRect(40, 40, 200, 200); // 使用绿色样式绘制一个矩形
      ctx8.restore(); // 取出栈顶的红色样式状态，恢复
      ctx8.fillRect(50, 50, 200, 200); // 此时状态为红色样式，绘制一个矩形
      ctx8.restore(); // 取出栈顶的黑色样式状态，恢复
      ctx8.fillRect(60, 60, 200, 200); // 此时状态为黑色样式，绘制一个矩形
      ctx8.drawAction('保存恢复');

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


      //------------------进度条------------------------------------
      const ctx12 = this.$refs.canvasView12;
      ctx12.lineWidth(20);//宽度
      let degree = 360;
      this.processInterval = setInterval(function () {
        ctx12.clearRect(0, 0, 500, 400);//擦掉，重新绘制
        //用设计的底色圆环
        ctx12.strokeStyle('#54FF9F');//BEBEBE  54FF9F
        ctx12.lineWidth(20);//宽度
        ctx12.beginPath();
        ctx12.arc(150, 200, 100, 0, 2 * Math.PI);     //画圆
        ctx12.stroke();
        //第二个圆环
        if (degree >= 0) {
          ctx12.strokeStyle('#BEBEBE');//描边底色
          ctx12.lineWidth(20);//宽度
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
          alert('加载完毕!');
          ctx12.clearRect(0, 0, 500, 400);
          ctx12.drawAction('绘制完毕');
          ctx12.drawFinish();
        }
      }, 200);

      //------------------绘制二阶 三阶贝塞尔曲线------------------------------------
      const ctx13 = this.$refs.canvasView13;
      ctx13.strokeStyle('rgb(188,219,236)');//描框颜色
      ctx13.lineWidth(10);
      ctx13.moveTo(20, 20);//起始点位置
      ctx13.quadraticCurveTo(50, 200, 200, 20);//拉扯点和结束点位置坐标
      ctx13.stroke();//开始描框
      ctx13.drawAction('二阶贝塞尔');

      const ctx14 = this.$refs.canvasView14;
      ctx14.beginPath();
      ctx13.lineWidth(5);
      ctx14.moveTo(20, 20);
      ctx14.bezierCurveTo(20, 100, 200, 100, 200, 20);
      ctx14.stroke();
      ctx14.drawAction('三阶贝塞尔');

      //------------------绘制复杂图形------------------------------------
      const ctx15 = this.$refs.canvasView15;
      // 草原
      drawPrairie(ctx15);
      // 天空
      drawSky(ctx15);
      // 云朵
      drawClouds(ctx15);

      function drawPrairie(ctx15) {
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
      }

      function drawSky(ctx15) {
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

      function drawClouds(ctx15) {
        for (let i = 0; i < 10; i++) {
          const x0 = 500 * Math.random() + 50;
          const y0 = 200 * Math.random() + 50;
          const c0 = 100 * Math.random() + 50;
          // 单个云朵
          drawCloud(ctx15, x0, y0, c0);
        }
      }

      function drawCloud(ctx15, cx, cy, cw) {
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
      }

    }, 500);
    /* const r = 20
    const h = 380
    const p = Math.PI
    const s = 60 */


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
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.processInterval) {
      clearInterval(this.processInterval);
    }

    this.$refs.canvasView1.destoryView();
    this.$refs.canvasView2.destoryView();
    this.$refs.canvasView3.destoryView();
    this.$refs.canvasView4.destoryView();
    this.$refs.canvasView5.destoryView();
    this.$refs.canvasView6.destoryView();
    this.$refs.canvasView7.destoryView();
    this.$refs.canvasView8.destoryView();
    this.$refs.canvasView9.destoryView();
    this.$refs.canvasView10.destoryView();
    this.$refs.canvasView11.destoryView();
    this.$refs.canvasView12.destoryView();
    this.$refs.canvasView13.destoryView();
    this.$refs.canvasView14.destoryView();
    this.$refs.canvasView15.destoryView();
  }
};
</script>

<style scoped>

.canvas_layout_style {
  width: 300px;
  height: 300px;
}

.canvas_layout_style2 {
  width: 300px;
  height: 300px;
}
</style>
