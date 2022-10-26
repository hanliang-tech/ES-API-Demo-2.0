<template>
  <div class="es-sdk-root-css">
    <es-x5web-view
      ref="x5web_view"
      class="index_root_x5web_view_content_css"/>
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
  </div>
</template>

<script>
import {ESX5WebView} from "@extscreen/es-x5web-view";
import {ESPage} from "@extscreen/es-core";

const TAG = "TEST_";
export default {
  name: 'X5WebView',
  mixins: [ESPage],
  data() {
    return {};
  },
  mounted() {
    this.$refs.x5web_view.loadUrl("https://www.baidu.com");
  },
  methods: {
    test() {
    },
  },
  components: {
    'es-x5web-view': ESX5WebView
  }
};
</script>

<style scoped>
.index_root_x5web_view_content_css {
  width: 1920px;
  height: 1080px;
  position: absolute;
}
</style>
