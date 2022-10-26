<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`component/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESComponentPageList from "@/components/es-component";

export default {
  name: "扩展组件",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESComponentPageList).map(data => ({
        id: data,
        name: ESComponentPageList[data].name,
      })),
    };
  },
}
</script>

<style>

</style>
