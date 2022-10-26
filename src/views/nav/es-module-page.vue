<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`module/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import ESModulePageList from "@/components/es-module";
import {ESPage} from "@extscreen/es-core";

export default {
  name: "基础模块",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESModulePageList).map(data => ({
        id: data,
        name: ESModulePageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
