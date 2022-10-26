<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text :text="'CacheDir：' + cacheDir"></text>
      <text :text="'FilesDir：' + filesDir"></text>
      <text :text="'ExternalCacheDir：' + externalCacheDir"></text>
      <text :text="'ExternalStorageState：' + externalStorageState"></text>
      <text :text="'HasExternalStoragePermission：' + hasExternalStoragePermission"></text>
    </div>
  </div>
</template>

<script>
import {ESPage, ESStorageManager} from "@extscreen/es-core";

export default {
  name: "设备存储模块",
  mixins: [ESPage],
  data() {
    return {
      cacheDir: '',
      filesDir: '',
      externalCacheDir: '',
      externalStorageState: '',
      hasExternalStoragePermission: ''
    }
  },
  methods: {
    onESCreate(params) {
      ESStorageManager.init()
        .then(() => ESStorageManager.getCacheDir())
        .then((cacheDir) => {
          this.cacheDir = cacheDir;
        })
        .then(() => ESStorageManager.getFilesDir())
        .then((filesDir) => {
          this.filesDir = filesDir;
        })
        .then(() => ESStorageManager.getExternalCacheDir())
        .then((externalCacheDir) => {
          this.externalCacheDir = externalCacheDir;
        })
        .then(() => ESStorageManager.getExternalStorageState())
        .then((externalStorageState) => {
          this.externalStorageState = externalStorageState;
        })
        .then(() => ESStorageManager.hasExternalStoragePermission())
        .then((hasExternalStoragePermission) => {
          this.hasExternalStoragePermission = hasExternalStoragePermission;
        })
        .then(() => {
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
