export function interceptor(provideParams) {
  return new Promise(function (resolve, reject) {
    //....
    //1.请求网络
    //....
    //2.请求本地缓存
    //....
    //3.其他操作
    //....
    //mock
    let result = {
      intercept: true,
    }
    //模拟成功
    resolve(result);

    //模拟失败
    // reject({
    //   intercept: false,
    // });
  });
}

