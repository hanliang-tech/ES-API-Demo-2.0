<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`key/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESKeyPageList from "@/components/es-key";

export default {
  name: "页面按键管理",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESKeyPageList).map(data => ({
        id: data,
        name: ESKeyPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
