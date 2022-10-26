<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`canvas/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESCanvasList from "@/components/es-canvas";

export default {
  name: "画布",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESCanvasList).map(data => ({
        id: data,
        name: ESCanvasList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
