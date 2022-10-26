import ESCorePageList from './components/es-base';
import ESAPINavPageList from "@/views/nav";
import ESVideoPlayerPageList from "@/components/es-video-player";
import ESModulePageList from "@/components/es-module";
import ESEventBusPageList from "@/components/es-eventbus";
import ESRouterESList from "@/components/es-router/es";
import ESCanvasList from "@/components/es-canvas";
import ESStartList from "@/components/es-start";
import ESVoiceList from "@/components/es-voice";
import ESPlayerManagerPageList from "@/components/es-player-manager";
import ESAnimationPageList from "@/components/es-animation";
import ESWebViewPageList from "@/components/es-webview";
import ESComponentPageList from "@/components/es-component";
import ESKeyPageList from "@/components/es-key";
import ESFocusPageList from "@/components/es-focus";
import ESLogPageList from "@/components/es-log";
import ESLifecyclePageList from "@/components/es-lifecycle";
import ESADPlayerList from "@/components/es-ad-player";
import ESAdvancedPageList from "@/components/es-advanced";
import ESSeekBarPageList from "@/components/es-component/seekbar";
import ESRemoteList from "@/components/es-remote";
import ESAudioPlayerPageList from "@/components/es-audio-player/audio";
import ESSoundPoolPageList from "@/components/es-audio-player/soundpool";
import ESAsyncAudioPlayerPageList from "@/components/es-audio-player/async";
import ESAndroidAudioPlayerPageList from "@/components/es-audio-player/android";
import ESFlexDirectionPageList from "@/components/es-flex/direction";
import ESFlexWrapPageList from "@/components/es-flex/wrap";
import ESFlexJustifyContentPageList from "@/components/es-flex/justify-content";
import ESFlexAlignItemsPageList from "@/components/es-flex/align-items";
import ESFlexAlignContentPageList from "@/components/es-flex/align-content";
import ESRouterNativeList from "@/components/es-router/native";
import ESRouterList from "@/components/es-router/launch";
import ESPluginPageList from "@/components/es-plugin";
import ESNetworkPageList from "@/components/es-network";
import ESTabsListPage from '@/components/es-component/tabs';

//----------------------------------------------------------------------------------

const index = () => import('./views/index')
const error = () => import('./views/error/error')

