export const TAG = "PlayerAlertProvider"

/**
 * 播放器弹窗
 */
export function alertWindowProvider(providerParams) {
  return new Promise(function (resolve, reject) {
    resolve({
      alertTitle: "测试",
      // alertImage: 'http://qapi-moss.cp47.ott.cibntv.net:9099/huanshiting/channel_zero_agreement/playing_normal.gif',
      alertImage: 'http://qcloudimg-moss.cp47.ott.cibntv.net/project/zero/img_test/2022/01/12/9b5d9d79-4593-453a-b0ba-f30805896a15.jpg',
      alertType: '0',
    });
  });
}

