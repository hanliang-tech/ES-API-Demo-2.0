<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`seekbar/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESSeekBarPageList from "./index";

export default {
  name: "SeekBar组件",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESSeekBarPageList).map(data => ({
        id: data,
        name: ESSeekBarPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
