<template>
  <div class="sample_index_root_view_css">
    <span class="index_root_title_css">ESGifViewComponent</span>
    <div class="index_root_content_css">
      <div class="index_root_content_divider_css"/>
      <es-animation-view-component/>
    </div>
  </div>
</template>

<script>

const TAG = "TEST_";
export default {
  name: 'test_gif_view',
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    test() {
    }
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

.index_root_content_divider_css {
  width: 1920px;
  height: 2px;
  background-color: red;
}

</style>