export default {
  /**
   * 阻止 Android 上 Back 键触发页面返回
   * 默认值为 false，就是开启 Back 键返回。
   */
  disableAutoBack: true,
  /**
   * 打开的页面的总数量
   */
  limit: 100,

  main: 'index',
  error: 'error',

  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    ...Object.keys(ESStartList).map(index => ({
      path: `/start/${index}`,
      name: `start/${index}`,
      component: ESStartList[index].component,
    })),
    ...Object.keys(ESLifecyclePageList).map(index => ({
      path: `/lifecycle/${index}`,
      name: `lifecycle/${index}`,
      component: ESLifecyclePageList[index].component,
    })),
    ...Object.keys(ESLogPageList).map(index => ({
      path: `/log/${index}`,
      name: `log/${index}`,
      component: ESLogPageList[index].component,
    })),
    ...Object.keys(ESFocusPageList).map(index => ({
      path: `/focus/${index}`,
      name: `focus/${index}`,
      component: ESFocusPageList[index].component,
    })),
    ...Object.keys(ESComponentPageList).map(index => ({
      path: `/component/${index}`,
      name: `component/${index}`,
      component: ESComponentPageList[index].component,
    })),
    ...Object.keys(ESWebViewPageList).map(index => ({
      path: `/webview/${index}`,
      name: `webview/${index}`,
      component: ESWebViewPageList[index].component,
    })),
    ...Object.keys(ESKeyPageList).map(index => ({
      path: `/key/${index}`,
      name: `key/${index}`,
      component: ESKeyPageList[index].component,
    })),
    ...Object.keys(ESEventBusPageList).map(index => ({
      path: `/eventbus/${index}`,
      name: `eventbus/${index}`,
      component: ESEventBusPageList[index].component,
    })),
    ...Object.keys(ESAnimationPageList).map(index => ({
      path: `/animation/${index}`,
      name: `animation/${index}`,
      component: ESAnimationPageList[index].component,
    })),
    ...Object.keys(ESVoiceList).map(index => ({
      path: `/voice/${index}`,
      name: `voice/${index}`,
      component: ESVoiceList[index].component,
    })),
    ...Object.keys(ESRouterESList).map(index => ({
      path: `/router/${index}`,
      name: `router/${index}`,
      component: ESRouterESList[index].component,
      launchMode: ESRouterESList[index].launchMode,
    })),
    ...Object.keys(ESRouterNativeList).map(index => ({
      path: `/router/${index}`,
      name: `router/${index}`,
      component: ESRouterNativeList[index].component,
      launchMode: ESRouterNativeList[index].launchMode,
    })),
    ...Object.keys(ESRouterList).map(index => ({
      path: `/router/${index}`,
      name: `router/${index}`,
      component: ESRouterList[index].component,
      launchMode: ESRouterList[index].launchMode,
    })),
    ...Object.keys(ESCanvasList).map(index => ({
      path: `/canvas/${index}`,
      name: `canvas/${index}`,
      component: ESCanvasList[index].component,
    })),
    ...Object.keys(ESModulePageList).map(index => ({
      path: `/module/${index}`,
      name: `module/${index}`,
      component: ESModulePageList[index].component,
    })),
    ...Object.keys(ESPlayerManagerPageList).map(index => ({
      path: `/manager/${index}`,
      name: `manager/${index}`,
      component: ESPlayerManagerPageList[index].component,
    })),
    ...Object.keys(ESADPlayerList).map(index => ({
      path: `/ad/${index}`,
      name: `ad/${index}`,
      component: ESADPlayerList[index].component,
    })),
    ...Object.keys(ESVideoPlayerPageList).map(index => ({
      path: `/video/${index}`,
      name: `video/${index}`,
      component: ESVideoPlayerPageList[index].component,
    })),
    ...Object.keys(ESAPINavPageList).map(item => ({
      path: `/nav/${item}`,
      name: `nav/${item}`,
      component: ESAPINavPageList[item].component,
    })),
    ...Object.keys(ESCorePageList).map(item => ({
      path: `/core/${item}`,
      name: `core/${item}`,
      component: ESCorePageList[item].component,
    })),
    ...Object.keys(ESAdvancedPageList).map(item => ({
      path: `/advanced/${item}`,
      name: `advanced/${item}`,
      component: ESAdvancedPageList[item].component,
    })),
    ...Object.keys(ESSeekBarPageList).map(item => ({
      path: `/seekbar/${item}`,
      name: `seekbar/${item}`,
      component: ESSeekBarPageList[item].component,
    })),
    ...Object.keys(ESRemoteList).map(item => ({
      path: `/remote/${item}`,
      name: `remote/${item}`,
      component: ESRemoteList[item].component,
    })),

    //---------------------------------------------
    ...Object.keys(ESAndroidAudioPlayerPageList).map(index => ({
      path: `/audio/${index}`,
      name: `audio/${index}`,
      component: ESAndroidAudioPlayerPageList[index].component,
    })),
    ...Object.keys(ESAsyncAudioPlayerPageList).map(index => ({
      path: `/audio/${index}`,
      name: `audio/${index}`,
      component: ESAsyncAudioPlayerPageList[index].component,
    })),
    ...Object.keys(ESAudioPlayerPageList).map(index => ({
      path: `/audio/${index}`,
      name: `audio/${index}`,
      component: ESAudioPlayerPageList[index].component,
    })),
    ...Object.keys(ESSoundPoolPageList).map(index => ({
      path: `/audio/${index}`,
      name: `audio/${index}`,
      component: ESSoundPoolPageList[index].component,
    })),
    //---------------------------------------------
    ...Object.keys(ESFlexDirectionPageList).map(index => ({
      path: `/flex/${index}`,
      name: `flex/${index}`,
      component: ESFlexDirectionPageList[index].component,
    })),
    ...Object.keys(ESFlexWrapPageList).map(index => ({
      path: `/flex/${index}`,
      name: `flex/${index}`,
      component: ESFlexWrapPageList[index].component,
    })),
    ...Object.keys(ESFlexJustifyContentPageList).map(index => ({
      path: `/flex/${index}`,
      name: `flex/${index}`,
      component: ESFlexJustifyContentPageList[index].component,
    })),
    ...Object.keys(ESFlexAlignItemsPageList).map(index => ({
      path: `/flex/${index}`,
      name: `flex/${index}`,
      component: ESFlexAlignItemsPageList[index].component,
    })),
    ...Object.keys(ESFlexAlignContentPageList).map(index => ({
      path: `/flex/${index}`,
      name: `flex/${index}`,
      component: ESFlexAlignContentPageList[index].component,
    })),
    ...Object.keys(ESPluginPageList).map(index => ({
      path: `/plugin/${index}`,
      name: `plugin/${index}`,
      component: ESPluginPageList[index].component,
    })),
    ...Object.keys(ESNetworkPageList).map(index => ({
      path: `/network/${index}`,
      name: `network/${index}`,
      component: ESNetworkPageList[index].component,
    })),
    ...Object.keys(ESTabsListPage).map(index => ({
      path: `/tabs/${index}`,
      name: `tabs/${index}`,
      component: ESTabsListPage[index].component,
    })),
    {
      path: '/error',
      name: 'error',
      component: error,
      launchMode: 'standard',
    },
  ],
};
