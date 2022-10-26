<template>
  <div class="div_root_csss" v-if="xcomponent.methods.getTestKey() === 2000">
    <test_components ref="xxx"
                     :xcomponent="xcomponent"
                     class="component-class-css"/>
  </div>
</template>

<script>
import test_components from "@/views/component/test_components";
import test_child_components from "@/views/component/test_child_components";
import test_grandson_child_components from "@/views/component/test_grandson_child_components";
import {ESLog} from "@extscreen/es-log";

const TAG = "CCCCCCCC";

export default {
  props: {},
  data() {
    return {
      xcomponent: test_child_components
    }
  },
  methods: {},
  mounted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----XXXXXXXXX------>>>>' + JSON.stringify(test_child_components.data()));
    }
    // test_child_components.props.childComponent = test_grandson_child_components

    // let name = this.$refs.xxx.getName();
    let name2 = test_child_components.methods.getName();
    let testKey = test_child_components.methods.getTestKey();
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, testKey + '--222--XXXXXXXXX------>>>>' + name2);
    }

    test_child_components.props.testKey = 2;

    let playerType = test_child_components.props.testKey;
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----XXXXXXXXX---33--->>>>' + JSON.stringify(test_child_components.props.testKey));
    }
  },
  components: {
    "test_components": test_components,
    "test_child_components": test_child_components,
  }
}
</script>
<style>
.component-class-css {
  width: 800px;
  height: 800px;
  background-color: red;
}


.div_root_csss {
  width: 1920px;
  height: 1080px;
}
</style>
