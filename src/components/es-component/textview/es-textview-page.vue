<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text-view class="text-view" maxLines="1" ellipsizeMode="2">这是超出后显示省略号的文本这是超出后显示省略号的文本</text-view>
      <text-view class="text-view" :focusable=false :select="true" maxLines="1" ellipsizeMode="3">
        这是超出后可以滚动的文本这是超出后可以滚动的文本
      </text-view>
      <text-view class="text-view" gravity="center">居中</text-view>
      <text-view class="text-view" gravity="start">居前</text-view>
      <text-view class="text-view" gravity="end">居后</text-view>
      <text-view class="text-view" gravity="centerHorizontal">横向居中</text-view>
      <text-view class="text-view" gravity="centerHorizontal|bottom">横向居中、纵向居下</text-view>
      <text-view class="text-view" gravity="centerVertical">纵向居中</text-view>
      <text-view class="text-view" gravity="centerVertical|end">纵向居中、横向居右</text-view>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'TextView组件',
  mixins: [ESPage],
  data() {
    return {};
  },
};
</script>

<style>
.text-view {
  width: 1920px;
  height: 80px;
  color: green;
  font-size: 30px;
}
</style>
