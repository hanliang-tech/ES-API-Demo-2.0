<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text text="网络模块用来获取网络信息"></text>
      <text :text="'网络连接状态：' + isNetworkConnected + '   网络连接类型：' + networkType"></text>
      <text v-for="(item, index) in activeNetworkInfo" :key="item.key"
            :text="item.key + '：' + item.value"></text>
    </div>
  </div>
</template>

<script>
import {
  ES_NETWORK_INFO_TYPE_ETHERNET,
  ES_NETWORK_INFO_TYPE_MOBILE,
  ES_NETWORK_INFO_TYPE_NONE,
  ES_NETWORK_INFO_TYPE_WIFI,
  ESNetwork,
  ESNetworkManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: "网络模块",
  // ESNetwork用来监听网络状态变化
  mixins: [ESPage, ESNetwork],
  data() {
    return {
      activeNetworkInfo: [],
      isNetworkConnected: '',
      networkType: -1,
    }
  },
  methods: {
    onESCreate(params) {
      this.initNetworkInfo();
    },

    initNetworkInfo() {
      let activeNetworkInfo = ESNetworkManager.getActiveNetworkInfo();
      this.activeNetworkInfo = Object.keys(activeNetworkInfo).map(key => ({
        key: key,
        value: activeNetworkInfo[key],
      }))
      let isNetworkConnected = ESNetworkManager.isNetworkConnected();
      if (isNetworkConnected) {
        this.isNetworkConnected = '连接网络'
      } else {
        this.isNetworkConnected = '断开网络'
      }
      let networkType = ESNetworkManager.getNetworkType();
      switch (networkType) {
        case ES_NETWORK_INFO_TYPE_NONE:
          this.networkType = "无网络"
          break;
        case ES_NETWORK_INFO_TYPE_MOBILE:
          this.networkType = "移动网络"
          break;
        case ES_NETWORK_INFO_TYPE_WIFI:
          this.networkType = "WIFI网络"
          break;
        case ES_NETWORK_INFO_TYPE_ETHERNET:
          this.networkType = "有线网络"
          break;
      }
    },
    /**
     * 网络状态变化
     */
    onESConnectivityChanged() {
      this.initNetworkInfo();
    },
  }
}
</script>
<style>
</style>
