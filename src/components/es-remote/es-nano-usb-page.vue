<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="获取设备信息" @onButtonClicked="init"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text :text="isNanoUsbDeviceAttached ? 'Dongle状态：已经插入' : 'Dongle状态：已经拔出'"></text>
        <text :text="isNanoUsbDeviceConnected ? '遥控器状态：已经链接' : '遥控器状态：已经断开'"></text>
        <text :text="isNanoUsbDevicePermissionsGranted ? '权限状态：已经授权' : '权限状态：没有授权'"></text>
      </div>
      <text :text="'设备信息：' + JSON.stringify(attachedNanoUsbDevice)"></text>
    </div>
  </div>
</template>

<script>
import {ESPage, ESToast} from "@extscreen/es-core";
import {
  ESNanoUsbDevice,
  ESNanoUsbDeviceManager,
  ESNanoUsbVersion,
  ESNanoUsbVersionManager
} from "@extscreen/es-nano-usb";
import {ESLog} from "@extscreen/es-log";

const TAG = '';

export default {
  name: '获取设备信息',
  mixins: [ESPage, ESNanoUsbDevice],
  data() {
    return {
      isNanoUsbDeviceAttached: false,
      isNanoUsbDeviceConnected: false,
      isNanoUsbDevicePermissionsGranted: false,
      attachedNanoUsbDevice: '',
    };
  },
  methods: {
    onNanoUsbDeviceAttached(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbDeviceAttached-success-->>>>>' + JSON.stringify(value));
      }
      ESToast.showToast("onNanoUsbDeviceAttached" + JSON.stringify(value))
      this.initNanoUsbInfo();
    },
    onNanoUsbDeviceDetached(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbDeviceDetached-success-->>>>>' + JSON.stringify(value));
      }
      ESToast.showToast("onNanoUsbDeviceDetached" + JSON.stringify(value))
      this.initNanoUsbInfo();
    },
    onNanoUsbDevicePermissionChanged(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbDevicePermissionChanged-success-->>>>>' + JSON.stringify(value));
      }
      ESToast.showToast("onNanoUsbDevicePermissionChanged" + JSON.stringify(value))
      this.initNanoUsbInfo();
    },
    onNanoUsbDeviceConnectionChanged(value) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbDeviceConnectionChanged-success-->>>>>' + JSON.stringify(value));
      }
      ESToast.showToast("onNanoUsbDeviceConnectionChanged" + JSON.stringify(value))
      this.initNanoUsbInfo();
    },
    //----------------------------------------------
    init() {
      ESNanoUsbDeviceManager.init().then(
        () => {
          this.initNanoUsbInfo();
        },
        error => {
        });
    },
    initNanoUsbInfo() {
      //
      this.isNanoUsbDeviceAttached = ESNanoUsbDeviceManager.isNanoUsbDeviceAttached();
      this.isNanoUsbDeviceConnected = ESNanoUsbDeviceManager.isNanoUsbDeviceConnected();
      this.isNanoUsbDevicePermissionsGranted = ESNanoUsbDeviceManager.isNanoUsbDevicePermissionsGranted();
      this.attachedNanoUsbDevice = ESNanoUsbDeviceManager.getAttachedNanoUsbDevice();
    },
  }
};
</script>

<style>
</style>
