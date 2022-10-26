<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text-button text="切换图片" @onButtonClicked="transitionImage"/>
      <text-button text="切换颜色" @onButtonClicked="transitionColor"/>
      <img-transition ref="bg" style="width:1920px; height:1080px;" :transitionTime='500'/>
    </div>
  </div>
</template>
<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'ImageTransition',
  mixins: [ESPage],
  data() {
    return {
      images: [
        'http://fitimg.fangtangtv.com/tab/tab1block1-1bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-2bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-3bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-4bg1.jpg',
      ],
      colors: [
        '#AC78F5',
        -1,
        '#5AF285',
        -16711681,
        '#F5C94D',
        -12303292,
        '#1A99D9',
        -65281,
        '#DB5B3F',
      ]
    }
  },
  methods: {
    transitionColor() {
      this.$refs.bg.setNextColor(this.colors[++index % this.colors.length]);
    },
    transitionImage() {
      this.$refs.bg.setNextImage(this.images[++index % this.images.length]);
    }
  }
}
</script>

<style>
</style>
