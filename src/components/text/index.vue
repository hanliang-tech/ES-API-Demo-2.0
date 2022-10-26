<template>
  <span class="text-view-css">
    {{ text }}
  </span>
</template>

<script>

const TAG = "test_text"

export default {
  name: "text",
  props: {
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>

.text-view-css {
  font-size: 30px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
