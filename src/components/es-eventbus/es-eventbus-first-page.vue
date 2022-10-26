<template>
  <div class="es-first-page">
    <span class="es-first-page-title-text">ESEvent第一个页面</span>
    <div class="es-first-page-button"
         :focusable="true"
         :enableFocusBorder="true"
         :focusScale="1.1"
         @click="onLaunchButtonClicked">
      <span class="es-first-page-text">打开第二个页面</span>
    </div>
  </div>
</template>

<script>

import {ESLaunchManager, ESPage, ESToast} from "@extscreen/es-core";
import {ESEventBus} from "@extscreen/es-eventbus";

const TAG = "ESEventBus"
export default {
  name: "第一个页面",
  mixins: [ESPage],
  methods: {
    onESCreate(params) {
      ESEventBus.$on('helloEvent', this.onReceivedHelloEvent);
    },
    onESDestroy() {
      ESEventBus.$off('helloEvent', this.onReceivedHelloEvent);
    },
    onReceivedHelloEvent(event) {
      ESToast.showToast(JSON.stringify(event));
    },
    onLaunchButtonClicked() {
      ESLaunchManager.launchESPage({
        url: 'eventbus/es_eventbus_second_page'
      })
    }
  },
}
</script>

<style scoped>
.es-first-page {
  width: 1920px;
  height: 1080px;
  background-color: grey;
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
