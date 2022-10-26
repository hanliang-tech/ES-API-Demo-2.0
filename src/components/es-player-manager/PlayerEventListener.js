import {ESBasePlayerEventListener} from "@extscreen/es-player";
import {ESLog} from "@extscreen/es-log";

const TAG = "PlayerEvent";

class PlayerEventListener extends ESBasePlayerEventListener {

  getId() {
    return 'PlayerEventListener';
  }

  onVideoPlayerPlayInfo(playInfo) {
    //自定义操作
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----onVideoPlayerPlayInfo------>>>>' + JSON.stringify(playInfo));
    }
  }

  onVideoPlayerPlaySeries(series) {
    //自定义操作
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----onVideoPlayerPlaySeries------>>>>' + JSON.stringify(series));
    }
  }

  onVideoPlayerPlaying() {
    //自定义操作
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----onVideoPlayerPlaying------>>>>');
    }
  }

  onVideoPlayerStopped() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----onVideoPlayerStopped------>>>>');
    }
  }

  onVideoPlayerCompleted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '----onVideoPlayerCompleted------>>>>');
    }
  }

  //...覆写其他方法
}

export default new PlayerEventListener();
