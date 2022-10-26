<template>
  <div class="sample_crop_index_root_view_css">
    <span class="index_crop_root_title_css">ESCroppedImageViewComponent</span>
    <div class="index_crop_root_content_css">
      <div class="index_crop_root_content_divider_css"/>
      <div class="index_crop_root_content_row_css_test">
        <es-puzzle-view
          ref="croppedTopLeft"
          :url="url"
          :puzzle-type="0"
          :puzzle-piece-border-width="1"
          class="es_cropped_image_css_top_left"/>
        <es-puzzle-view
          ref="croppedTopRight"
          :url="url"
          :puzzle-type="1"
          puzzle-piece-border-color="#FFFF2828"
          :puzzle-piece-border-width="1"
          class="es_cropped_image_css_top_right"/>
        <es-puzzle-view
          ref="croppedBottomLeft"
          :url="url"
          :puzzle-type="2"
          :puzzle-piece-border-width="1"
          class="es_cropped_image_css_bottom_left"/>
        <es-puzzle-view
          ref="croppedBottomRight"
          :url="url"
          :puzzle-type="3"
          :puzzle-piece-border-width="1"
          class="es_cropped_image_css_bottom_right"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPuzzleView} from "@extscreen/es-puzzle-view";

const TAG = "TEST_";
export default {
  name: 'test_',
  data() {
    return {
      // url: "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/07/07/f321987b-8adb-4a85-afcd-1c7b12ae229a.png"
      // url: "http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/06/29/bdc8020c-52f3-4b01-8f3b-c20e729525fd.png"
      // url:'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/06/29/bdc8020c-52f3-4b01-8f3b-c20e729525fd.png'
      // url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/06/29/4b988caa-85f1-4d87-82eb-292f121cf5e7.png'
      url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/files/XDF_CHILDREN_ENGLISH/2022/06/29/8d66dac5-5593-48d5-be2d-63c1d4ebcbf8.png'
      // url: "http://qcloudcdn-moss.cp47.ott.cibntv.net/channelzero_image/web_static/xindongfang/imgs/classes_puzzle_border_bg.png"
    };
  },
  mounted() {
    this.$refs.croppedTopLeft.init();
    this.$refs.croppedTopRight.init();
    this.$refs.croppedBottomLeft.init();
    this.$refs.croppedBottomRight.init();
  },
  methods: {},
  components: {
    'es-puzzle-view': ESPuzzleView
  }
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

.index_crop_root_content_row_css_test {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 1920px;
  height: 1080px;
}

.index_crop_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

.es_cropped_image_css_top_left {
  width: 475px;
  height: 356px;
  position: absolute;
  left: 500px;
  top: 20px;
}

.es_cropped_image_css_top_right {
  width: 356px;
  height: 475px;
  position: absolute;
  left: 1059px;
  top: 20px;
}

.es_cropped_image_css_bottom_left {
  width: 356px;
  height: 475px;
  position: absolute;
  left: 500px;
  top: 500px
}

.es_cropped_image_css_bottom_right {
  width: 475px;
  height: 356px;
  position: absolute;
  left: 937px;
  top: 619px
}


</style>
