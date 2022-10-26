<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text :text="'上传状态：' + text"></text>
      <text-button text="点击上传" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {ESUpload, ESUploadManager} from "@extscreen/es-upload-module";

export default {
  name: "上传模块",
  mixins: [ESPage, ESUpload],
  data() {
    return {
      text: '',
      uploadUrl: "http://baidu.com",
      mediaType: "multipart/form-data",
      filePramsKey: "file",
      uploadParams: {
        format: "mp3",
      },
      filePath: '/data/data/xxxx/demo.mp3'
    }
  },
  methods: {
    onESCreate(params) {
      ESUploadManager.init().then(
        () => {
        },
        error => {
        }
      )
    },
    //---------------上传状态回调----------------------------------
    onESUploadStart(params) {
      this.text = '上传开始：' + JSON.stringify(params);
    },
    onESUploadSuccess(params) {
      this.text = '上传成功：' + JSON.stringify(params);
    },
    onESUploadError(params) {
      this.text = '上传错误：' + JSON.stringify(params);
    },
    //-----------------------------------------------------------
    onButtonClicked() {
      ESUploadManager.upload(
        this.uploadUrl,
        this._mediaType,
        this._filePramsKey,
        this.filePath,
        this.uploadParams
      )
    }
  }
}
</script>
<style>
</style>
