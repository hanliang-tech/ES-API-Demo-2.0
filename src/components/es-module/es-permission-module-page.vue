<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="[android.permission.RECORD_AUDIO]"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="是否有权限" @onButtonClicked="isPermissionsGranted"/>
        <text-button text="请求权限" @onButtonClicked="requestPermissions"/>
      </div>
      <text :text="text"></text>
    </div>
  </div>
</template>

<script>
import {ESPage, ESPermissionManager} from "@extscreen/es-core";

export default {
  name: "权限模块",
  mixins: [ESPage],
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onESCreate(params) {
      ESPermissionManager.init().then(
        () => {
        },
        error => {
        }
      )
    },
    isPermissionsGranted() {
      let permissionList = [
        'android.permission.RECORD_AUDIO',
      ];
      ESPermissionManager.isPermissionsGranted(permissionList).then(
        (result) => {
          this.text = JSON.stringify(result)
        },
        error => {
          this.text = JSON.stringify(error)
        }
      )
    },
    requestPermissions() {
      let permissionList = [
        'android.permission.RECORD_AUDIO',
      ];
      ESPermissionManager.requestPermissions(permissionList).then(
        (result) => {
          this.text = JSON.stringify(result)
        },
        error => {
          this.text = JSON.stringify(error)
        }
      )
    },
  }
}
</script>
<style>
</style>
