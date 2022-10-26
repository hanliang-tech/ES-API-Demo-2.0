<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button text="获取设备版本" @onButtonClicked="getNanoUsbVersion"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text :text="'Dongle固件版本：' + dongleVersion"></text>
        <text :text="'遥控器固件版本：' + remoteVersion"></text>
        <text :text="'SN：' + sn"></text>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";
import {
  ESNanoUsbDeviceManager,
  ESNanoUsbVersion,
  ESNanoUsbVersionManager
} from "@extscreen/es-nano-usb";
import {ESLog} from "@extscreen/es-log";

const TAG = 'NanoUsbManager';

export default {
  name: '获取版本信息',
  mixins: [ESPage, ESNanoUsbVersion],
  data() {
    return {
      dongleVersion: '',
      remoteVersion: '',
      sn: '',
    };
  },
  methods: {
    getNanoUsbVersion() {
      ESNanoUsbDeviceManager.init()
        .then(() => ESNanoUsbVersionManager.init())
        .then(() => ESNanoUsbVersionManager.initNanoUSBDeviceInfoPromise())
        .then(
          () => {
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, '#------getNanoUsbVersion-success-->>>>>');
            }
          },
          error => {
            if (ESLog.isLoggable(ESLog.DEBUG)) {
              ESLog.d(TAG, '#------getNanoUsbVersion-error-->>>>>');
            }
          });
    },
    //----------------------------回调-----------------------------
    onNanoUsbDongleInfoStatusChanged(status) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbDongleInfoStatusChanged-success-->>>>>' + JSON.stringify(status));
      }
      this.dongleVersion = ESNanoUsbVersionManager.getNanoUsbDeviceDongleVersion();
    },
    onNanoUsbRemoteInfoStatusChanged(status) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbRemoteInfoStatusChanged-success-->>>>>' + JSON.stringify(status));
      }
      this.remoteVersion = ESNanoUsbVersionManager.getNanoUsbDeviceRemoteVersion();
    },
    onNanoUsbSNInfoStatusChanged(status) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '#------onNanoUsbSNInfoStatusChanged-success-->>>>>' + JSON.stringify(status));
      }
      this.sn = ESNanoUsbVersionManager.getNanoUsbDeviceSNCode();
    },
  }
};
</script>

<style>
</style>
