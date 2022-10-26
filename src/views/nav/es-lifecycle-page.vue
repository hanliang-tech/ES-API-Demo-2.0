<template>
  <page class="es-sdk-root-css" path="home">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`lifecycle/${item.id}`"/>
    </div>
  </page>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESLifecyclePageList from "@/components/es-lifecycle";

export default {
  name: "生命周期管理",
  mixins: [ESPage],
  methods: {},
  data() {
    return {
      dataList: Object.keys(ESLifecyclePageList).map(data => ({
        id: data,
        name: ESLifecyclePageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
