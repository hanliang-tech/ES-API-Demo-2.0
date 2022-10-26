const es_hello_page = () => import("./es-hello-page");
const es_first_page = () => import("./es-first-page");
const es_second_page = () => import("./es-second-page");

const ESRouterList = {
  es_hello_page: {
    name: "Hello ES",
    component: es_hello_page,
  },
  es_first_page: {
    name: "第一个页面",
    component: es_first_page,
  },
  es_second_page: {
    name: "第二个页面",
    component: es_second_page,
  },
};
export default ESRouterList;
