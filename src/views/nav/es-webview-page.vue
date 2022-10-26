<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, _) in dataList" :key="item.id"
        :text="item.name"
        :url="`webview/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESWebViewPageList from "@/components/es-webview";

export default {
  name: "WebView",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESWebViewPageList).map(data => ({
        id: data,
        name: ESWebViewPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
