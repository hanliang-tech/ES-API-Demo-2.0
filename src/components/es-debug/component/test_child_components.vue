<template>
  <div class="child_component_css_xxxx">
    <component ref="child_component" :is="childComponent" class="xxxx_css"/>
  </div>
</template>

<script>
export default {
  props: {
    childComponent: {
      type: Object,
      default: {}
    },
    testKey: {
      type: Number,
      default: 100
    },
  },
  mounted() {
  },
  data() {
    return {
      playerType: 100,
    }
  },
  methods: {
    getTestKey() {
      return this.playerType;
    },

    getName() {
      return "child_components";
    }
  }
}
</script>
<style>
.child_component_css_xxxx {
  width: 700px;
  height: 700px;
  background-color: rebeccapurple;
}

.xxxx_css {
  width: 600px;
  height: 600px;
  background-color: gold;
}
</style>
