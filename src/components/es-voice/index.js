const es_voice_assistant_page = () => import("./assistant/es-voice-assistant-page");
const es_audio_record_page = () => import("./record/es-audio-record-page");
const es_voice_wave_view_page = () => import("./wave/es-voice-wave-view-page");

const ESVoiceList = {
  es_audio_record_page: {
    name: '录音',
    component: es_audio_record_page,
  },
  es_voice_assistant_page: {
    name: '语音助手',
    component: es_voice_assistant_page,
  },
  es_voice_wave_view_page: {
    name: '语音波纹组件',
    component: es_voice_wave_view_page,
  },
};
export default ESVoiceList;
