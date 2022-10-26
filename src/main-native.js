import Vue from 'vue';
import HippyVueNativeComponents from '@huantv/vue-native-components';
import App from './app.vue';
import routes from './routes';
import ESRouter from "@extscreen/es-router";
// import ESRouter from '../packages/ESRouter/dist/index';
import {setApp} from './util';

import {ESADPlayerViewComponent} from "@extscreen/es-ad-player-view-component";
import {ESVideoPlayerViewComponent} from "@extscreen/es-video-player-view-component";
import {ESSohuPlayerViewComponent} from "@extscreen/es-sohu-player-view-component";
import {ESTVBCPlayerViewComponent} from "@extscreen/es-tvbc-player-view-component";
import {ESM1905PlayerViewComponent} from "@extscreen/es-m1905-player-view-component";

import {ESGifViewComponent} from "@extscreen/es-gif-view-component";
import {ESX5WebViewComponent} from "@extscreen/es-x5web-view-component";
import {ESWebViewComponent} from "@extscreen/es-web-view-component";

import {ESPlayMarkViewComponent} from '@extscreen/es-play-mark-view-component';

import {
  ESBarChartViewComponent,
  ESLineChartViewComponent
} from "@extscreen/es-chart-view-component";

/**zhaopeng test waterfall start**/
import {
  ESWaterfallKit
} from "./regist/ESWaterfallKit";

Vue.use(ESWaterfallKit)
/**zhaopeng test waterfall end**/

import {
  ESProgressBarViewComponent,
  ESSeekBarViewComponent,
  ESAnimationViewComponent,
  ESLoadingViewComponent,
  ESTransitionImageViewComponent,
  ESQRCodeViewComponent,
  ESPageRootViewComponent,
  ESPageRouterViewComponent,
  ESTextViewComponent,
} from "@extscreen/es-core";


//
// 禁止终端调试信息输出，取消注释即可使用。
// Vue.config.silent = true;

Vue.use(install);

Vue.config.productionTip = false;

// Hippy 终端组件扩展中间件，可以使用 modal、view-pager、tab-host、ul-refresh 等原生组件了。
Vue.use(HippyVueNativeComponents);
Vue.use(ESRouter);

//图表
Vue.use(ESBarChartViewComponent)
Vue.use(ESLineChartViewComponent)

Vue.use(ESLoadingViewComponent)

Vue.use(ESX5WebViewComponent)
Vue.use(ESWebViewComponent)

Vue.use(ESGifViewComponent)
Vue.use(ESAnimationViewComponent)
Vue.use(ESAnimationView.install)

//播放器
Vue.use(ESADPlayerViewComponent)
Vue.use(ESVideoPlayerViewComponent)
Vue.use(ESSohuPlayerViewComponent)
Vue.use(ESTVBCPlayerViewComponent)
Vue.use(ESM1905PlayerViewComponent)

Vue.use(ESTextViewComponent)
Vue.use(ESProgressBarViewComponent)
Vue.use(ESSeekBarViewComponent)
Vue.use(ESTransitionImageViewComponent)
Vue.use(ESQRCodeViewComponent)

//
Vue.use(ESPageRootViewComponent)
Vue.use(ESPageRouterViewComponent)

Vue.use(ESPlayMarkViewComponent)

Vue.use(ESCanvasComponent)

import {ESVoiceWaveViewComponent} from "@extscreen/es-voice-wave-view";

Vue.use(ESVoiceWaveViewComponent)

import {ESCroppedImageViewComponent} from "@extscreen/es-cropped-image-view-component";

Vue.use(ESCroppedImageViewComponent)

const router = new ESRouter(routes);

import "./views/css/es-sdk-css.css";
//-------------------------------------------------------
import "@extscreen/es-sample/dist/index.css";

import "@extscreen/es-video-player/dist/index.css";
import "@extscreen/es-ad-player/dist/index.css";
import "@extscreen/es-sohu-player/dist/index.css";
import "@extscreen/es-tvbc-player/dist/index.css";
import "@extscreen/es-m1905-player/dist/index.css";

import "@extscreen/es-player-watermark/dist/index.css";
import "@extscreen/es-player-alert/dist/index.css";

import "@extscreen/es-ad-player-view/dist/index.css";
import "@extscreen/es-ad-front-player-manager/dist/index.css";
import "@extscreen/es-ad-paused-player-manager/dist/index.css";
import "@extscreen/es-ad-behind-player-manager/dist/index.css";
import "@extscreen/es-player-manager/dist/index.css";

import {setESApp} from "@extscreen/es-core";

import "@extscreen/es-puzzle-view/dist/index.css";

//-------------------------------------------------------

import ESRecyclerViewComponent from './components/ESRecyclerViewComponent/ESRecyclerViewComponent';
import {install} from "@/components";
import {ESAnimationView} from "@extscreen/es-animation-view";
import { ESCanvasComponent } from '@extscreen/es-canvas-component';


Vue.use(ESRecyclerViewComponent);

/* import {
  ESWaterfallKit
} from "./components/ESWaterfallKit"
Vue.use(ESWaterfallKit); */
/**
 * 声明一个 app，这是同步生成的
 */
const app = new Vue({
  // 终端指定的 App 名称
  appName: 'EsApp',
  // 根节点，必须是 Id，当根节点挂载时才会触发上屏
  rootView: '#root',
  // 渲染自己
  render: h => h(App),
  // iPhone 下的状态栏配置
  iPhone: {
    // 状态栏配置
    statusBar: {
      // 禁用状态栏自动填充
      // disabled: true,

      // 状态栏背景色，如果不配的话，会用 4282431619，也就是 #40b883 - Vue 的绿色
      // 因为运行时只支持样式和属性的实际转换，所以需要用下面的转换器将颜色值提前转换，可以在 Node 中直接运行。
      // hippy-vue-css-loader/src/compiler/style/color-parser.js
      backgroundColor: 4283416717,

      // 状态栏背景图，要注意这个会根据容器尺寸拉伸。
      // backgroundImage: 'https://mat1.gtimg.com/www/qq2018/imgs/qq_logo_2018x2.png',
    },
  },
  // 路由
  router,
});

/**
 * $start 是 Hippy 启动完以后触发的回调
 * Vue 会在 Hippy 启动之前完成首屏 VDOM 的渲染，所以首屏性能非常高
 * 在 $start 里可以通知终端说已经启动完成，可以开始给前端发消息了。
 */
app.$start((/* app */) => {
  // 这里干一点 Hippy 启动后的需要干的事情，比如通知终端前端已经准备完毕，可以开始发消息了。
  // setApp(app);
});

/**
 * 保存 app 供后面通过 app 接受来自终端的事件。
 *
 * 之前是放到 $start 里的，但是有个问题时因为 $start 执行太慢，如果首页就 getApp() 的话可能会
 * 导致获得了 undefined，然后监听失败。所以挪出来了。
 *
 * 但是终端事件依然要等到 $start 也就是 Hippy 启动之后再发，因为之前桥尚未建立，终端发消息前端也
 * 接受不到。
 */
//ESCore
setESApp(app);
//
setApp(app);
