<template>
  <div class="es-second-page">
    <span class="es-second-page-title-text">ESEvent第二个页面</span>
    <div class="es-second-page-button"
         :focusable="true"
         :enableFocusBorder="true"
         :focusScale="1.1"
         @click="onClick">
      <span class="es-second-page-text">发送事件</span>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {ESEventBus} from "@extscreen/es-eventbus";

const TAG = "ESEventBus"
export default {
  name: "第二个页面",
  mixins: [ESPage],
  methods: {
    onClick(e) {
      ESEventBus.$emit('helloEvent', {
        msg: 'hello eventbus!',
      })
    },
  },
}
</script>

<style scoped>
.es-second-page {
  width: 1920px;
  height: 1080px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.es-second-page-button {
  width: 550px;
  height: 80px;
  background-color: #42b983;
  margin: 20px;
  border-radius: 8px;
}

.es-second-page-text {
  width: 550px;
  height: 80px;
  font-size: 20px;
  text-align: center;
  color: white;
  margin-bottom: 100px;
}

.es-second-page-title-text {
  width: 550px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  color: #42b983;
  margin-bottom: 100px;
}
</style>
