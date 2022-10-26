<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`remote/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESRemoteList from "@/components/es-remote";

export default {
  name: "欢小柚遥控器",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESRemoteList).map(data => ({
        id: data,
        name: ESRemoteList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
