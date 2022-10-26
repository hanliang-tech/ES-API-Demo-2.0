<template>
  <div class="es-first-page">
    <span class="es-first-page-title-text">第一个页面</span>
    <div class="es-first-page-button"
         :focusable="true"
         :enableFocusBorder="true"
         :focusScale="1.1"
         @click="onLaunchESPage">
      <span class="es-first-page-text">启动同一个ES运行环境中的第二个页面</span>
    </div>
    <div class="es-first-page-button"
         :focusable="true"
         :enableFocusBorder="true"
         :focusScale="1.1"
         @click="onLaunchNativePage">
      <span class="es-first-page-text">启动新创建的ES运行环境中的第二个页面</span>
    </div>
  </div>
</template>

<script>

import {ESLaunchManager, ESPage} from "@extscreen/es-core";

export default {
  name: "es-first-page",
  mixins: [ESPage],
  methods: {
    onLaunchESPage(e) {
      ESLaunchManager.launchESPage({
        url: 'router/es_second_page',
        params: {
          from: '来自第一个页面',
          message: '来自第一个页面的消息',
          xxx: '自定义参数',
        }
      })
    },
    onLaunchNativePage() {
      ESLaunchManager.launchNativePage({
        url: 'router/es_second_page',
        params: {
          from: '来自第一个页面',
          message: '来自第一个页面的消息',
          xxx: '自定义参数',
        }
      })
    },
    onBackPressed() {
      ESLaunchManager.finishESPage();
    }
  },
}
</script>

<style scoped>
.es-first-page {
  width: 1920px;
  height: 1080px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.es-first-page-button {
  width: 550px;
  height: 80px;
  background-color: #42b983;
  margin: 20px;
  border-radius: 8px;
}

.es-first-page-text {
  width: 550px;
  height: 80px;
  font-size: 20px;
  text-align: center;
  color: white;
}

.es-first-page-title-text {
  width: 550px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  color: #42b983;
  margin-bottom: 100px;
}
</style>
