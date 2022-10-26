<template>
  <div class="sample_x5web_view_root_view_css">
    <span class="index_root_title_css">ESX5WebView</span>
    <es-x5web-view
      ref="x5web_view"
      class="index_root_x5web_view_content_css"/>
  </div>
</template>

<script>
import {ESX5WebView} from "@extscreen/es-x5web-view";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";

const TAG = "TEST_";
export default {
  name: 'test_x5web',
  mixins: [ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin],
  data() {
    return {};
  },
  mounted() {
    this.$refs.x5web_view.loadUrl("https://www.baidu.com");
  },
  methods: {
    test() {
    },
    onBackPressed() {
      ESLaunchManager.finishESPage();
    }
  },
  components: {
    'es-x5web-view': ESX5WebView
  }
};
</script>

<style scoped>

.sample_x5web_view_root_view_css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.index_root_x5web_view_content_css {
  width: 1920px;
  height: 1080px;
  background-color: red;
  position: absolute;
}

.index_root_content_row_css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 1920px;
}

.index_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

</style>
