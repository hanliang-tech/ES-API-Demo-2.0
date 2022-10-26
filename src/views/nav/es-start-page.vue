<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`start/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESStartList from "@/components/es-start";

export default {
  name: "起步",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESStartList).map(data => ({
        id: data,
        name: ESStartList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
