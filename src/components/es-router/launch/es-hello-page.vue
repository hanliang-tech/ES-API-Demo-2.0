<template>
  <div class="hello-es-page">
    <span class="hello-es-page-span">第一个ES页面</span>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage} from "@extscreen/es-core";

export default {
  name: 'es-hello-page',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onESCreate(params) {

    },
    onESRestart() {

    },
    onESStart() {

    },
    onESResume() {

    },
    onESPause() {

    },
    onESStop() {

    },
    onESDestroy() {

    },
    onESNewIntent(intent) {

    },
    onKeyDown(keyEvent) {

    },
    onKeyUp(keyEvent) {

    },
    onBackPressed() {
      ESLaunchManager.finishESPage();
    },
  },
};
</script>

<style scoped>

.hello-es-page {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
}

.hello-es-page-span {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
}
</style>
