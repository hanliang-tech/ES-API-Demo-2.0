<template>
  <div class="es-sdk-content-row-css">
    <div class="es-sdk-router-content-column-css">
      <text text="路由堆栈"/>
      <text v-for="(item, index) in stack"
            :text="item.path + '---->:' + item.lifecycle.state"
            style="width: 500px; text-align: left"/>
    </div>
    <div class="es-sdk-router-content-column-css">
      <text text="                 启动模式                  "/>
      <text text="Router 0  launchMode:无            limit:无"/>
      <text text="Router 1  launchMode:standard     limit:2"/>
      <text text="Router 2  launchMode:standard     limit:无"/>
      <text text="Router 3  launchMode:clearTask    limit:无"/>
      <text text="Router 4  launchMode:singleTask   limit:无"/>
      <text text="Router 5  launchMode:无            limit:无"/>
      <text text="Router 6  Activity页面"/>
      <text text="Router 7  异步组件"/>
    </div>
  </div>
</template>

<script>

const TAG = "STACK";
export default {
  props: {
    stack: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.es-sdk-router-content-column-css {
  height: 710px;
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
}

</style>
