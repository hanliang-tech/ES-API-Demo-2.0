const router_zero = () => import("./es-router-zero");
const router_first = () => import("./es-router-first");
const router_second = () => import("./es-router-second");
const router_third = () => import("./es-router-third");
const router_four = () => import("./es-router-four");
const router_five = () => import("./es-router-five");
const router_six = () => import("./es-router-six");
const router_seven = () => import('./es-router-seven')

const ESRouterESList = {
  router_zero: {
    name: "第零个页面",
    component: router_zero,
    launchMode: 'standard'
  },
  router_first: {
    name: "第一个页面",
    component: router_first,
    launchMode: 'standard'
  },
  router_second: {
    name: "第二个页面",
    component: router_second,
    launchMode: 'standard'
  },
  router_third: {
    name: "第三个页面",
    component: router_third,
    launchMode: 'clearTask'
  },
  router_four: {
    name: "第四个页面",
    component: router_four,
    launchMode: 'singleTask'
  },
  router_five: {
    name: "第五个页面",
    component: router_five,
    launchMode: 'standard'
  },
  router_six: {
    name: "第六个页面",
    component: router_six,
    launchMode: 'standard'
  },
  router_seven: {
    name: "第七个页面",
    component: router_seven,
    launchMode: 'standard'
  },
};
export default ESRouterESList;
