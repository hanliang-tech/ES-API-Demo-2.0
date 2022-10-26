<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">Toast</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <div class="index_root_content_row_css">
        <text-button text="吐司" @onButtonClicked="showToast"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESToastModule} from "@extscreen/es-core";

const TAG = "TEST_";
export default {
  name: 'test_toast',
  data() {
    return {};
  },
  mounted() {


  },
  methods: {
    showToast() {
      ESToastModule.make();
      ESToastModule.setLongDuration(true)
      ESToastModule.setTextSize(100)
      ESToastModule.setTextColor(0xFF00FF00)
      ESToastModule.setLeftIcon('https://wx4.sinaimg.cn/mw2000/7aa47acaly1h50buzqn19j22802yox6q.jpg')
      ESToastModule.show("你你好你好你好你好好")
    }
  },
  components: {}
};
</script>

<style scoped>

.sample_index_root_view_css {
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

.index_root_content_css {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
