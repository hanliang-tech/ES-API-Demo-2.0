<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`animation/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESAnimationPageList from "@/components/es-animation";

export default {
  name: "动画",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESAnimationPageList).map(data => ({
        id: data,
        name: ESAnimationPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
