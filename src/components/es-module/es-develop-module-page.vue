<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="开发信息模块用来获取开发相关runtime信息"></text>
      <text :text="'Runtime版本名称：' + versionName"></text>
      <text :text="'Runtime版本号：' + versionCode"></text>
      <text :text="'Runtime包名：' + packageName"></text>
      <text :text="'Runtime渠道：' + channel"></text>
    </div>
  </div>
</template>

<script>
import {ESDevelopManager, ESPage} from "@extscreen/es-core";

export default {
  name: "开发信息模块",
  mixins: [ESPage],
  data() {
    return {
      versionName: '',
      versionCode: -1,
      packageName: '',
      channel: ''
    }
  },
  methods: {
    onESCreate(params) {
      ESDevelopManager.init().then(
        () => {
          this.versionName = ESDevelopManager.getVersionName();
          this.versionCode = ESDevelopManager.getVersionCode();
          this.packageName = ESDevelopManager.getPackageName();
          this.channel = ESDevelopManager.getChannel();
        },
        //
        error => {

        })
    },
  }
}
</script>
<style>
</style>
