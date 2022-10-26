<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <text text="Animators执行顺序"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="playSequentially" @onButtonClicked="playSequentially"/>
        <text-button text="playTogether" @onButtonClicked="playTogether"/>
        <text-button text="with" @onButtonClicked="playWith"/>
        <text-button text="before" @onButtonClicked="playBefore"/>
        <text-button text="after" @onButtonClicked="playAfter"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <text text="以为Sequentially动画为例，操作Animators，首先点击'playSequentially'按钮，然后再执行以下按钮操作"></text>
      <div class="es-sdk-content-row-css">
        <text-button text="延迟2s开始Sequentially动画" @onButtonClicked="startAnimatorDelay"/>
        <text-button text="反转Sequentially动画" @onButtonClicked="reverseAnimator"/>
        <text-button text="暂停Sequentially动画" @onButtonClicked="pauseAnimator"/>
        <text-button text="恢复Sequentially动画" @onButtonClicked="resumeAnimator"/>
        <text-button text="取消Sequentially动画" @onButtonClicked="cancelAnimator"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
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
  ES_ANIMATION_PROPERTY_NAME_ALPHA,
  ES_ANIMATION_PROPERTY_NAME_ROTATION,
  ES_ANIMATION_PROPERTY_NAME_SCALE_X,
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ESLaunchManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: 'Animators',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    playSequentially() {
      //1.
      this.$refs.animation_view.animatorSet('SequentiallyAnimatorsId', -1, false);
      this.$refs.animation_view.objectAnimator2(
        "AlphaAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ALPHA,
        "0",
        "1",
        2000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "ScaleAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "2.5",
        2000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "RotationAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "300",
        2000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "TranslationAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "300",
        2000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.playSequentially4(
        'SequentiallyAnimatorsId',
        "AlphaAnimationId",
        "ScaleAnimationId",
        "RotationAnimationId",
        "TranslationAnimationId",
      );
      this.$refs.animation_view.startAnimator('SequentiallyAnimatorsId');
    },
    playTogether() {
      //1.
      this.$refs.animation_view.animatorSet('TogetherAnimatorsId', -1, false);
      this.$refs.animation_view.objectAnimator2(
        "AlphaAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ALPHA,
        "0",
        "1",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "ScaleAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "1.5",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "RotationAnimationId",//自定义id
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
      this.$refs.animation_view.objectAnimator2(
        "TranslationAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "300",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.playTogether4(
        'TogetherAnimatorsId',
        "AlphaAnimationId",
        "ScaleAnimationId",
        "RotationAnimationId",
        "TranslationAnimationId",
      );
      this.$refs.animation_view.startAnimator('TogetherAnimatorsId');
    },
    playWith() {
      //1.
      this.$refs.animation_view.animatorSet('WithAnimatorsId', -1, false);
      this.$refs.animation_view.objectAnimator2(
        "AlphaAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ALPHA,
        "0",
        "1",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "ScaleAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "1.5",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.play(
        'WithAnimatorsId',
        "AlphaAnimationId",
      );
      this.$refs.animation_view.with(
        'WithAnimatorsId',
        "ScaleAnimationId",
      );
      this.$refs.animation_view.startAnimator('WithAnimatorsId');
    },
    playBefore() {
      //1.
      this.$refs.animation_view.animatorSet('BeforeAnimatorsId', -1, false);
      this.$refs.animation_view.objectAnimator2(
        "TranslationAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "300",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "ScaleAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "1.5",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.play(
        'BeforeAnimatorsId',
        "TranslationAnimationId",
      );
      this.$refs.animation_view.before(
        'BeforeAnimatorsId',
        "ScaleAnimationId",
      );
      this.$refs.animation_view.startAnimator('BeforeAnimatorsId');
    },
    playAfter() {
      //1.
      this.$refs.animation_view.animatorSet('WidthAnimatorsId', -1, false);
      this.$refs.animation_view.objectAnimator2(
        "TranslationAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "300",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.objectAnimator2(
        "ScaleAnimationId",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "1.5",
        1000,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.play(
        'WidthAnimatorsId',
        "TranslationAnimationId",
      );
      this.$refs.animation_view.after(
        'WidthAnimatorsId',
        "ScaleAnimationId",
      );
      this.$refs.animation_view.startAnimator('WidthAnimatorsId');
    },
    startAnimatorDelay() {
      this.$refs.animation_view.startAnimatorDelay("SequentiallyAnimatorsId", 2000);
    },
    reverseAnimator() {
      this.$refs.animation_view.reverseAnimator("SequentiallyAnimatorsId");
    },
    pauseAnimator() {
      this.$refs.animation_view.pauseAnimator("SequentiallyAnimatorsId");
    },
    resumeAnimator() {
      this.$refs.animation_view.resumeAnimator("SequentiallyAnimatorsId");
    },
    cancelAnimator() {
      this.$refs.animation_view.cancelAnimator("SequentiallyAnimatorsId");
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
