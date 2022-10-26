<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`voice/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESVoiceList from "@/components/es-voice";

export default {
  name: "语音",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESVoiceList).map(data => ({
        id: data,
        name: ESVoiceList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
