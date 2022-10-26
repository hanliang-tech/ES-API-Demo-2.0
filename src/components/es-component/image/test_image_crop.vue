<template>
  <div class="sample_crop_index_root_view_css">
    <span class="index_crop_root_title_css">ESCroppedImageViewComponent</span>
    <div class="index_crop_root_content_css">
      <div class="index_crop_root_content_divider_css"/>
      <div class="index_crop_root_content_row_css">
        <es-cropped-image-view-component
          ref="croppedTopLeft"
          class="es_cropped_image_css"/>
        <es-cropped-image-view-component
          ref="croppedTopRight"
          class="es_cropped_image_css_2"/>
      </div>
      <div class="index_crop_root_content_row_css">
        <es-cropped-image-view-component
          ref="croppedBottomLeft"
          class="es_cropped_image_css_3"/>
        <es-cropped-image-view-component
          ref="croppedBottomRight"
          class="es_cropped_image_css_4"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";

const TAG = "TEST_";
export default {
  name: 'test_',
  data() {
    return {};
  },
  mounted() {

    let cropWith = 256;
    let cropHeight = 256;
    let pathArray = [
      {
        action: 0,
        x1: 0,
        y1: 0,
      },
      {
        action: 1,
        x1: cropWith,
        y1: 0,
      },
      {
        action: 1,
        x1: cropWith,
        y1: cropHeight,
      },
      //------------------------------
      {
        action: 1,
        x1: cropWith / 3 * 2,
        y1: cropHeight,
      },
      {
        action: 2,
        x1: cropWith / 6 * 5,
        y1: cropHeight - 64,
        x2: cropWith / 6,
        y2: cropHeight - 64,
        x3: cropWith / 3,
        y3: cropHeight,
      },
      {
        action: 1,
        x1: 0,
        y1: cropHeight,
      },
      //------------------------------
      {
        action: 3,
      },
    ]

    let paintArray = [
      {
        action: 0,
        color: '#FF000000',
        style: 0,
      },
      {
        action: 1,
        color: '#FF000000',
        style: 0,
        mode: 5,
      },
      {
        action: 0,
        color: '#80FFFFFF',
        style: 1,
        strokeWidth: 5,
      },
      {
        action: 0,
        color: '#FF677E9A',
        style: 1,
        strokeWidth: 2,
      },
    ]


    this.$refs.croppedTopLeft.crop(
      "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/07/07/f321987b-8adb-4a85-afcd-1c7b12ae229a.png",
      256,
      256,
      0,
      0,
      pathArray,
      paintArray,
    )

    // this.$refs.croppedTopLeft.draw(
    //   256,
    //   256,
    //   pathArray,
    //   paintArray,
    // )

    // this.$refs.croppedTopRight.init(
    //   "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/07/07/f321987b-8adb-4a85-afcd-1c7b12ae229a.png",
    //   256,
    //   256,
    //   100,
    //   0,
    //   256,
    //   0,
    //   64,
    //   true,
    //   false,
    //   false,
    //   true
    // )
    // this.$refs.croppedBottomLeft.init(
    //   "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/07/07/f321987b-8adb-4a85-afcd-1c7b12ae229a.png",
    //   256,
    //   256,
    //   0,
    //   100,
    //   0,
    //   256,
    //   64,
    //   false,
    //   true,
    //   true,
    //   false
    // )
    // this.$refs.croppedBottomRight.init(
    //   "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/07/07/f321987b-8adb-4a85-afcd-1c7b12ae229a.png",
    //   256,
    //   256,
    //   100,
    //   100,
    //   256,
    //   256,
    //   64,
    //   true,
    //   true,
    //   false,
    //   false,
    // )
  },
  methods: {
    test() {
    }
  },
  components: {}
};
</script>

<style scoped>

.sample_crop_index_root_view_css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_crop_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.index_crop_root_content_css {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_crop_root_content_row_css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 400px;
}

.index_crop_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

.es_cropped_image_css {
  width: 256px;
  height: 256px;
}

.es_cropped_image_css_4 {
  width: 356px;
  height: 356px;
}

.es_cropped_image_css_3 {
  width: 256px;
  height: 356px;
}

.es_cropped_image_css_2 {
  width: 356px;
  height: 256px;
}

</style>
