<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`focus/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESFocusPageList from "@/components/es-focus";

export default {
  name: "焦点",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESFocusPageList).map(data => ({
        id: data,
        name: ESFocusPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
