<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="ES模块用来获取runtime中支持的ES信息"></text>
      <text :text="'ESSdkVersionCode：' + esSdkVersionCode"></text>
      <text :text="'ESSdkVersionName：' + esSdkVersionName"></text>
      <text :text="'ESSdkPackageName：' + esSdkPackageName"></text>
      <text :text="'ESMiniProgramPath：' + esMiniProgramPath"></text>
      <text :text="'ESSdkSchemes：' + esSdkSchemes"></text>
    </div>
  </div>
</template>

<script>
import {ESManager, ESPage} from "@extscreen/es-core";

export default {
  name: "ES模块",
  mixins: [ESPage],
  data() {
    return {
      esSdkVersionCode: '',
      esSdkVersionName: '',
      esSdkPackageName: '',
      esMiniProgramPath: '',
      esSdkSchemes: [],
    }
  },
  methods: {
    onESCreate(params) {
      this.esSdkVersionCode = ESManager.getESSDKVersionCode();
      this.esSdkVersionName = ESManager.getESSDKVersionName();
      this.esSdkPackageName = ESManager.getESPackageName();
      this.esSdkSchemes = ESManager.getESSDKSupportSchemes();
    },
  }
}
</script>
<style>
</style>
