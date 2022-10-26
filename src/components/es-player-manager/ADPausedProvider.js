import {ESLog} from "@extscreen/es-log";
import {ES_AD_TYPE_PAUSED} from "@extscreen/es-ad-player";

export function adPausedProvider(provideParams) {
  if (ESLog.isLoggable(ESLog.DEBUG)) {
    ESLog.d("adProvider", "----1----开始解析广告--adProvider------->" + JSON.stringify(provideParams))
  }
  return new Promise(function (resolve, reject) {
    let result = {
      adId: 'extscreen-pause',//暂停
      adType: ES_AD_TYPE_PAUSED,
      mediaId: '1111',
      adCount: 1,
    }
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d("adProvider", "----2----开始解析广告--adProvider------->" + JSON.stringify(result))
    }
    resolve(result);
  });
}


