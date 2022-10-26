<template>
  <div class="es-voice-assistant-view-root-css">
    <text :text="status"/>
  </div>
</template>

<script>
import {ESVoiceAssistantView} from "@extscreen/es-voice-assistant";

const TAG = "VOICE_ASSISTANT";
export default {
  name: 'VoiceAssistantViewTwo',
  mixins: [ESVoiceAssistantView],
  data() {
    return {
      status: ''
    };
  },
  mounted() {

  },
  methods: {
    onAudioRecordPermissionGranted() {
      this.status = 'onAudioRecordPermissionGranted'
    },
    onAudioRecordPermissionDenied() {
      this.status = 'onAudioRecordPermissionDenied'
    },
    onAudioRecordNotInit(status) {
      this.status = 'onAudioRecordNotInit' + JSON.stringify(status)
    },
    onAudioRecordReady(status) {
      this.status = 'onAudioRecordReady' + JSON.stringify(status)
    },
    onAudioRecordStart(status) {
      this.status = 'onAudioRecordStart' + JSON.stringify(status)
    },
    onAudioRecordStop(status) {
      this.status = 'onAudioRecordStop' + JSON.stringify(status)
    },
    onAudioRecordCancel(status) {
      this.status = 'onAudioRecordCancel' + JSON.stringify(status)
    },
    onAudioRecordError(status) {
      this.status = 'onAudioRecordError' + JSON.stringify(status)
    },
    onAudioRecordSuccess(status) {
      this.status = 'onAudioRecordSuccess' + JSON.stringify(status)
    },
    onAudioASRStart() {
      this.status = 'onAudioASRStart'
    },
    onAudioASRError() {
      this.status = 'onAudioASRError'
    },
    onAudioASRSuccess(newResult) {
      this.status = 'onAudioASRSuccess' + JSON.stringify(newResult)
    },
    onAudioNLPStart() {
      this.status = 'onAudioNLPStart'
    },
    onAudioNLPError() {
      this.status = 'onAudioNLPError'
    },
    onAudioNLPSuccess(newResult) {
      this.status = 'onAudioNLPSuccess' + JSON.stringify(newResult)
    },
  },
};
</script>

<style scoped>
.es-voice-assistant-view-root-css {
  width: 400px;
  height: 1080px;
  background-color: red;
  position: absolute;
  right: 0;
}
</style>
