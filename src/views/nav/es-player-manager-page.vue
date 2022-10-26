<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`manager/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESPlayerManagerPageList from "@/components/es-player-manager";

export default {
  name: "播放管理器",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESPlayerManagerPageList).map(data => ({
        id: data,
        name: ESPlayerManagerPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
