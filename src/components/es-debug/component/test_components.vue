<template>
  <div class="div_root_4">
    <component ref="xcomponent" :is="xcomponent"/>
  </div>
</template>

<script>
export default {
  props: {
    xcomponent: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      msg: 'sdfsdfsdfdsf',
    }
  },
  methods: {

    fnnnn() {
      this.msg = '3333333333333'
      this.$refs.xcomponent.handleClick();
    }
  }
}
</script>
<style>
.component-class {
  width: 200px;
  height: 200px;
  background-color: red;
}


.div_root_4 {
  width: 800px;
  height: 800px;
  background-color: palevioletred;
}
</style>
