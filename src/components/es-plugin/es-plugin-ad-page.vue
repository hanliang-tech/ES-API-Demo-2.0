<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text :text="'安装状态：' + installStatus"></text>
      <text-button text="安装广告插件" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>
import {ESPage, ESPlugin, ESPluginManager} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";

const TAG = 'ESPlugin'

export default {
  name: '广告插件',
  mixins: [ESPage, ESPlugin],
  data() {
    return {
      installStatus: '-',
    };
  },
  methods: {
    onESPluginInstallProgress(pkg, status, current, total) {
      this.installStatus = 'onESPluginInstallProgress';
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESPluginInstallProgress------>>>>>" +
          "pkg:" + pkg + "--status:" + status + '--->current:' + current + '--->total:' + total)
      }
    },

    onESPluginInstallSuccess(pkg, status, msg) {
      this.installStatus = 'onESPluginInstallSuccess';
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESPluginInstallSuccess------>>>>>pkg:" + pkg + "--status:" + status + '--->msg:' + msg)
      }

    },

    onESPluginInstallError(pkg, status, msg) {
      this.installStatus = 'onESPluginInstallError';
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "----onESPluginInstallError------>>>>>pkg:" + pkg + "--status:" + status + '--->msg:' + msg)
      }

    },
    onButtonClicked() {
      ESPluginManager.install([
        {pkg: 'eskit.plugin.ad.huan'}
      ])
    }
  }
};
</script>

<style>
</style>
