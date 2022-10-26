<template>
  <div class="this_index_root_view_css">
    <span class="index_root_title_css">This Component</span>
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
  },
  methods: {
    testThisMethod() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----FFFFFFF--This Component--testThisMethod-->>>>');
      }
      console.log("--------FFFFFFF-----sayHello-----This Component------>>>>")
    },
  },
  components: {}
};
</script>

<style scoped>

.this_index_root_view_css {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rebeccapurple;
}

.index_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
