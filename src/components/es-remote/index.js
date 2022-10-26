const es_nano_usb_ota_page = () => import("./es-nano-usb-ota-page");
const es_nano_usb_version_page = () => import("./es-nano-usb-version-page");
const es_nano_usb_page = () => import("./es-nano-usb-page");


const ESRemoteList = {
  es_nano_usb_page: {
    name: "获取设备信息",
    component: es_nano_usb_page,
  },
  es_nano_usb_version_page: {
    name: "获取设备版本",
    component: es_nano_usb_version_page,
  },
  es_nano_usb_ota_page: {
    name: "固件升级",
    component: es_nano_usb_ota_page,
  },
};
export default ESRemoteList;
