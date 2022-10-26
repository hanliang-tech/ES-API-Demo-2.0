<template>
  <span class="title-text-view">
    {{ text }}
  </span>
</template>

<script>

const TAG = "test_text"

export default {
  name: "title",
  props: {
    text: {
      type: String,
      default: ''
    },
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {},
}
</script>

<style scoped>

.title-text-view {
  height: 80px;
  font-size: 40px;
  color: #555;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
}

</style>
