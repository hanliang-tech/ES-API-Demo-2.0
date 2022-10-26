<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`eventbus/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESEventBusPageList from "@/components/es-eventbus";

export default {
  name: "事件总线",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESEventBusPageList).map(data => ({
        id: data,
        name: ESEventBusPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
