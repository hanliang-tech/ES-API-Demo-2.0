import {ESLog} from "@extscreen/es-log";
import {ES_AD_TYPE_FRONT} from "@extscreen/es-ad-player";

export function adProvider(provideParams) {
  if (ESLog.isLoggable(ESLog.DEBUG)) {
    ESLog.d("adProvider", "----1----开始解析广告--adProvider------->" + JSON.stringify(provideParams))
  }
  return new Promise(function (resolve, reject) {
    let result = {
      // adId: 'extscreen-runtime',//可点击
      adId: 'extscreen-openscreen',//可跳过
      // adId: 'extscreen-runtime',//正常
      adType: 1,
      mediaId: '1111',
      adCount: 1,
    }
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d("adProvider", "----2----开始解析广告--adProvider------->" + JSON.stringify(result))
    }
    resolve(result);
  });
  //
  // return  {
  //   adId: 'extscreen-runtime',
  //   adType: 1,
  //   mediaId: '1111',
  //   adCount: 1,
  // };
}


