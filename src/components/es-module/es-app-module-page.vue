<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text text="----------------------系统应用----------------------"></text>
      <text v-for="(item, index) in systemAppList" :key="item"
            :text="JSON.stringify(item)"></text>
      <text text="----------------------用户应用----------------------"></text>
      <text v-for="(item, index) in userAppList" :key="item"
            :text="JSON.stringify(item)"></text>
    </div>
  </div>
</template>

<script>
import {ESAppManager, ESPage} from "@extscreen/es-core";

export default {
  name: "应用列表模块",
  mixins: [ESPage],
  data() {
    return {
      systemAppList: [],
      userAppList: [],
    }
  },
  methods: {
    onESCreate(params) {
      this.initAppList();
    },
    initAppList() {
      ESAppManager.init()
        .then(() => ESAppManager.getAppList())
        .then(
          (appList) => {
            this.systemAppList = appList.system
            this.userAppList = appList.user
          },
          //
          error => {

          })
    }
  }
}
</script>
<style>
</style>
