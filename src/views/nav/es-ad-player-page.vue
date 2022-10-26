<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`ad/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESADPlayerList from "@/components/es-ad-player";

export default {
  name: "广告播放",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESADPlayerList).map(data => ({
        id: data,
        name: ESADPlayerList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
