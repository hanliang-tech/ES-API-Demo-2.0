<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script>
import {
  ESApplication, ESLaunchManager, ESManager, ESToast,
} from '@extscreen/es-core';
import ESAudioManager from "../packages/ESCore/module/audio/ESAudioManager";
import {ESLog} from "@extscreen/es-log";
import {ESPlayerInitManager} from "@extscreen/es-player";
import {RuntimeDeviceManager} from "@extscreen/es-runtime";

const TAG = 'ESApp'

export default {
  name: 'ESApp',
  mixins: [
    ESApplication
  ],
  methods: {
    onESCreate(props) {
      ESToast.showToast(JSON.stringify(props.url))
      ESLog.setMinimumLoggingLevel(ESLog.VERBOSE);
      // ESLaunchManager.setESRouterEnabled(false)
      return Promise.resolve()
        .then(() => RuntimeDeviceManager.init())
        .then(() => ESPlayerInitManager.init({
          deviceType: RuntimeDeviceManager.getDeviceType()
        }))
        .then(() => ESAudioManager.init())
        .then(() => this.initPromise())
    },
    initPromise() {
      return new Promise((resolve, reject) => {
        let v = ESManager.getESSDKVersionCode()
        let support = ESLaunchManager.isESPageRouterViewSupported()
        resolve(true);
      })
    }
  },
};
</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
