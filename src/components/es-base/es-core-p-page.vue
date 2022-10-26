<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="不带样式："></text>
      <p class="p-demo-content">这是最普通的一行文字</p>
      <text text="颜色："></text>
      <p class="p-demo-1 p-demo-content">这行文字改变了颜色</p>
      <text text="尺寸："></text>
      <p class="p-demo-2 p-demo-content">这行改变了大小</p>
      <text text="粗体："></text>
      <p class="p-demo-3 p-demo-content">这行加粗了</p>
      <text text="下划线">：</text>
      <p class="p-demo-4 p-demo-content">这里有条下划线</p>
      <text text="删除线："></text>
      <p class="p-demo-5 p-demo-content">这里有条删除线</p>
    </div>
  </div>

</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  mixins: [ESPage],
  name: 'p组件',
};
</script>

<style scope>


.p-demo-content {
  margin: 20px;
  font-size: 40px;
}

.p-demo-1 {
  color: #f44837;
  font-size: 40px;
}

.p-demo-2 {
  font-size: 60px;
}

.p-demo-3 {
  font-weight: bold;
  font-size: 40px;
}

.p-demo-4 {
  text-decoration-line: underline;
  text-decoration: underline;
  font-size: 40px;
}

.p-demo-5 {
  text-decoration: line-through;
  font-size: 40px;
}

.p-demo-6 {
  color: #0052d9;
  font-family: TTTGB;
  font-size: 32px;
}
</style>
