<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">This</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <div class="index_root_content_row_css">
        <test_this_component ref="test_this_component"/>
        <text-button text="测试This" @onButtonClicked="invokeMethod"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";

const TAG = "TEST_THIS";
export default {
  name: 'test_this_view',
  data() {
    return {};
  },
  mounted() {
    ThisManager.setThisObject(this.$refs.test_this_component);
  },
  methods: {
    // testThisMethod() {
    //   if (ESLog.isLoggable(ESLog.DEBUG)) {
    //     ESLog.d(TAG, '-----FFFFFFF----testThisMethod-->>>>');
    //   }
    //   console.log("--------FFFFFFF-----testThisMethod-----xxxx------>>>>")
    // },

    invokeMethod() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----FFFFFFF----invokeMethod-->>>>');
      }
      console.log("--------FFFFFFF-----invokeMethod-----xxxx------>>>>")
      ThisManager.sayHello();
    },
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
