<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" text="ES API DEMO"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(nav, index) in navList" :key="nav.id"
        :text="nav.name"
        :url="`nav/${nav.id}`"/>
    </div>
  </div>
</template>

<script>

import {getApp} from "@/util";
import ESAPINavPageList from "@/views/nav";
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'menu',
  mixins: [ESPage],
  data() {
    return {
      navList: Object.keys(ESAPINavPageList).map(nav => ({
        id: nav,
        name: ESAPINavPageList[nav].name,
      })),
    };
  },
  mounted() {
    this.app = getApp();
  },
  methods: {}
};
</script>

<style>
</style>
