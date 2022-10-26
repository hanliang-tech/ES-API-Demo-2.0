<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <div class="es-sdk-content-row-css">
        <text-button text="设置PivotX" @onButtonClicked="setPivotX"/>
        <text-button text="设置PivotY" @onButtonClicked="setPivotY"/>
        <text-button text="重置Pivot" @onButtonClicked="resetPivot"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="创建并开始2参动画" @onButtonClicked="initTwo"/>
        <text-button text="创建并开始3参动画" @onButtonClicked="initThree"/>
        <text-button text="创建并开始4参动画" @onButtonClicked="initFour"/>
        <text-button text="延迟2s开始5参动画" @onButtonClicked="startAnimatorDelay"/>
        <text-button text="重置所有动画" @onButtonClicked="resetAnimators"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="创建并开始10参动画" @onButtonClicked="initN"/>
        <text-button text="反转10参动画" @onButtonClicked="reverseAnimator"/>
        <text-button text="暂停10参动画" @onButtonClicked="pauseAnimator"/>
        <text-button text="恢复10参动画" @onButtonClicked="resumeAnimator"/>
        <text-button text="取消10参动画" @onButtonClicked="cancelAnimator"/>
      </div>
      <es-animation-view
        ref="animation_view"
        class="animation-view-css">
        <div class="animation-inner-view-css"/>
      </es-animation-view>
    </div>
  </div>
</template>

<script>
import {
  ES_ANIMATION_PROPERTY_NAME_ROTATION,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ESLaunchManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: 'RotationAnimation',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    initTwo() {
      this.$refs.animation_view.objectAnimator2(
        "2",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "30",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("2");
    },
    initThree() {
      this.$refs.animation_view.objectAnimator3(
        "3",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "30",
        "60",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("3");
    },
    initFour() {
      this.$refs.animation_view.objectAnimator4(
        "4",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "30",
        "60",
        "360",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("4");
    },
    initN() {
      this.$refs.animation_view.objectAnimator10(
        "n",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "30",
        "60",
        "360",
        "0",
        "30",
        "60",
        "360",
        "60",
        "360",
        10000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("n");
    },
    startAnimatorDelay() {
      this.$refs.animation_view.objectAnimator5(
        "5",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "30",
        "60",
        "360",
        "60",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimatorDelay("5", 2000);
    },
    setPivotX() {
      this.$refs.animation_view.setPivotX(0);
    },
    setPivotY() {
      this.$refs.animation_view.setPivotY(200);
    },
    resetPivot() {
      this.$refs.animation_view.resetPivot();
    },
    reverseAnimator() {
      this.$refs.animation_view.reverseAnimator("n");
    },
    pauseAnimator() {
      this.$refs.animation_view.pauseAnimator("n");
    },
    resumeAnimator() {
      this.$refs.animation_view.resumeAnimator("n");
    },
    cancelAnimator() {
      this.$refs.animation_view.cancelAnimator("n");
    },
    resetAnimators() {
      this.$refs.animation_view.resetAnimators();
    },
    onBackPressed() {
      this.resetAnimators();
      ESLaunchManager.finishESPage();
    },
  }
};
</script>

<style src="./css/es-animation-css.css">
</style>
