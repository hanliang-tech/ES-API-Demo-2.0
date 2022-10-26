<template>
  <div class="es-sdk-root-css">
    <es-voice-assistant
      ref="voice_assistant"
      class="es-voice-assistant-class"
      app-id="spark"
      channel="huan"
      :language="1"
      :voice-assistant-view-list="voiceAssistantView"
      @onAudioRecordPermissionGranted="onAudioRecordPermissionGranted"
      @onAudioRecordPermissionDenied="onAudioRecordPermissionDenied"
      @onAudioRecordNotInit="onAudioRecordNotInit"
      @onAudioRecordReady="onAudioRecordReady"
      @onAudioRecordStart="onAudioRecordStart"
      @onAudioRecordStop="onAudioRecordStop"
      @onAudioRecordCancel="onAudioRecordCancel"
      @onAudioRecordError="onAudioRecordError"
      @onAudioRecordSuccess="onAudioRecordSuccess"
      @onAudioASRStart="onAudioASRStart"
      @onAudioASRError="onAudioASRError"
      @onAudioASRSuccess="onAudioASRSuccess"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="按下遥控器语音键"></text>
      <text :text="'状态：' + voiceAssistantStatus"></text>
    </div>
  </div>
</template>

<script>
import {ESPage, KEYCODE_SEARCH} from "@extscreen/es-core";
import {ESVoiceAssistant} from "@extscreen/es-voice-assistant";
import VoiceAssistantViewOne from './es-voice-assistant-view-one'
import VoiceAssistantViewTwo from './es-voice-assistant-view-two'

const TAG = "VOICE_ASSISTANT";
export default {
  name: '语音助手',
  mixins: [ESPage],
  data() {
    return {
      voiceAssistantView: [VoiceAssistantViewOne, VoiceAssistantViewTwo],
      voiceAssistantStatus: '-',
    };
  },
  methods: {
    onAudioRecordPermissionGranted() {
      this.voiceAssistantStatus = 'onAudioRecordPermissionGranted';
    },
    onAudioRecordPermissionDenied() {
      this.voiceAssistantStatus = 'onAudioRecordPermissionDenied';
    },
    //----------------------------------------录音回调----------------------------------------------------
    onAudioRecordNotInit(status) {
      this.voiceAssistantStatus = 'onAudioRecordNotInit' + JSON.stringify(status);
    },
    onAudioRecordReady(status) {
      this.voiceAssistantStatus = 'onAudioRecordReady' + JSON.stringify(status);
    },
    onAudioRecordStart(status) {
      this.voiceAssistantStatus = 'onAudioRecordStart' + JSON.stringify(status);
    },
    onAudioRecordStop(status) {
      this.voiceAssistantStatus = 'onAudioRecordStop' + JSON.stringify(status);
    },
    onAudioRecordCancel(status) {
      this.voiceAssistantStatus = 'onAudioRecordCancel' + JSON.stringify(status);
    },
    onAudioRecordError(status) {
      this.voiceAssistantStatus = 'onAudioRecordError' + JSON.stringify(status);
    },
    onAudioRecordSuccess(status) {
      this.voiceAssistantStatus = 'onAudioRecordSuccess' + JSON.stringify(status);
    },
    onAudioASRStart() {
      this.voiceAssistantStatus = 'onAudioASRStart';
    },
    onAudioASRError() {
      this.voiceAssistantStatus = 'onAudioASRError';
    },
    onAudioASRSuccess(asr) {
      this.voiceAssistantStatus = 'onAudioASRSuccess' + JSON.stringify(asr);
    },
    onKeyDown(keyEvent) {
      if (keyEvent.keyRepeat >= 1) {
        return;
      }
      if (keyEvent.keyCode === KEYCODE_SEARCH || keyEvent.keyCode === 73) {
        this.$refs.voice_assistant.startAudioRecord();
      }
    },
    onKeyUp(keyEvent) {
      if (keyEvent.keyRepeat >= 1) {
        return;
      }
      if (keyEvent.keyCode === KEYCODE_SEARCH || keyEvent.keyCode === 73) {
        this.$refs.voice_assistant.stopAudioRecord();
      }
    },
  },
  components: {
    'es-voice-assistant': ESVoiceAssistant,
  }
};
</script>

<style scoped>
.es-voice-assistant-class {
  width: 1920px;
  height: 1080px;
  position: absolute;
}
</style>
