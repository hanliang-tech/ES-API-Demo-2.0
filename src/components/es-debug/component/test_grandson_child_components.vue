<template>
  <div class="child_component_css">
    <div class="child_component_text_css">水电费第三方</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.child_component_css {
  width: 200px;
  height: 200px;
  background-color: #F7B500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.child_component_text_css {
  width: 20px;
  height: 20px;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
