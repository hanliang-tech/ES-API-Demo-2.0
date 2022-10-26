<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="获取Usb设备列表" @onButtonClicked="getUsbDeviceList"/>
        <text-button text="获取Usb设备信息" @onButtonClicked="getUsbDevice"/>
        <text-button text="批量获取Usb设备信息" @onButtonClicked="getUsbDeviceListByArray"/>
        <text-button text="Usb设备是否获取权限" @onButtonClicked="isUsbDevicePermissionsGranted"/>
        <text-button text="请求Usb设备权限" @onButtonClicked="requestUsbDevicePermission"/>
      </div>
      <text :text="usbDeviceText"></text>
    </div>
  </div>
</template>

<script>
import {
  ESPage,
  ESToast,
  ESUsbDevice,
  ESUsbDeviceManager
} from "@extscreen/es-core";

export default {
  name: "Usb设备模块",
  mixins: [ESPage, ESUsbDevice],
  data() {
    return {
      usbDeviceText: '',
    }
  },
  methods: {
    onESCreate(params) {
      ESUsbDeviceManager.init().then(
        () => {
        },
        error => {
          this.usbDeviceText = '错误';
        }
      )
    },
    //----------------------监听Usb设备插拔-------------------------
    onESUsbDeviceAttached(usbDevice) {
      this.usbDeviceText = 'Usb设备插入：' + JSON.stringify(usbDevice);
    },
    onESUsbDeviceDetached(usbDevice) {
      this.usbDeviceText = 'Usb设备拔出：' + JSON.stringify(usbDevice);
    },
    //-----------------------------------------------
    getUsbDeviceList() {
      ESUsbDeviceManager.getUsbDeviceList().then(
        (usbDeviceList) => {
          this.usbDeviceText = JSON.stringify(usbDeviceList);
        },
        error => {
          this.usbDeviceText = '错误';
        }
      );
    },
    getUsbDevice() {
      ESUsbDeviceManager.getUsbDevice(30021, 10244).then(
        (usbDevice) => {
          this.usbDeviceText = JSON.stringify(usbDevice);
        },
        error => {
          this.usbDeviceText = '错误';
        }
      );
    },
    getUsbDeviceListByArray() {
      ESUsbDeviceManager.getUsbDeviceListByArray(
        [[30021, 10244], [3034, 51232]]
      ).then(
        (usbDeviceList) => {
          this.usbDeviceText = JSON.stringify(usbDeviceList);
        },
        error => {
          this.usbDeviceText = '错误';
        }
      );
    },
    isUsbDevicePermissionsGranted() {
      ESUsbDeviceManager.isUsbDevicePermissionsGranted(30021, 10244).then(
        (hasPermissionsGranted) => {
          this.usbDeviceText = hasPermissionsGranted ? '已经获取了权限' : '未获取权限';
        },
        error => {
          this.usbDeviceText = '错误';
        }
      );
    },
    requestUsbDevicePermission() {
      ESUsbDeviceManager.requestUsbDevicePermission(30021, 10244).then(
        (requestUsbDevicePermission) => {
          ESToast.showToast("请求权限：" + requestUsbDevicePermission);
        },
        error => {
          ESToast.showToast("请求权限Error!");
        }
      );
    },
  }
}
</script>
<style>
</style>
