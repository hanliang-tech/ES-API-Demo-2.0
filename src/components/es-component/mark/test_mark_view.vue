<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">EsPlayMarkViewComponent</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <es-play-mark-view-component
        class="play_mark_view"
        :showType="0"
        :roundCorner="10"
        :gap="20"
        :markColor="'#FF4054'"
      />
    </div>
  </div>
</template>

<script>
//:makeLinearGradientColors ="colorArr"
//:showType = "1"
const TAG = "TEST_";
export default {
  name: 'test_mark_view',
  mounted() {

  },
  methods: {
    test() {
    }
  },
  components: {},
  data() {
    return {
      colorArr: ['#FF8534', '#FFCA37'],
      //playMarkColor:['#ffffff', '#ffffff'],
    };
  },
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


.index_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: darkmagenta;
}

.play_mark_view {
  width: 96px;
  height: 120px
}

</style>
