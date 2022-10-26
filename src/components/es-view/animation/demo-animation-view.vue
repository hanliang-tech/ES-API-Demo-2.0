<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">ESAnimationViewComponent</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <div class="index_root_content_row_css">
        <text-button text="星星旋转变形渐变" @onButtonClicked="playStarAnim"/>
        <text-button text="星星位移" @onButtonClicked="playTranslationStarAnim"/>
        <text-button text="translationY" @onButtonClicked="playTranslationYAnim"/>
        <text-button text="resetAnimators" @onButtonClicked="resetViewAnimators"/>
      </div>

    </div>
    <es-animation-view-component
      ref="animation_view_rotation"
      class="animation_view_rotation">
      <div class="animation_inner_view_class"/>
    </es-animation-view-component>

    <es-animation-view-component
      ref="star_view_animation"
      class="animation_view_star_css">
      <img class="animation_inner_view_class"
           :src="require('../../../assets/star.png')"/>
    </es-animation-view-component>
  </div>
</template>

<script>
import {ESLog} from "@extscreen/es-log";
import Vue from "vue";
import {
  ES_ANIMATION_PROPERTY_NAME_ALPHA,
  ES_ANIMATION_PROPERTY_NAME_ROTATION,
  ES_ANIMATION_PROPERTY_NAME_SCALE_X,
  ES_ANIMATION_PROPERTY_NAME_SCALE_Y,
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
  ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
  ES_ANIMATION_VALUE_TYPE_FLOAT,
  ES_ANTICIPATE_INTERPOLATOR,
  ES_ANTICIPATE_OVERSHOOT_INTERPOLATOR,
  ES_CYCLE_INTERPOLATOR,
  ES_DECELERATE_INTERPOLATOR,
  ESBackPressMixin,
  ESKeyEventMixin, ESLaunchManager,
  ESLifecycleMixin
} from "@extscreen/es-core";

const TAG = "INDEX_VUE";

export default {
  name: 'test_animation_view',
  mixins: [ESBackPressMixin, ESKeyEventMixin, ESLifecycleMixin],
  data() {
    return {
      deviceInfoShow: false
    };
  },
  mounted() {
    if (ESLog.isLoggable(ESLog.DEBUG)) {
      ESLog.d(TAG, '-----INIT_PAGE---PAGE------>>>>');
    }
  },
  methods: {

    playStarAnim() {

      //SCALE_X
      this.$refs.star_view_animation.objectAnimator2(
        "0",
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        "0",
        "1",
        1000,
        -1,
        0,
        false,
        false,
      );

      //SCALE_Y
      this.$refs.star_view_animation.objectAnimator2(
        "1",
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_SCALE_Y,
        "0",
        "1",
        1000,
        -1,
        0,
        false,
        false,
      );

      //alpha
      this.$refs.star_view_animation.objectAnimator2(
        "2",
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ALPHA,
        "0",
        "1",
        1000,
        -1,
        0,
        false,
        false,
      );

      //旋转
      this.$refs.star_view_animation.objectAnimator2(
        "3",
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "-50",
        1000,
        -1,
        0,
        false,
        false,
      );

      this.$refs.star_view_animation.objectAnimator2(
        "4",
        'ofFloat',
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "500",
        1000,
        -1,
        0,
        false,
        false,
      );

      this.$refs.star_view_animation.objectAnimator2(
        "5",
        'ofFloat',
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "-200",
        1000,
        -1,
        0,
        false,
        false,
      );

      //集合
      this.$refs.star_view_animation.animatorSet("starAnimation", -1, false);
      //旋转
      this.$refs.star_view_animation.objectAnimator2(
        "6",
        ES_ANIMATION_VALUE_TYPE_FLOAT,
        ES_ANIMATION_PROPERTY_NAME_ROTATION,
        "0",
        "360",
        1000,
        0,
        2000,
        false,
        false,
      );
      //位移
      this.$refs.star_view_animation.animatorSet("translation", -1, false);
      this.$refs.star_view_animation.playTogether3("translation", "4", "5", "6");

      //
      this.$refs.star_view_animation.play("starAnimation", "0")
      this.$refs.star_view_animation.with("starAnimation", "1")
      this.$refs.star_view_animation.with("starAnimation", "2")
      // this.$refs.star_view_animation.with("starAnimation", "3")

      this.$refs.star_view_animation.before("starAnimation", "translation")

      // this.$refs.star_view_animation.playTogether4("测试", "0", "1", "2", "3",);
      // this.$refs.star_view_animation.playTogether2("测试", "4", "5");
      // this.$refs.star_view_animation.with("测试", "1");
      // this.$refs.star_view_animation.with("测试", "2");
      //位移
      // this.$refs.star_view_animation.before("测试", "4");
      // this.$refs.star_view_animation.with("测试", "5");

      this.$refs.star_view_animation.startAnimator("starAnimation");
    },
    playTranslationStarAnim() {
      this.$refs.star_view_animation.objectAnimator2(
        "4",
        'ofFloat',
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        "0",
        "500",
        1000,
        -1,
        0,
        false,
        false,
      );

      this.$refs.star_view_animation.objectAnimator2(
        "5",
        'ofFloat',
        ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        "0",
        "-200",
        1000,
        -1,
        0,
        false,
        false,
      );
      this.$refs.star_view_animation.animatorSet("translation", -1, false);
      this.$refs.star_view_animation.playTogether2("translation", "4", "5");
      this.$refs.star_view_animation.startAnimator("translation");
    },

    playTranslationYAnim() {
      this.$refs.animation_view_rotation.objectAnimator3(
        "23",//id
        'ofFloat',
        'translationY',
        "0",
        "360",
        '0',
        1000,
        -1,
        10000,
        false,
        false,
        {
          type: ES_CYCLE_INTERPOLATOR,
        }
      );

      // objectAnimator2(
      //   id,
      //   valueType, propertyName,
      //   value1, value2,
      //   duration, repeatMode, repeatCount,
      //   listenAnimator, listenAnimatorValue) {
      //   Vue.Native.callUIFunction(this.$refs.animationView,
      //     'objectAnimator2', [
      //       id,
      //       valueType, propertyName,
      //       value1, value2,
      //       duration, repeatMode, repeatCount,
      //       listenAnimator, listenAnimatorValue], (res) => {
      //     });
      // },
      //

      this.$refs.animation_view_rotation.startAnimatorDelay("23", 2000);
    },
    resetViewAnimators() {
      this.$refs.star_view_animation.resetAnimators();
    },
    onBackPressed() {
      ESLaunchManager.finishESPage();
    },
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


.animation_view_rotation {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  left: 200px;
  top: 500px
}

.animation_view_star_css {
  background-color: red;
  position: absolute;
  left: 500px;
  top: 500px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.animation_inner_view_class {
  width: 100px;
  height: 100px;
  background-color: green;
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


</style>
