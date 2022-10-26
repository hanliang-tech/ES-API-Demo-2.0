<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <div class="es-sdk-content-row-css">
        <text-button text="NullInterpolator" @onButtonClicked="nullInterpolator"/>
        <text-button text="AccelerateDecelerateInterpolator" @onButtonClicked="accelerateDecelerateInterpolator"/>
        <text-button text="AccelerateInterpolator" @onButtonClicked="accelerateInterpolator"/>
        <text-button text="AnticipateInterpolator" @onButtonClicked="anticipateInterpolator"/>
        <text-button text="AnticipateOvershootInterpolator" @onButtonClicked="anticipateOvershootInterpolator"/>
        <text-button text="BounceInterpolator" @onButtonClicked="bounceInterpolator"/>
        <text-button text="CycleInterpolator" @onButtonClicked="cycleInterpolator"/>
        <text-button text="DecelerateInterpolator" @onButtonClicked="decelerateInterpolator"/>
        <text-button text="LinearInterpolator" @onButtonClicked="linearInterpolator"/>
        <text-button text="OvershootInterpolator" @onButtonClicked="overshootInterpolator"/>
        <text-button text="FastOutLinearInInterpolator" @onButtonClicked="fastOutLinearInInterpolator"/>
        <text-button text="FastOutSlowInInterpolator" @onButtonClicked="fastOutSlowInInterpolator"/>
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
  ES_ACCELERATE_DECELERATE_INTERPOLATOR,
  ES_ACCELERATE_INTERPOLATOR,
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ES_ANTICIPATE_INTERPOLATOR,
  ES_ANTICIPATE_OVERSHOOT_INTERPOLATOR,
  ES_BOUNCE_INTERPOLATOR,
  ES_CYCLE_INTERPOLATOR,
  ES_DECELERATE_INTERPOLATOR,
  ES_FAST_OUT_LINEAR_IN_INTERPOLATOR,
  ES_FAST_OUT_SLOW_IN_INTERPOLATOR,
  ES_LINEAR_INTERPOLATOR,
  ES_OVERSHOOT_INTERPOLATOR,
  ESLaunchManager,
  ESPage
} from "@extscreen/es-core";

export default {
  name: 'AnimationInterpolator',
  mixins: [ESPage],
  data() {
    return {};
  },
  methods: {
    nullInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "NullInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        null,
      );
      this.$refs.animation_view.startAnimator("NullInterpolator");
    },
    accelerateDecelerateInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "AccelerateDecelerateInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_ACCELERATE_DECELERATE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("AccelerateDecelerateInterpolator");
    },
    accelerateInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "AccelerateInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_ACCELERATE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("AccelerateInterpolator");
    },

    anticipateInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "AnticipateInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_ANTICIPATE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("AnticipateInterpolator");
    },
    anticipateOvershootInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "AnticipateOvershootInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_ANTICIPATE_OVERSHOOT_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("AnticipateOvershootInterpolator");
    },
    bounceInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "BounceInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_BOUNCE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("BounceInterpolator");
    },
    cycleInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "CycleInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_CYCLE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("CycleInterpolator");
    },
    decelerateInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "DecelerateInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_DECELERATE_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("DecelerateInterpolator");
    },
    linearInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "LinearInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_LINEAR_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("LinearInterpolator");
    },
    overshootInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "OvershootInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_OVERSHOOT_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("OvershootInterpolator");
    },
    fastOutLinearInInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "FastOutLinearInInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_FAST_OUT_LINEAR_IN_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("FastOutLinearInInterpolator");
    },
    fastOutSlowInInterpolator() {
      this.$refs.animation_view.objectAnimator3(
        "FastOutSlowInInterpolator",//自定义id
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "500",
        '0',
        1500,
        -1,
        0,
        false,
        false,
        {
          type: ES_FAST_OUT_SLOW_IN_INTERPOLATOR,
        },
      );
      this.$refs.animation_view.startAnimator("FastOutSlowInInterpolator");
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
