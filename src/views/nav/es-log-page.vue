<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`log/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESLogPageList from "@/components/es-log";

export default {
  name: "日志",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESLogPageList).map(data => ({
        id: data,
        name: ESLogPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
