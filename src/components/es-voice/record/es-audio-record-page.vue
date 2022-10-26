<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <text :text="'录音状态：' + recordStatus"/>
      <text :text="'录音状态值：' + recordStatusValue"/>
      <div class="es-sdk-content-row-css">
        <text-button text="初始化默认MP3格式" @onButtonClicked="initDefaultRecord"/>
        <text-button text="开始录音" @onButtonClicked="startRecord"/>
        <text-button text="停止录音" @onButtonClicked="stopRecord"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage, KEYCODE_SEARCH} from "@extscreen/es-core";
import {
  ESAudioRecord,
  ESAudioRecordManager,
  ESAudioRecordPermissionManager
} from "@extscreen/es-audio-record";

const TAG = 'ESAudioRecord'

export default {
  name: "录音",
  mixins: [ESPage, ESAudioRecord],
  data() {
    return {
      recordStatus: '-',
      recordStatusValue: '-',
    }
  },
  methods: {
    onESCreate(params) {
      ESAudioRecordManager.init().then(
        () => {
        },
        error => {
        }
      );
    },
    initDefaultRecord() {
      ESAudioRecordManager.initDefaultAudioRecorder();
    },
    startRecord() {
      ESAudioRecordManager.startRecord();
    },
    stopRecord() {
      ESAudioRecordManager.stopRecord();
    },
    //--------------------------------------------------
    onAudioRecorderStatusNotInit(status) {
      this.recordStatus = 'onAudioRecorderStatusNotInit';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusReady(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusReady';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusStart(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusStart';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusStop(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusStop';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusCancel(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusCancel';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusSuccess(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusSuccess';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderStatusError(status) {
      this.recordStatus = this.recordStatus + '-->onAudioRecorderStatusError';
      this.recordStatusValue = JSON.stringify(status);
    },
    onAudioRecorderVolumeChanged(status) {
    },
    onKeyDown(key) {
      if (key.keyCode === KEYCODE_SEARCH || key.keyCode === 73) {
        if (!ESAudioRecordPermissionManager.isAudioRecordPermissionsGranted()) {
          ESAudioRecordPermissionManager.requestAudioRecordPermissions();
          return;
        }
        this.startRecord();
      }
    },
    onKeyUp(key) {
      if (key.keyCode === KEYCODE_SEARCH || key.keyCode === 73) {
        this.stopRecord();
      }
    },
  }
}
</script>
<style>
</style>
