<template>
  <div class="button-root-css"
       :clipChildren="false"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @click="onClick"
       @focus="onFocus">
    <p duplicateParentState class="text-root-css">{{ text }}</p>
  </div>
</template>

<script>

const TAG = "test_button"

export default {
  name: "text-button",
  props: {
    index: {
      type: Number,
      default: -1
    },
    text: {
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
      this.$emit("onButtonClicked");
    }
  },
}
</script>

<style scoped>

.button-root-css {
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

.text-root-css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}

</style>
