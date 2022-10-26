<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <text text="绘制矩形"></text>
        <es-canvas-component
          ref="canvasView1"
          class="test_canvas1_view"
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
          class="test_canvas1_view"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>

      <div class="es-sdk-content-column-css">
        <text text="绘制文字"></text>
        <es-canvas-component
          ref="canvasView4"
          class="test_canvas_font_view"
          @click="onClick"
          @focus="onFocus"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"/>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="绘制文字"></text>
        <es-canvas-component
          ref="canvasView16"
          class="test_canvas_font_view"
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

const TAG = 'TEST_';

export default {
  name: '基础',
  mixins: [ESPage],
  mounted: function () {


    //------------------绘制矩形1----------------
    const cxt1 = this.$refs.canvasView1;
    cxt1.fillStyle('#ff0000');
    cxt1.fillRect(0, 0, 300, 350);
    cxt1.drawAction('绘制矩形');//afafaf  00ccff

    //------------------绘制矩形2----------------
    const cxt2 = this.$refs.canvasView2;
    cxt2.fillStyle('#00ccff');
    cxt2.fillRect(50, 50, 300, 300);
    cxt2.fillStyle('#afafaf');
    cxt2.fillRect(30, 30, 200, 200);
    cxt2.drawAction('绘制两个矩形');

    //------------------绘制文字1----------------
    const cxt4 = this.$refs.canvasView4;
    cxt4.textAlign('top');
    cxt4.font('30px');
    cxt4.fillText('hello World', 10, 100);
    cxt4.drawAction('done');

    //------------------绘制文字2----------------
    const cxt16 = this.$refs.canvasView16
    cxt16.textBaseline('top')
    cxt16.font('30px');
    cxt16.strokeText('你好top', 10, 50)
    cxt16.textBaseline('middle')
    cxt16.font('30px');
    cxt16.strokeText('你好middle', 10, 100)
    cxt16.textBaseline('bottom')
    cxt16.font('30px');
    cxt16.strokeText('你好bottom', 10, 150)
    cxt16.drawAction("第二种绘制")

    /* //------------------裁切----------------
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
    ctx8.drawAction('保存恢复'); */
    /*
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
        ctx14.drawAction('三阶贝塞尔'); */
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
.test_canvas1_view {
  width: 300px;
  height: 300px;
}

.test_canvas_font_view {
  width: 300px;
  height: 300px;
}

</style>
