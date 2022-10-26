import es_launch_ad_player_page from './es-launch-ad-player-page';
import es_launch_ad_player_manager_page from './es-launch-ad-player-manager-page';
import es_front_ad_player_page from './es-front-ad-player-page';
import es_front_ad_player_manager_page from './es-front-ad-player-manager-page';
import es_paused_ad_player_page from './es-paused-ad-player-page';

const ESADPlayerList = {
  es_launch_ad_player_page: {
    name: '开屏广告播放器',
    component: es_launch_ad_player_page,
  },
  es_launch_ad_player_manager_page: {
    name: '开屏广告播放管理器',
    component: es_launch_ad_player_manager_page,
  },
  es_front_ad_player_page: {
    name: '前贴广告播放器',
    component: es_front_ad_player_page,
  },
  es_front_ad_player_manager_page: {
    name: '前贴广告播放管理器',
    component: es_front_ad_player_manager_page,
  },
  es_paused_ad_player_page: {
    name: '暂停广告播放器',
    component: es_paused_ad_player_page,
  },
};
export default ESADPlayerList;
