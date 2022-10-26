<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`network/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESComponentPageList from "@/components/es-component";
import ESNetworkPageList from "@/components/es-network";

export default {
  name: "网络",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESNetworkPageList).map(data => ({
        id: data,
        name: ESNetworkPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
