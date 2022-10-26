<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="开发信息模块用来获取开发相关设备信息"></text>
      <text :text="'androidAPILevel：' + androidAPILevel + '   buildSDKVersion：' + buildSDKVersion"></text>
      <text :text="'totalMemory：' + totalMemory + '   availMemory：' + availMemory"></text>
      <text :text="'screenWidth：' + screenWidth + '   screenHeight：' + screenHeight"></text>
      <text :text="'windowWidth：' + windowWidth + '   windowHeight：' + windowHeight"></text>
      <text :text="'totalStore：' + totalStore + '   freeStore：' + freeStore"></text>
      <text :text="'deviceEthMac：' + deviceEthMac + '   deviceWifiMac：' + deviceWifiMac"></text>
      <text :text="'blueToothName：' + blueToothName + '   ipAddress：' + ipAddress"></text>

      <text :text="'resolution：' + resolution + '   density：' + density +
      '   densityDpi：' + densityDpi + '   scaledDensity：' + scaledDensity"></text>

      <text :text="'buildVersionRelease：' + buildVersionRelease + '   buildManufacturer：' + buildManufacturer"></text>
      <text :text="'buildSerial：' + buildSerial + '   buildModel：' + buildModel"></text>
      <text :text="'buildBrand：' + buildBrand + '   buildDevice：' + buildDevice"></text>
      <text :text="'buildProduct：' + buildProduct + '   buildHardware：' + buildHardware"></text>

    </div>
  </div>
</template>

<script>
import {ESDeviceManager, ESPage} from "@extscreen/es-core";

export default {
  name: "设备信息模块",
  mixins: [ESPage],
  data() {
    return {
      totalMemory: 0,
      availMemory: 0,

      screenWidth: 0,
      screenHeight: 0,

      windowWidth: 0,
      windowHeight: 0,

      androidAPILevel: -1,

      deviceEthMac: '',
      deviceWifiMac: '',

      buildManufacturer: '',
      buildVersionRelease: '',
      buildModel: '',
      buildBrand: '',
      buildDevice: '',
      buildProduct: '',
      buildHardware: '',
      buildSDKVersion: -1,

      blueToothName: '',
      ipAddress: '',

      buildSerial: '',

      resolution: '',
      density: '',
      densityDpi: '',
      scaledDensity: '',

      totalStore: '',
      freeStore: '',
    }
  },
  methods: {
    onESCreate(params) {
      ESDeviceManager.init().then(
        () => {
          this.totalMemory = ESDeviceManager.getDeviceTotalMemory();
          this.availMemory = ESDeviceManager.getDeviceAvailMemory();

          this.screenWidth = ESDeviceManager.getScreenWidth();
          this.screenHeight = ESDeviceManager.getScreenHeight();

          this.windowWidth = ESDeviceManager.getWindowWidth();
          this.windowHeight = ESDeviceManager.getWindowHeight();

          this.androidAPILevel = ESDeviceManager.getAndroidAPILevel();

          this.deviceEthMac = ESDeviceManager.getDeviceEthMac();
          this.deviceWifiMac = ESDeviceManager.getDeviceWifiMac();

          this.buildManufacturer = ESDeviceManager.getBuildManufacturer();
          this.buildVersionRelease = ESDeviceManager.getBuildVersionRelease();
          this.buildModel = ESDeviceManager.getBuildModel();
          this.buildBrand = ESDeviceManager.getBuildBrand();
          this.buildDevice = ESDeviceManager.getBuildDevice();
          this.buildProduct = ESDeviceManager.getBuildProduct();
          this.buildHardware = ESDeviceManager.getBuildHardware();
          this.buildSDKVersion = ESDeviceManager.getBuildSDKVersion();
          this.buildSerial = ESDeviceManager.getBuildSerial();

          this.blueToothName = ESDeviceManager.getBlueToothName();
          this.ipAddress = ESDeviceManager.getIpAddress();

          this.resolution = ESDeviceManager.getResolution();
          this.density = ESDeviceManager.getDensity();
          this.densityDpi = ESDeviceManager.getDensityDpi();
          this.scaledDensity = ESDeviceManager.getScaledDensity();

          this.totalStore = ESDeviceManager.getTotalStore();
          this.freeStore = ESDeviceManager.getFreeStore();
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
