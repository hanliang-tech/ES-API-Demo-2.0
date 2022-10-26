<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`core/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import ESCoreListPage from "@/components/es-base";
import {ESPage} from "@extscreen/es-core";

export default {
  name: "基础组件",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESCoreListPage).map(data => ({
        id: data,
        name: ESCoreListPage[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
