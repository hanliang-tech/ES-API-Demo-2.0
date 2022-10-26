<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="运行时模块用来获取runtime信息"></text>
      <text :text="'设备类型：' + deviceType"></text>
      <text :text="'设备ID：' + deviceId"></text>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {RuntimeDeviceManager} from "@extscreen/es-runtime";

export default {
  mixins: [ESPage],
  name: '运行时模块',
  data() {
    return {
      deviceType: '',
      deviceId: '',
    }
  },
  methods: {
    onESCreate(params) {
      RuntimeDeviceManager.init().then(
        () => {
          this.deviceType = RuntimeDeviceManager.getDeviceType();
          this.deviceId = RuntimeDeviceManager.getDeviceId();
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
