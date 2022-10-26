<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="es_video_player"
      class="es-video-player-css"
      :on-duration-changed-callback="onDurationChanged"
      :on-progress-changed-callback="onProgressChanged"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerCompleted="onPlayerCompleted"/>
    <title class="es-sdk-content-title-css" :text="this.$options.name" style="background-color: white"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="background-color: white">
      <div class="es-sdk-content-row-css">
        <text :text="'当前进度' + progress"></text>
      </div>
      <div class="es-sdk-content-row-css">
        <text :text="'总时长' + duration"></text>
      </div>
      <div class="es-sdk-content-row-css">
        <text :text="seekBarStatus"></text>
      </div>
      <seek-bar
        ref="seek_bar"
        :focusable="true"
        :corner-radius="8"
        :background-color="backgroundColor"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        :on-progress-changed="onSeekBarProgressChanged"
        @onSeekStop="onSeekStop"
        @onSeekStart="onSeekStart"
        class="es-seek-bar-css"/>
    </div>
  </div>
</template>

<script>
import {ESLaunchManager, ESPage, KEYCODE_DPAD_LEFT, KEYCODE_DPAD_RIGHT} from "@extscreen/es-core";
import {ESLog} from "@extscreen/es-log";
import {ESVideoPlayer} from "@extscreen/es-video-player";

const TAG = 'PlayerSeekBar'

export default {
  name: 'SeekBar && 播放',
  mixins: [ESPage],
  data() {
    return {
      secondaryColor: '#54D00C',
      backgroundColor: '#7415B1',
      primaryColor: {
        startColor: '#FFD900',
        endColor: '#54D00C'
      },
      duration: 0,
      progress: 0,

      durationTimer: null,
      progressTimer: null,

      seekBarStatus: '状态',
    };
  },
  methods: {
    onESCreate(params) {
      this.initPlayer();
    },
    onKeyDown(keyEvent) {
      if (keyEvent.keyCode === KEYCODE_DPAD_LEFT || keyEvent.keyCode === KEYCODE_DPAD_RIGHT) {
        //
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
    onSeekBarProgressChanged(progress) {
      this.progress = progress;
    },
    onSeekStart() {
      this.seekBarStatus = '开始快进';
      this.stopDurationTimer();
    },
    onSeekStop(progress) {
      this.seekBarStatus = '快进结束';
      this.$refs.es_video_player.seekTo(progress);
    },
    //-------------------------------------------------------
    onPlayerInitialized(playerType) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, this.$refs.es_video_player.getPlayer()
          + '-----onPlayerInitialized------>>>>' + playerType);
      }
      this.playVideo();
    },
    playVideo() {
      let url = {
        url: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/data_center/videos/SHORT/DEFAULT/2022/09/30/4998e703-fcb3-4046-935b-1519ba9523dc.mp4',
      }
      let urls = {
        urlIndex: 0,
        urlList: [url],
      }
      this.$refs.es_video_player.playUrls(urls, {});
      this.$refs.es_video_player.start();
    },
    initPlayer() {
      this.$refs.es_video_player.initializePlayer();
    },
    onPlayerPlaying() {
      this.startProgressTimer();
      this.getDuration();
    },
    onPlayerStopped() {
      this.stopProgressTimer();
    },
    onPlayerCompleted() {
      this.stopProgressTimer();
    },
    onProgressChanged(progress) {
      this.progress = progress;
      this.$refs.seek_bar.setProgress(progress);
    },
    onDurationChanged(duration) {
      this.duration = duration;
      this.$refs.seek_bar.setMaxProgress(duration);
    },
    getDuration() {
      if (!this.$refs.es_video_player) {
        return;
      }
      let d = this.$refs.es_video_player.getDuration();
      if (d) {
        if (d < 0) {
          this.duration = 0;
        } else {
          this.duration = d;
        }
        if (ESLog.isLoggable(ESLog.DEBUG)) {
          ESLog.d(TAG, this.$refs.es_video_player + '-----getDuration------>>>>' + this.duration);
        }
      }
    },
    getCurrentPosition() {
      if (!this.$refs.es_video_player) {
        return;
      }
      let p = this.$refs.es_video_player.getCurrentPosition();
      if (p) {
        if (p < 0) {
          this.progress = 0;
        } else {
          this.progress = p;
        }
        if (ESLog.isLoggable(ESLog.DEBUG)) {
          ESLog.d(TAG, this.$refs.es_video_player + '-----getCurrentPosition------>>>>' + this.progress);
        }
      }
    },
    startDurationTimer() {
      this.stopDurationTimer()
      this.durationTimer = setInterval(() => {
        this.getDuration();
      }, 500);
    },
    stopDurationTimer() {
      clearInterval(this.durationTimer);
    },
    startProgressTimer() {
      this.stopProgressTimer()
      this.progressTimer = setInterval(() => {
        this.getCurrentPosition();
      }, 500);
    },
    stopProgressTimer() {
      clearInterval(this.progressTimer);
    },
    onBackPressed() {
      this.$refs.es_video_player.stop();
      this.$refs.es_video_player.release();
      ESLaunchManager.finishESPage();
    },
  },
  components: {
    'es-video-player': ESVideoPlayer,
  }
};
</script>

<style>
.es-seek-bar-css {
  width: 1200px;
  height: 40px;
  border-radius: 0;
}

.es-video-player-css {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
