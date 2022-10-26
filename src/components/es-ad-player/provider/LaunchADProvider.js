import {ES_AD_TYPE_LAUNCH} from "@extscreen/es-ad-player";

export function adProvider(provideParams) {
  return new Promise(function (resolve, reject) {
    let result = {
      adId: 'test-kaiping',
      mediaId: '222',
      adType: ES_AD_TYPE_LAUNCH,
      adCount: 1,
    }
    resolve(result);
  });
}


