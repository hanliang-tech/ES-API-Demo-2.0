<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="使用初探"></text>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, _) in routerList" :key="item.id"
          :text="item.name"
          :url="`router/${item.id}`"/>
      </div>
      <text text="打开ES页面"></text>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, _) in routeESPageList" :key="item.id"
          :text="item.name"
          :url="`router/${item.id}`"/>
      </div>
      <text text="打开第三方应用"></text>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, _) in routeAppPageList" :key="item.id"
          :text="item.name"
          :url="`router/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESRouterESList from "@/components/es-router/es";
import ESRouterNativeList from "@/components/es-router/native";
import ESRouterList from "@/components/es-router/launch";

export default {
  name: "页面路由",
  mixins: [ESPage],
  data() {
    return {
      routerList: Object.keys(ESRouterList).map(data => ({
        id: data,
        name: ESRouterList[data].name,
      })),
      routeESPageList: Object.keys(ESRouterESList).map(data => ({
        id: data,
        name: ESRouterESList[data].name,
      })),
      routeAppPageList: Object.keys(ESRouterNativeList).map(data => ({
        id: data,
        name: ESRouterNativeList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
