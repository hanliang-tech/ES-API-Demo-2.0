<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-button text="getBoolean" @onButtonClicked="getBoolean"/>
      <text-button text="putBoolean" @onButtonClicked="putBoolean"/>
      <text-button text="getInt" @onButtonClicked="getInt"/>
      <text-button text="putInt" @onButtonClicked="putInt"/>
      <text-button text="getLong" @onButtonClicked="getLong"/>
      <text-button text="putLong" @onButtonClicked="putLong"/>
      <text-button text="getString" @onButtonClicked="getString"/>
      <text-button text="putString" @onButtonClicked="putString"/>
    </div>
  </div>
</template>

<script>
import {ESPage, ESSharedPreferencesManager, ESToast} from "@extscreen/es-core";

export default {
  name: "共享存储模块",
  mixins: [ESPage],
  methods: {
    onESCreate(params) {
      //1.初始化
      ESSharedPreferencesManager.init()
        //2.设置存储名称
        .then(() => ESSharedPreferencesManager.initSharedPreferences("demo"))
        .then(
          () => {
          },
          error => {
          })
    },
    getBoolean() {
      ESSharedPreferencesManager.getBoolean('boolean_key', false)
        .then(
          (value) => {
            ESToast.showToast("getBoolean：" + value);
          },
          error => {
          }
        );
    },
    putBoolean() {
      ESSharedPreferencesManager.putBoolean('boolean_key', true)
        .then(
          () => {
          },
          error => {
          }
        );
    },
    getInt() {
      ESSharedPreferencesManager.getInt('int_key', -1)
        .then(
          (value) => {
            ESToast.showToast("getInt：" + value);
          },
          error => {
          }
        );
    },
    putInt() {
      ESSharedPreferencesManager.putInt('int_key', 10000)
        .then(
          () => {
          },
          error => {
          }
        );
    },
    getLong() {
      ESSharedPreferencesManager.getLong('long_key', 0)
        .then(
          (value) => {
            ESToast.showToast("getLong：" + value);
          },
          error => {
          }
        );
    },
    putLong() {
      ESSharedPreferencesManager.putLong('long_key', 10000000)
        .then(
          () => {
          },
          error => {
          }
        );
    },
    getString() {
      ESSharedPreferencesManager.getString('string_key', 'default string !')
        .then(
          (value) => {
            ESToast.showToast("getString：" + value);
          },
          error => {
          }
        );
    },
    putString() {
      ESSharedPreferencesManager.putString('string_key', 'hello es ~~~')
        .then(
          () => {
          },
          error => {
          }
        );
    },
  }
}
</script>
<style>
</style>
