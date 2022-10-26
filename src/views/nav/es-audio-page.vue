<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, index) in soundPoolList" :key="item.id"
          :text="item.name"
          :url="`audio/${item.id}`"/>
      </div>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, index) in audioPlayerList" :key="item.id"
          :text="item.name"
          :url="`audio/${item.id}`"/>
      </div>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, index) in androidAudioPlayerList" :key="item.id"
          :text="item.name"
          :url="`audio/${item.id}`"/>
      </div>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, index) in asyncPlayerList" :key="item.id"
          :text="item.name"
          :url="`audio/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESAndroidAudioPlayerPageList from "@/components/es-audio-player/android";
import ESAudioPlayerPageList from "@/components/es-audio-player/audio";
import ESAsyncAudioPlayerPageList from "@/components/es-audio-player/async";
import ESSoundPoolPageList from "@/components/es-audio-player/soundpool";

export default {
  name: "音频",
  mixins: [ESPage],
  data() {
    return {
      androidAudioPlayerList: Object.keys(ESAndroidAudioPlayerPageList).map(data => ({
        id: data,
        name: ESAndroidAudioPlayerPageList[data].name,
      })),
      asyncPlayerList: Object.keys(ESAsyncAudioPlayerPageList).map(data => ({
        id: data,
        name: ESAsyncAudioPlayerPageList[data].name,
      })),
      audioPlayerList: Object.keys(ESAudioPlayerPageList).map(data => ({
        id: data,
        name: ESAudioPlayerPageList[data].name,
      })),
      soundPoolList: Object.keys(ESSoundPoolPageList).map(data => ({
        id: data,
        name: ESSoundPoolPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
