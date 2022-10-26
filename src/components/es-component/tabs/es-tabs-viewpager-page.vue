<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css"
           :text="'多Page模式'"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text-button :text="this.text1" @onButtonClicked="changeSuspension"/>
        <text-button text="" @onButtonClicked=""/>
        <text-button text="" @onButtonClicked=""/>
        <text-button text="" @onButtonClicked=""/>
        <text-button text="" @onButtonClicked=""/>
      </div>
      <tabs class="tabs_root" ref="tabs" :focusable="false"
            @load-page="onLoadPageData"
            :suspension="isSuspension"
            :blockFocusDirections="['down']">
        <recycler-view-pager :nextFocusName="contentNextFocus" ref="viewPager"
                             id="waterfall_view_pager" name="content" :loadingItemType="-1"
                             :outOfDateTime="60 * 1000"
                             :blockFocusDirections="blockViewPager">
          <div class="viewpager_content">

          </div>
        </recycler-view-pager>
        <tv-list class="find_tabs_header_ul"
                 style="margin-top: 120px"
                 horizontal="true"
                 padding="60,0,0,0"
                 :clipChildren="false"
                 :blockFocusDirections="['left', 'right']"
                 name="tabList"
                 ref="tab_list"
                 negativeKeyTime="20"
                 :nextFocusName="tabNextFocus">
          <tv-item id="itemRoot1" type="1" focusable=true focusScale="1.1">
            <img class="itemImg1" src="${cover}" postDelay="200"/>
            <div delayLoad="500">
              <span class="itemSpan1">不可变文本=========</span>
              <text-view class="itemSpan1" fontSize="${titleSize}" text="${title}"></text-view>
            </div>
          </tv-item>
        </tv-list>
      </tabs>
    </div>
  </div>
</template>

<script>
import {ESPage} from '@extscreen/es-core';

export default {
  name: 'es-tabs-viewpager-page',
  mixins: [ESPage],
  mounted() {
    setTimeout(() => {
      // this.$refs.tabs.setTabsData({
      //   defaultIndex: 1,
      //   focusIndex: 1,
      // }, this.tabsData);
    }, 100);
  },
  data() {
    return {
      text1: '开启吸顶',
      isSuspension: false,
      blockViewPager: ['left', 'right', 'down'],
      tabNextFocus: {
        down: 'content',
      },
      contentNextFocus: {
        down: 'tabList',
      },
      tabsData: [
        {
          title: '推荐',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '精选',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '汽车',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '娱乐',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '娱乐1',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '娱乐2',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '娱乐3',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '娱乐4',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '电影1',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '电影2',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        },
        {
          title: '电影3',
          decoration: {right: 10},
          content: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              text: 'myText1',
              title: 'hello',
              titleSize: '30px'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText3',
              title: 'hello3'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText4',
              title: 'hello4'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              text: 'myText5',
              title: 'hello5'
            },
          ],
        }
      ],
    };
  },
  methods: {
    onLoadPageData() {

    },
    changeSuspension() {
      this.isSuspension = !this.isSuspension;
      if (this.isSuspension) {
        this.text1 = '关闭吸顶';
      } else {
        this.text1 = '开启吸顶';
      }
    }
  }
};
</script>

<style scoped>
.tabs_root {
  width: 1920px;
  height: 1080px;
  background-color: #fcb931;
}

.viewpager_content {
  width: 1920px;
  height: 600px;
  background-color: #42b983;
}
</style>
