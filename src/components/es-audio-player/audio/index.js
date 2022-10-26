import es_audio_player_page from './es-audio-player-page';
import es_audio_player_module_page from './es-audio-player-module-page';
import es_audio_player_service_page from './es-audio-player-service-page';


const ESAudioPlayerPageList = {
  es_audio_player_page: {
    name: es_audio_player_page.name,
    component: es_audio_player_page,
  },
  es_audio_player_service_page: {
    name: es_audio_player_service_page.name,
    component: es_audio_player_service_page,
  },
  es_audio_player_module_page: {
    name: es_audio_player_module_page.name,
    component: es_audio_player_module_page,
  },
};

export default ESAudioPlayerPageList;
