<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <text
        text="RepeatMode：Defines what this animation should do when it reaches the end. This setting is applied only when the repeat count is either greater than 0 or INFINITE. Defaults to RESTART."/>
      <text
        text="RepeatCount：Sets how many times the animation should be repeated. If the repeat count is 0, the animation is never repeated. If the repeat count is greater than 0 or INFINITE, the repeat mode will be taken into account. The repeat count is 0 by default."/>
      <div class="es-sdk-content-row-css">
        <text-button text="Restart" @onButtonClicked="restartMode"/>
        <text-button text="Reverse" @onButtonClicked="reverseMode"/>
        <text-button text="Infinite" @onButtonClicked="infiniteMode"/>
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
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
  ES_ANIMATION_REPEAT_MODE_RESTART,
  ES_ANIMATION_REPEAT_MODE_REVERSE,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ESLaunchManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: 'AnimationRepeat',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    restartMode() {
      this.$refs.animation_view.objectAnimator5(
        "AnimationRestartRepeatMode",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "300",
        "0",
        "-300",
        "0",
        1000,
        ES_ANIMATION_REPEAT_MODE_RESTART,
        2,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("AnimationRestartRepeatMode");
    },
    reverseMode() {
      this.$refs.animation_view.objectAnimator5(
        "AnimationReverseRepeatMode",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "300",
        "0",
        "-300",
        "0",
        1000,
        ES_ANIMATION_REPEAT_MODE_REVERSE,
        2,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("AnimationReverseRepeatMode");
    },
    infiniteMode() {
      this.$refs.animation_view.objectAnimator5(
        "AnimationRepeatInfinite",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "300",
        "0",
        "-300",
        "0",
        1000,
        ES_ANIMATION_REPEAT_MODE_RESTART,
        -1,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("AnimationRepeatInfinite");
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
