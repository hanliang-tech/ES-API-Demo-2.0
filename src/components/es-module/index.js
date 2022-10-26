import es_app_module_page from './es-app-module-page';
import es_develop_module_page from './es-develop-module-page';
import es_device_module_page from './es-device-module-page';
import es_file_module_page from './es-file-module-page';
import es_module_page from './es-module-page';
import es_network_module_page from './es-network-module-page';
import es_permission_module_page from './es-permission-module-page';
import es_power_module_page from './es-power-module-page';
import es_sp_module_page from './es-sp-module-page';
import es_storage_module_page from './es-storge-module-page';
import es_toast_module_page from './es-toast-module-page';
import es_usb_module_page from './es-usb-module-page';
import es_runtime_module_page from './es-runtime-module-page';
import es_download_module_page from './es-download-module-page';
import es_upload_module_page from './es-upload-module-page';
import es_audio_module_page from './es-audio-module-page';

const ESModulePageList = {
  es_module_page: {
    name: 'ES模块',
    component: es_module_page,
  },
  es_runtime_module_page: {
    name: '运行时模块',
    component: es_runtime_module_page,
  },
  es_develop_module_page: {
    name: '开发信息模块',
    component: es_develop_module_page,
  },
  es_device_module_page: {
    name: '设备信息模块',
    component: es_device_module_page,
  },
  es_network_module_page: {
    name: '网络模块',
    component: es_network_module_page,
  },
  es_sp_module_page: {
    name: '共享存储模块',
    component: es_sp_module_page,
  },
  es_storage_module_page: {
    name: '设备存储模块',
    component: es_storage_module_page,
  },
  es_toast_module_page: {
    name: 'Toast模块',
    component: es_toast_module_page,
  },
  es_usb_module_page: {
    name: 'Usb设备模块',
    component: es_usb_module_page,
  },
  es_power_module_page: {
    name: '电源模块',
    component: es_power_module_page,
  },
  es_permission_module_page: {
    name: '权限模块',
    component: es_permission_module_page,
  },
  es_app_module_page: {
    name: '应用列表模块',
    component: es_app_module_page,
  },
  es_download_module_page: {
    name: '下载模块',
    component: es_download_module_page,
  },
  es_upload_module_page: {
    name: '上传模块',
    component: es_upload_module_page,
  },
  es_audio_module_page: {
    name: '音量管理模块',
    component: es_audio_module_page,
  },
  es_file_module_page: {
    name: '文件模块',
    component: es_file_module_page,
  },
};

export default ESModulePageList;
