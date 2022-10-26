<template>
  <div class="es-sdk-root-css">
    <es-voice-wave-view
      ref="es_voice_wave_view"
      class="es-voice-wave-view-css"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="显示" @onButtonClicked="onShowButtonClicked"/>
        <text-button text="隐藏" @onButtonClicked="onHiddenButtonClicked"/>
        <text-button text="文字" @onButtonClicked="onTextButtonClicked"/>
        <text-button text="音量100" @onButtonClicked="onVolume100ButtonClicked"/>
        <text-button text="音量10" @onButtonClicked="onVolume10ButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="INIT" @onButtonClicked="onInitButtonClicked"/>
        <text-button text="WAVE" @onButtonClicked="onWaveButtonClicked"/>
        <text-button text="FOCUS" @onButtonClicked="onFocusButtonClicked"/>
        <text-button text="LOADING" @onButtonClicked="onLoadingButtonClicked"/>
        <text-button text="END" @onButtonClicked="onEndButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {
  ES_VOICE_WAVE_VIEW_STATUS_INIT,
  ES_VOICE_WAVE_VIEW_STATUS_WAVE,
  ES_VOICE_WAVE_VIEW_STATUS_FOCUS,
  ES_VOICE_WAVE_VIEW_STATUS_LOADING,
  ES_VOICE_WAVE_VIEW_STATUS_END, ESVoiceWaveView,
} from "@extscreen/es-voice-wave-view";

export default {
  name: '语音波纹组件',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    onShowButtonClicked() {
      this.$refs.es_voice_wave_view.show(true);
    },
    onHiddenButtonClicked() {
      this.$refs.es_voice_wave_view.hide();
    },
    onTextButtonClicked() {
      this.$refs.es_voice_wave_view.showText('文字~~文字');
    },
    onInitButtonClicked() {
      this.$refs.es_voice_wave_view.setStatus(ES_VOICE_WAVE_VIEW_STATUS_INIT);
    },
    onWaveButtonClicked() {
      this.$refs.es_voice_wave_view.setStatus(ES_VOICE_WAVE_VIEW_STATUS_WAVE);
    },
    onFocusButtonClicked() {
      this.$refs.es_voice_wave_view.setStatus(ES_VOICE_WAVE_VIEW_STATUS_FOCUS);
    },
    onLoadingButtonClicked() {
      this.$refs.es_voice_wave_view.setStatus(ES_VOICE_WAVE_VIEW_STATUS_END);
    },
    onEndButtonClicked() {
      this.$refs.es_voice_wave_view.setStatus(ES_VOICE_WAVE_VIEW_STATUS_LOADING);
    },
    onVolume100ButtonClicked() {
      this.$refs.es_voice_wave_view.volume(100);
    },
    onVolume10ButtonClicked() {
      this.$refs.es_voice_wave_view.volume(10);
    },
  },
  components: {
    'es-voice-wave-view': ESVoiceWaveView
  }
};
</script>

<style>
.es-voice-wave-view-css {
  width: 1920px;
  height: 244px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
