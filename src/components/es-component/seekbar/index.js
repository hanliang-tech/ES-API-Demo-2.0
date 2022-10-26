const es_progressbar_page = () => import('./es-seekbar-page')
const es_seekbar_player_page = () => import('./es-seekbar-player-page')

const ESSeekBarPageList = {
  es_progressbar_page: {
    name: "使用初探",
    component: es_progressbar_page,
  },
  es_seekbar_player_page: {
    name: "SeekBar && 播放",
    component: es_seekbar_player_page,
  },
};
export default ESSeekBarPageList;
