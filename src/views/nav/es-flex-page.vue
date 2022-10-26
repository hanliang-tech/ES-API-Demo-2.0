<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-column-css">
        <text text="flex-direction:"></text>
        <div class="es-sdk-content-row-css">
          <nav-button
            v-for="(item, _) in directionList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="flex-wrap:"></text>
        <div class="es-sdk-content-row-css">
          <nav-button
            v-for="(item, _) in wrapList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="justify-content:"></text>
        <div class="es-sdk-content-row-css">
          <nav-button
            v-for="(item, _) in justifyContentList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
    </div>
    <div class="es-sdk-content-column-css">
      <text text="align-items:"></text>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, _) in alignItemsList" :key="item.id"
          :text="item.name"
          :url="`flex/${item.id}`"/>
      </div>
    </div>
    <div class="es-sdk-content-column-css">
      <text text="align-content:"></text>
      <div class="es-sdk-content-row-css">
        <nav-button
          v-for="(item, _) in alignContentList" :key="item.id"
          :text="item.name"
          :url="`flex/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import ESFlexDirectionPageList from "@/components/es-flex/direction";
import ESFlexWrapPageList from "@/components/es-flex/wrap";
import ESFlexJustifyContentPageList from "@/components/es-flex/justify-content";
import ESFlexAlignItemsPageList from "@/components/es-flex/align-items";
import ESFlexAlignContentPageList from "@/components/es-flex/align-content";

export default {
  name: "布局",
  mixins: [ESPage],
  data() {
    return {
      directionList: Object.keys(ESFlexDirectionPageList).map(data => ({
        id: data,
        name: ESFlexDirectionPageList[data].name,
      })),
      wrapList: Object.keys(ESFlexWrapPageList).map(data => ({
        id: data,
        name: ESFlexWrapPageList[data].name,
      })),
      justifyContentList: Object.keys(ESFlexJustifyContentPageList).map(data => ({
        id: data,
        name: ESFlexJustifyContentPageList[data].name,
      })),
      alignItemsList: Object.keys(ESFlexAlignItemsPageList).map(data => ({
        id: data,
        name: ESFlexAlignItemsPageList[data].name,
      })),
      alignContentList: Object.keys(ESFlexAlignContentPageList).map(data => ({
        id: data,
        name: ESFlexAlignContentPageList[data].name,
      })),
    };
  },
}
</script>
<style>
</style>
