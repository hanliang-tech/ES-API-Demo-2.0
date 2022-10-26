<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">ESDownloadModule</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <div class="index_root_content_row_css">
        <text text="下载状态:"/>
        <text :text="downloadStatus"/>
        <text text="|"/>
        <text text="文件总长度:"/>
        <text :text="totalSize"/>
        <text text="|"/>
        <text text="下载文件长度:"/>
        <text :text="downloadSize"/>
      </div>
      <div class="index_root_content_row_css">
        <text-button text="初始化下载" @onButtonClicked="initDownloadModule"/>
        <text-button text="下载" @onButtonClicked="downloadFile"/>
        <text-button text="开始" @onButtonClicked="startDownload"/>
        <text-button text="停止" @onButtonClicked="stopDownload"/>
        <text-button text="取消" @onButtonClicked="cancelDownload"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import {ESDownloadModule, ESDownloadMixin} from "@extscreen/es-downloader-module";
import {ESBackPressMixin, ESKeyEventMixin, ESLaunchManager, ESLifecycleMixin} from "@extscreen/es-core";

const TAG = "TEST_DOWNLOAD";
export default {
  name: 'test_download_module',
  mixins: [ESDownloadMixin, ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin],
  data() {
    return {
      downloadSize: "0",
      totalSize: "0",
      downloadStatus: "重置",
      download: {
        id: "1",
        fileUrl: 'http://qcloudcdn-moss.cp47.ott.cibntv.net/project/tvq/qsj_video/2021/12/07/3800609_9c0bae6b6d5df502ffa28f9396a2316e.mp4',
        fileMD5: '6f6bc0aa03aeec7ae8cdf23edc511fcf',
        fileName: 'a.mp4'
      }
    };
  },
  mounted() {
  },
  methods: {
    initDownloadModule() {
      ESDownloadModule.initDefault();
    },
    downloadFile() {
      ESDownloadModule.download(this.download)
    },
    startDownload() {
      ESDownloadModule.start(this.download)
    },
    stopDownload() {
      ESDownloadModule.stop(this.download)
    },
    cancelDownload() {
      ESDownloadModule.cancel(this.download)
    },
    //----------------------------------
    onDownloadInit(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadInit----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载初始化"
    },
    onDownloadStart(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadStart----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载开始"
    },
    onDownloadStop(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadStop----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载停止"
    },
    onDownloadCancel(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadCancel----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载取消"
    },
    onDownloadSuccess(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadSuccess----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载成功"
    },
    onDownloadError(download) {
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadError----->>>" + JSON.stringify(download))
      }
      this.downloadStatus = "下载失败"
    },
    onDownloadProgress(download, downloadSize, totalSize) {
      this.downloadStatus = "正在下载"
      this.downloadSize = downloadSize + "";
      this.totalSize = totalSize + "";
      if (ESLog.isLoggable(ESLog.DEBUG)) {
        ESLog.d(TAG, "------onDownloadProgress----->>>"
          + JSON.stringify(download)
          + "---->>>downloadSize:" + downloadSize
          + "---->>>totalSize:" + totalSize
        )
      }
    },
    onBackPressed() {
      ESLaunchManager.finishESPage();
    }
  },
  components: {}
};
</script>

<style scoped>

.sample_index_root_view_css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.index_root_content_css {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.index_root_content_row_css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 1920px;
}

.index_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

</style>
