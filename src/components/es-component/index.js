import es_gradient_background from "./gradient/es-gradient-background-page";

const es_gif_view = () => import("./gif/es-gif-view");
const es_chart_view_component = () => import("./chart/es-chart-view-component");
const es_loading_page = () => import("./loading/es-loading-page");
const es_progressbar_page = () => import("./progressbar/es-progressbar-page");
const es_seekbar_index_page = () => import("./seekbar/es-seekbar-index-page");
const es_textview_page = () => import("./textview/es-textview-page");
const es_qrcode_page = () => import("./qrcode/es-qrcode-page");
const es_transition_image_page = () => import("./image/es-transition-image-page");
const es_tv_list = () => import("./list/test_list_view");
const es_tabs_page = () => import("./tabs/es-tabs-page")

const ESComponentPageList = {
  es_textview_page: {
    name: "TextView",
    component: es_textview_page,
  },
  es_loading_page: {
    name: "Loading",
    component: es_loading_page,
  },
  es_progressbar_page: {
    name: "ProgressBar",
    component: es_progressbar_page,
  },
  es_seekbar_index_page: {
    name: "SeekBar",
    component: es_seekbar_index_page,
  },
  es_gif_view: {
    name: "GIF",
    component: es_gif_view,
  },
  es_chart_view_component: {
    name: "图表",
    component: es_chart_view_component,
  },
  es_qrcode_page: {
    name: "二维码",
    component: es_qrcode_page,
  },
  // listView: {
  //   name: 'ListView扩展',
  //   component: listView,
  // },
  es_tv_list: {
    name: 'TVList',
    component: es_tv_list
  },
  es_gradient_background: {
    name: 'GradientBackground',
    component: es_gradient_background,
  },
  es_transition_image_page: {
    name: '渐变动画背景',
    component: es_transition_image_page,
  },
  es_tabs_page: {
    name: 'Tabs',
    component: es_tabs_page,
  },
};
export default ESComponentPageList;
