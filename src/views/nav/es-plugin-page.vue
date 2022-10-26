<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`plugin/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESPluginPageList from "@/components/es-plugin";

export default {
  name: "插件管理",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESPluginPageList).map(data => ({
        id: data,
        name: ESPluginPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
