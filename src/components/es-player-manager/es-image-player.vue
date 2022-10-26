<template>
  <div class="es-image-player-root-css"
       :style="{width : playerWidth, height : playerHeight}">
    <img ref="es_image_player"
         class="es-image-player-css"
         :src="imageUrl"
         v-if="playerInitialized">
  </div>
</template>

<script>
import {ESLazyInitPlayer, ESPlayer} from "@extscreen/es-player";

export default {
  mixins: [ESLazyInitPlayer, ESPlayer],
  name: 'ESImagePlayer',
  data() {
    return {
      imageUrl: '',
    }
  },
  methods: {
    //返回播放器引用
    getPlayer() {
      return this.$refs.es_image_player;
    },
    //自定义播放器类型为11
    getPlayerType() {
      return 11;
    },
    play(url, startPosition) {
      this.imageUrl = url.url;
    },
    stop() {
      this.imageUrl = "";
    },
  }
}
</script>

<style scoped>
.es-image-player-root-css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
}

.es-image-player-css {
  width: 800px;
  height: 200px;
}
</style>
