<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text :text="seekBarStatus"></text>
        <text :text="progress"></text>
      </div>
      <seek-bar
        ref="seek_bar"
        :focusable="true"
        :corner-radius="8"
        :background-color="backgroundColor"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        :on-progress-changed="onProgressChanged"
        @onSeekStop="onSeekStop"
        @onSeekStart="onSeekStart"
        class="es-seek-bar-css"/>
    </div>
  </div>
</template>

<script>
import {ESPage, KEYCODE_DPAD_LEFT, KEYCODE_DPAD_RIGHT} from "@extscreen/es-core";

export default {
  name: '使用初探',
  mixins: [ESPage],
  data() {
    return {
      secondaryColor: '#54D00C',
      backgroundColor: '#7415B1',
      primaryColor: {
        startColor: '#FFD900',
        endColor: '#54D00C'
      },
      duration: 100,
      progress: 0,
      seekBarStatus: '',
    };
  },
  methods: {
    onESCreate(params) {
      this.$refs.seek_bar.setProgress(40);
      this.$refs.seek_bar.setMaxProgress(100);
    },
    onKeyDown(keyEvent) {
      if (keyEvent.keyCode === KEYCODE_DPAD_LEFT || keyEvent.keyCode === KEYCODE_DPAD_RIGHT) {
        if (this.$refs.seek_bar.isFocused()) {
          this.$refs.seek_bar.startSeek(keyEvent.keyCode === KEYCODE_DPAD_RIGHT);
        }
      }
    },
    onKeyUp(keyEvent) {
      if (keyEvent.keyCode === KEYCODE_DPAD_LEFT || keyEvent.keyCode === KEYCODE_DPAD_RIGHT) {
        this.$refs.seek_bar.stopSeek();
      }
    },
    onProgressChanged(progress) {
      this.progress = progress;
    },
    onSeekStart() {
      this.seekBarStatus = '开始快进';
    },
    onSeekStop(progress) {
      this.seekBarStatus = '快进结束';
    },
  }
};
</script>

<style>
.es-seek-bar-css {
  width: 1200px;
  height: 40px;
  border-radius: 0;
}
</style>
