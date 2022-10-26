const es_web_view = () => import("./es_web_view");
const es_x5web_view = () => import("./es_x5web_view");

const ESWebViewPageList = {
  es_web_view: {
    name: 'WebView',
    component: es_web_view,
  },
  es_x5web_view: {
    name: 'X5WebView',
    component: es_x5web_view,
  },
};
export default ESWebViewPageList;
