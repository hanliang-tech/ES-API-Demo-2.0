<template>
  <div class="nav-button-root-css"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @click="onClick"
       @focus="onFocus">
    <p duplicateParentState class="test_text_view_css">{{ text }}</p>
  </div>
</template>

<script>

import {ESLaunchManager, ESModule} from "@extscreen/es-core";

const TAG = "test_button"

export default {
  name: "nav-button",
  props: {
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  mounted() {

  },
  methods: {
    onFocus(e) {
      this.focused = e.isFocused;
      this.$emit("onButtonFocused", e.isFocused);
    },

    onClick(e) {
      if (this.url) {
        ESLaunchManager.launchESPage({
          url: this.url,
          params: {}
        })
      }
      this.$emit("onButtonClicked");
    }
  },
}
</script>

<style scoped>

.nav-button-root-css {
  width: 250px;
  height: 80px;
  margin: 20px;
  border-style: solid;
  border-color: #40b883;
  border-width: 2px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  focus-background-color: #40b883;
}

.test_text_view_css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}

</style>
