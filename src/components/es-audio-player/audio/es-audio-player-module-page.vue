<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="初始化" @onButtonClicked="initAudio"/>
      <text-button text="播放" @onButtonClicked="playAudio"/>
      <text-button text="开始" @onButtonClicked="startAudio"/>
      <text-button text="暂停" @onButtonClicked="pauseAudio"/>
      <text-button text="停止" @onButtonClicked="stopAudio"/>
      <text-button text="快进" @onButtonClicked="seekAudio"/>
      <text-button text="倍速" @onButtonClicked="speedAudio"/>
    </div>
  </div>
</template>

<script>
import { ESLaunchManager, ESPage } from '@extscreen/es-core';
import { ESAudioPlayerMixin, ESAudioPlayerModule } from '@extscreen/es-audio-player';
import { ESLog } from '@extscreen/es-log';
import {
  ES_PLAYER_STATE_ERROR,
  ES_PLAYER_STATE_PAUSED,
  ES_PLAYER_STATE_PLAYBACK_COMPLETED, ES_PLAYER_STATE_PREPARED,
  ES_PLAYER_STATE_STOP
} from '@extscreen/es-player';

const TAG = 'TEST_MEDIA_PLAYER';
export default {
  name: 'AudioPlayerModule',
  mixins: [ESPage, ESAudioPlayerMixin],
  methods: {
    initAudio() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '------initAudio----->>>');
      }
      ESAudioPlayerModule.init();
      // let url1 = 'http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/absolute_music_set_out.mp3';
      // let url2 = 'http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/500years.mp3';
      // ESAudioPlayerModule.play(url1);
    },
    playAudio() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----playAudio----->>>');
      }
      let url1 = 'http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/absolute_music_set_out.mp3';
      let url2 = 'http://qcloudimg-moss.cp47.ott.cibntv.net/channelzero/video/music/500years.mp3';
      ESAudioPlayerModule.play(url1);
    },
    startAudio() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----startAudio----->>>');
      }
      ESAudioPlayerModule.start();
    },
    pauseAudio() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----pauseAudio----->>>');
      }
      ESAudioPlayerModule.pause();
    },
    stopAudio() {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '----stopAudio----->>>');
      }
      ESAudioPlayerModule.stop();
      ESAudioPlayerModule.release();
    },
    seekAudio() {
      ESAudioPlayerModule.seekTo(2000);
    },
    speedAudio() {
      ESAudioPlayerModule.setPlayRate(2);
    },//------------------------------------------------
    onPlayerStatusChanged(event) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerStatusChanged----->>>' + JSON.stringify(event));
      }
      switch (event.playerStatus) {
        case ES_PLAYER_STATE_PREPARED: {
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----ES_PLAYER_STATE_PAUSED----->>>' + JSON.stringify(event));
          }
          ESAudioPlayerModule.start();
          break;
        }
        case ES_PLAYER_STATE_PAUSED: {
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----ES_PLAYER_STATE_PAUSED----->>>' + JSON.stringify(event));
          }
          break;
        }
        case ES_PLAYER_STATE_STOP: {
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----ES_PLAYER_STATE_STOP----->>>' + JSON.stringify(event));
          }
          break;
        }
        case ES_PLAYER_STATE_PLAYBACK_COMPLETED: {
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----ES_PLAYER_STATE_PLAYBACK_COMPLETED----->>>' + JSON.stringify(event));
          }
          break;
        }
        case ES_PLAYER_STATE_ERROR: {
          if (ESLog.isLoggable(ESLog.DEBUG)) {
            ESLog.d(TAG, '-----ES_PLAYER_STATE_ERROR----->>>' + JSON.stringify(event));
          }
          break;
        }
      }
    },
    onPlayerError(event) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, '-----onPlayerError----->>>' + JSON.stringify(event));
      }
    },
    //------------------------------------------------
    onBackPressed() {
      this.stopAudio();
      ESLaunchManager.finishESPage();
    },
  },
  components: {}
};
</script>

<style scoped>
</style>
