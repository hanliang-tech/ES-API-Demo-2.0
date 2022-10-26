<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="Post" @onButtonClicked="onButtonClicked('POST')"/>
        <text-button text="Get" @onButtonClicked="onButtonClicked('GET')"/>
      </div>
      <text :text="data"></text>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'fetch',
  mixins: [ESPage],
  data() {
    return {
      data: ''
    };
  },
  methods: {
    onButtonClicked(method) {
      fetch('http://extscreen.com', {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(response => {
        this.data = response;
      }).catch(err => {
        this.data = err;
      })
    }
  }
};
</script>

<style>
</style>
