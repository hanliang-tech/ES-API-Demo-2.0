<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-column-css">
        <text text="/data/data/com.extscreen.runtime/cache/file.test文件操作"></text>
        <div class="es-sdk-content-row-css">
          <text-button text="创建文件操作对象" @onButtonClicked="initFile"/>
          <text-button text="创建文件" @onButtonClicked="newFile"/>
          <text-button text="删除文件" @onButtonClicked="deleteFile"/>
          <text-button text="是否存在" @onButtonClicked="existsFile"/>
          <text-button text="是否是文件夹" @onButtonClicked="isDirectory"/>
          <text-button text="是否是文件" @onButtonClicked="isFile"/>
          <text-button text="关闭文件操作" @onButtonClicked="closeFile"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <text text="/data/data/com.extscreen.runtime/文件夹操作"></text>
        <div class="es-sdk-content-row-css">
          <text-button text="创建文件夹操作对象" @onButtonClicked="initDirectory"/>
          <text-button text="是否存在" @onButtonClicked="existsDirectory"/>
          <text-button text="遍历文件夹" @onButtonClicked="listDirectory"/>
          <text-button text="关闭文件操作" @onButtonClicked="closeDirectory"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ESFile, ESPage, ESToast} from "@extscreen/es-core";

export default {
  name: "文件模块",
  mixins: [ESPage],
  data() {
    return {
      file: null,
      directory: null,
    }
  },
  methods: {
    initFile() {
      //
      this.file = new ESFile();
      this.file.newFile('/data/data/com.extscreen.runtime/cache/file.test');
    },
    newFile() {
      this.file.createNewFile().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    deleteFile() {
      this.file.delete().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    closeFile() {
      this.file.close().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    existsFile() {
      this.file.exists().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    isDirectory() {
      this.file.isDirectory().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    isFile() {
      this.file.isFile().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    //---------------------------------------------------------
    initDirectory() {
      //
      this.directory = new ESFile();
      this.directory.newFile('/data/data/com.extscreen.runtime');
    },
    listDirectory() {
      this.directory.list().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    existsDirectory() {
      this.directory.exists().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
    closeDirectory() {
      this.directory.close().then(
        (result) => {
          ESToast.showToast(JSON.stringify(result));
        },
        error => {
          ESToast.showToast('操作失败');
        });
    },
  }
}
</script>
<style>
</style>
