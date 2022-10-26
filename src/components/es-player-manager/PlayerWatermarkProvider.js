export const TAG = "WatermarkProvider"

/**
 * 水印
 */
export function watermarkProvider(watermarkParams) {
  return new Promise(function (resolve, reject) {
    resolve({
      watermarkList: [
        {
          id: '1427112183484915713',
          watermarkName: '测试水印',
          watermarkImage: 'https://qcloudimg-moss.cp47.ott.cibntv.net/project/zero/img_test/2021/03/241f518032-8e31-4427-8090-086bac715782.jpg?imageMogr2/interlace/0|imageMogr2/gravity/center/crop/336x198',
          width: "0.17",
          height: "0.089",
          watermarkArea: 2,
          verticalOffset: "0.0435",
          horizontalOffset: "0.025"
        }
      ],
    });
  });
}

