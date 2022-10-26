<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <nav-button
        v-for="(item, index) in dataList" :key="item.id"
        :text="item.name"
        :url="`tabs/${item.id}`"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from '@extscreen/es-core';
import ESTabsListPage from '@/components/es-component/tabs/index';

export default {
  name: 'Tabs',
  mixins: [ESPage],
  data() {
    return {
      dataList: Object.keys(ESTabsListPage)
        .map(data => ({
          id: data,
          name: ESTabsListPage[data].name
        }))
    };
  }
};
</script>

<style scoped>

</style>
