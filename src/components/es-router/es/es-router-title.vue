<template>
  <div class="es-sdk-content-column-css">
    <div class="es-sdk-content-row-css">
      <text-button text="back" :requestFocus="true" @onButtonClicked="finishESPage()"/>
      <nav-button text="第六个页面Activity" :url="'router/router_six'"/>
      <text-button text="第七个页面异步组件" @onButtonClicked="launchESPage(6)"/>
      <text-button text="第五个页面并关闭当前页面" @onButtonClicked="launchAfterFinishESPage"/>
    </div>
    <div class="es-sdk-content-row-css">
      <text-button text="第零个页面" @onButtonClicked="launchESPage(0)"/>
      <text-button text="第一个页面" @onButtonClicked="launchESPage(1)"/>
      <text-button text="第二个页面" @onButtonClicked="launchESPage(2)"/>
      <text-button text="第三个页面" @onButtonClicked="launchESPage(3)"/>
      <text-button text="第四个页面" @onButtonClicked="launchESPage(4)"/>
      <text-button text="第五个页面" @onButtonClicked="launchESPage(5)"/>
    </div>
  </div>
</template>

<script>

import {ESLaunchManager} from "@extscreen/es-core";

const TAG = "STACK";
export default {
  props: {
    stack: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    finishESPage() {
      ESLaunchManager.finishESPage();
    },
    launchAfterFinishESPage() {
      ESLaunchManager.launchAfterFinishESPage({
        url: 'router/router_five',
        params: {
          from: 'router_first'
        },
      });
    },
    launchESPage(index) {
      switch (index) {
        case 0:
          ESLaunchManager.launchESPage({
            url: 'router/router_zero',
            params: {
              from: 'router_first'
            },
          });
          break;
        case 1:
          ESLaunchManager.launchESPage({
            url: 'router/router_first',
            params: {
              from: 'router_first'
            },
          });
          break;
        case 2:
          ESLaunchManager.launchESPage({
            url: 'router/router_second',
            params: {
              from: 'router_first'
            }
          });
          break;
        case 3:
          ESLaunchManager.launchESPage({
            url: 'router/router_third',
            params: {
              from: 'router_first'
            },
          });
          break;
        case 4:
          ESLaunchManager.launchESPage({
            url: 'router/router_four',
            params: {
              from: 'router_first'
            },
          });
          break
        case 5:
          ESLaunchManager.launchESPage({
            url: 'router/router_five',
            params: {
              from: 'router_first'
            },
          });
          break
        case 6:
          ESLaunchManager.launchESPage({
            url: 'router/router_seven',
            params: {
              from: 'router_first'
            },
          });
          break
      }
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
