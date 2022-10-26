<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <es-bar-chart-view-component
        class="histogram_view_root_css"
        ref="histogramView"
        :barItemSpace="50"
        :barWidth="60"
        :barColor="'#F7B500'"
        :topTextSize="22"
        :topTextColor="'#808080'"
        :bottomTextSize="20"
        :bottomTextColor="'#808080'"
        :leftTextSize="12"
        :leftTextColor="'#808080'"
        :leftBackgroundColor="'#fffff'"
        :chartBackgroundColor="'#fffff'"/>
      <es-line-chart-view-component
        ref="lineChartView"
        class="line_view_root_css"
        :lineColor="'#32EFFF'"
        :textColor="'#FFFFFF'"
        :textSize="22"/>
    </div>
  </div>
</template>

<script>
import {ESPage} from "@extscreen/es-core";

const TAG = "TEST_";
export default {
  name: '图表',
  mixins: [ESPage],
  data() {
    return {
      xData: ["1点", "2点", "3点", "4点", "5点", "6点", "7点", "8点", "9点", "10点"],
      lineData: ["24", "33", "11", "22", "27", "29", "31", "36", "28", "18"],

      xDataBar: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '6.10', '6.11', '6.12', '6.13', '6.14'],
      barData: [100, 200, 300, 360, 280, 666, 555, 333, 888, 999, 777, 232, 651, 88],
    }
  },
  mounted() {
    this.setChartData()
    this.setLineChartData()
  },
  methods: {
    setChartData() {
      this.$refs.histogramView.setChartData(this.xDataBar, this.barData);
    },
    setLineChartData() {
      this.$refs.lineChartView.setChartData(this.xData, this.lineData);
    }
  },
  components: {}
};
</script>

<style scoped>

.histogram_view_root_css {
  width: 1720px;
  height: 300px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: white;
}

.line_view_root_css {
  width: 1720px;
  height: 300px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #406EE4;
}

</style>
