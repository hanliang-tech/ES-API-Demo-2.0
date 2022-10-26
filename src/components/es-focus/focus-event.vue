<template>
  <div class="focusTest" :clipChildren="false" :blockRootFocus="blockRoot">
    <p class="rowHead">焦点UI</p>
    <div class="row" @childFocus="onChildFocus">
      <div class="divBox" :focusable="true" :enableFocusBorder="true" focusBorderColor="#0000ff">
        <p duplicateParentState>焦点边框</p>
      </div>
      <div class="divBox" focusView>
        <p duplicateParentState>放大效果</p>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

export default {
  name: 'focus-event',
  mixins: [ESPage],
  data() {
    return {
      blockRoot: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.blockRoot = false;
    }, 2000);
  },
  methods: {
    onChildFocus(e) {
      console.log(`onChildFocus index:${e.child.index}`);
    },
  },
};
</script>
<style>

/* Common CSS Styles */

.focusTest {
  width: 1920px;
  height: 1080px;
  padding: 25px;
  background-color: white;
}

.focusTest .rowHead {
  font-size: 30px;
  color: #555;
  text-align: left;
  line-height: 70px;
  padding-left: 25px;
  padding-right: 25px;
}

.focusTest .row {
  width: 1920px;
  height: 100px;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
}

.focusTest .divBox {
  width: 200px;
  height: 50px;
  background-color: transparent;
  focus-background-color: #40b883;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #40b883;
  border-width: 2px;
  border-radius: 10px;
  margin-left: 20px;
}


.focusTest .divBox p {
  font-size: 20px;
  color: #42b983;
  focus-color: #fff;
}

</style>
