<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`debug/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESDebugPageList from "@/components/es-debug";

export default {
  name: "调试",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESDebugPageList).map(data => ({
        id: data,
        name: ESDebugPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
