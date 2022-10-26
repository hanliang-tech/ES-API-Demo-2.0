<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <text text="listenAnimator监听动画状态变化  listenAnimatorValue监听动画值的变化"></text>
      <text :text="'动画状态：' + animationStatus"></text>
      <text :text="'动画值：' + animationValue"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="创建并开始动画" @onButtonClicked="init"/>
        <text-button text="反转动画" @onButtonClicked="reverseAnimator"/>
        <text-button text="暂停动画" @onButtonClicked="pauseAnimator"/>
        <text-button text="恢复动画" @onButtonClicked="resumeAnimator"/>
        <text-button text="取消动画" @onButtonClicked="cancelAnimator"/>
        <text-button text="重置所有动画" @onButtonClicked="resetAnimators"/>
      </div>
      <es-animation-view
        ref="animation_view"
        class="animation-view-css"
        @onAnimationCancel="onAnimationCancel"
        @onAnimationEnd="onAnimationEnd"
        @onAnimationStart="onAnimationStart"
        @onAnimationRepeat="onAnimationRepeat"
        @onAnimationPause="onAnimationPause"
        @onAnimationResume="onAnimationResume"
        @onAnimationUpdate="onAnimationUpdate">
        <div class="animation-inner-view-css"/>
      </es-animation-view>
    </div>
  </div>
</template>

<script>
import {
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ESLaunchManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: 'AnimationListener',
  mixins: [ESPage],
  data() {
    return {
      animationStatus: '重置',
      animationValue: '-1',
    };
  },
  methods: {
    init() {
      this.$refs.animation_view.objectAnimator5(
        "AnimationListener",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "500",
        "0",
        "-500",
        "0",
        10000,
        -1,
        0,
        true,//listenAnimator
        true,//listenAnimatorValue
        null,
      );
      this.$refs.animation_view.startAnimator("AnimationListener");
    },
    onAnimationCancel(id) {
      this.animationStatus = 'onAnimationCancel';
    },
    onAnimationEnd(id, isReverse) {
      this.animationStatus = 'onAnimationEnd';
    },
    onAnimationRepeat(id) {
      this.animationStatus = 'onAnimationRepeat';
    },
    onAnimationStart(id, isReverse) {
      this.animationStatus = 'onAnimationStart';
    },
    onAnimationPause(id) {
      this.animationStatus = 'onAnimationPause';
    },
    onAnimationResume(id) {
      this.animationStatus = 'onAnimationResume';
    },
    onAnimationUpdate(id, value) {
      this.animationValue = value;
    },
    reverseAnimator() {
      this.$refs.animation_view.reverseAnimator("AnimationListener");
    },
    pauseAnimator() {
      this.$refs.animation_view.pauseAnimator("AnimationListener");
    },
    resumeAnimator() {
      this.$refs.animation_view.resumeAnimator("AnimationListener");
    },
    cancelAnimator() {
      this.$refs.animation_view.cancelAnimator("AnimationListener");
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
