import Text from "./index.vue";

Text.install = (Vue) => {
  Vue.component(Text.name, Text)
}

export default Text;
