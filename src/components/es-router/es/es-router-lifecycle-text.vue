<template>
  <text :text="text" style="background-color: transparent"/>
</template>

<script>

const TAG = "ESRouter";
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    appendLifecycle(text) {
      this.text = this.text + ' --> ' + text
    },
  },
};
</script>

<style scoped>
</style>
