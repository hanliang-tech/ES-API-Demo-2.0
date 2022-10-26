export function urlProvider(provideParams) {
  return new Promise(function (resolve, reject) {
    //....
    //1.请求网络
    //....
    //2.请求本地缓存
    //....
    //3.其他操作
    //....

    //mock
    let urls = {
      urlIndex: 0,
      urlList: [{
        url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
      }],
    }

    let result = {
      //
      urls: urls,
      code: 0,
    }
    //模拟成功
    resolve(result);

    //模拟失败
    // reject(-1);
  });
}

