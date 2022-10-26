const es_player_manager_sample = () => import("./es_player_manager_sample");
const es_player_url_provider_sample = () => import("./es_player_url_provider_sample");
const es_player_position_sample = () => import("./es_player_position_sample");
const es_player_event_sample = () => import("./es_player_event_sample");
const es_player_view_sample = () => import("./es_player_view_sample");
const es_player_sample = () => import("./es_player_sample");
const es_player_interceptor_sample = () => import("./es_player_interceptor_sample");
const es_player_front_ad_sample = () => import("./es_player_front_ad_sample");
const es_player_paused_ad_sample = () => import("./es_player_paused_ad_sample");
const es_ad_front_player_view_sample = () => import("./es_ad_front_player_view_sample");
const es_ad_paused_player_view_sample = () => import("./es_ad_paused_player_view_sample");
const es_player_behind_ad_sample = () => import('./es_player_behind_ad_sample')
const es_player_watermark_sample = () => import('./es_player_watermark_sample')
const es_player_alert_sample = () => import('./es_player_alert_sample')


const ESPlayerManagerPageList = {
  es_player_manager_sample: {
    name: '使用初探',
    component: es_player_manager_sample,
  },
  es_player_url_provider_sample: {
    name: '自定义地址提供者',
    component: es_player_url_provider_sample,
  },
  es_player_position_sample: {
    name: '设置起播/结束位置',
    component: es_player_position_sample,
  },
  es_player_event_sample: {
    name: '播放事件监听',
    component: es_player_event_sample,
  },
  es_player_view_sample: {
    name: '自定义播放界面',
    component: es_player_view_sample,
  },
  es_player_sample: {
    name: '自定义播放器',
    component: es_player_sample,
  },
  es_player_interceptor_sample: {
    name: '自定义分集播放前置拦截器',
    component: es_player_interceptor_sample,
  },
  es_player_front_ad_sample: {
    name: '视频前贴广告',
    component: es_player_front_ad_sample,
  },
  es_player_paused_ad_sample: {
    name: '自定义暂停广告界面',
    component: es_player_paused_ad_sample,
  },
  es_ad_front_player_view_sample: {
    name: '自定义前贴广告界面',
    component: es_ad_front_player_view_sample,
  },
  es_ad_paused_player_view_sample: {
    name: '视频暂停广告',
    component: es_ad_paused_player_view_sample,
  },
  es_player_behind_ad_sample: {
    name: '视频后贴广告',
    component: es_player_behind_ad_sample,
  },
  es_player_watermark_sample: {
    name: '视频遮标示例',
    component: es_player_watermark_sample,
  },
  es_player_alert_sample: {
    name: '视频浮层示例',
    component: es_player_alert_sample,
  },
};
export default ESPlayerManagerPageList;
