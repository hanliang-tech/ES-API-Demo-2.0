<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`video/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import ESVideoPlayerPageList from "@/components/es-video-player";
import {ESPage} from "@extscreen/es-core";

export default {
  name: "视频播放",
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESVideoPlayerPageList).map(data => ({
        id: data,
        name: ESVideoPlayerPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
