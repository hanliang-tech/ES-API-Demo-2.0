<template>
  <div id="testRoot">
    <div id="click" focusable=true focusScale="1.1">
      <span style="background-color: #666666">刷新</span>
    </div>
    <tabs style="width: 1920px;height: 800px; background-color: #ffff00" ref="tabs" @load-page="onLoadPageData"
          @load-more="onLoadMoreData">
      <tv-list style="width: 1920px;height: 80px; background-color: #7415B1" horizontal="true">
        <tv-item id="itemRoot2" :focusable="true" focusScale="1.1" @item-focused="onItemFocus" eventFocus>
          <es-text-view-component style="width: 300px;height:80px;color:#fff;" text="${title}"></es-text-view-component>
        </tv-item>
      </tv-list>
      <list-view-pager ref="viewPager" class="rootListPage">
        <tv-list style="background-color: #ff0;width: 1920px;height: 600px">
          <tv-item id="itemRoot1" type="1" focusable=true focusScale="1.1">
            <img class="itemImg1" src="${cover}" postDelay="200"/>
            <div delayLoad="500">
              <span class="itemSpan1">不可变文本=========</span>
              <text-view class="itemSpan1" fontSize="${titleSize}" text="${title}"></text-view>
            </div>
          </tv-item>
        </tv-list>
      </list-view-pager>
    </tabs>
  </div>
</template>


<script>
export default {
  name: "test_waterfall_kit",
  methods: {
    onItemFocus(e) {
      if (e.hasFocus) {
        const index = e.position
        console.log("ZHP", "onItemFocus pos:" + index)
        this.$refs.tabs.setCurrentPage(index)
      }
    },
    onLoadPageData(e) {
      const pageIndex = e.pageIndex
      const itemCount = e.itemCount
      console.log("ZHP", `onLoadPageData pageIndex:${pageIndex},itemCount:${itemCount}`)
      let data = this.pageData
      this.$refs.tabs.setPageData(pageIndex, data)
    },
    onLoadMoreData(e) {
      const pageIndex = e.pageIndex
      const itemCount = e.itemCount
      console.log("ZHP", `onLoadMoreData pageIndex:${pageIndex},itemCount:${itemCount}`)
      this.$refs.tabs.addPageData(pageIndex, this.pageData)
    }
  },
  mounted() {
    setTimeout(() => {
      //设置数据
      this.$refs.tabs.setListData({
        initPage: 1,
        mainPage: 1,
        cacheTime: 5 * 60 * 1000
      }, this.tabList)
    }, 500)
  },
  data() {
    return {
      initPosition: {
        focusPosition: 0,
        scrollToPosition: 0,
        scrollOffset: 0,
        force: true,
      },
      mCover: '',
      pageData: [
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
      pageList: [
        {//page1
          list: [
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
        {//page2
          list: [
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
        {//page3
          list: [
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
      ],
      tabList: [
        {
          title: '推荐',
          decoration: {right: 10}
        },
        {
          title: '精选', decoration: {right: 10}
        },
        {
          title: '汽车', decoration: {right: 10}
        },
        {
          title: '娱乐', decoration: {right: 10}
        },

      ],
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
          title: '精选', decoration: {right: 10}
        },
        {
          title: '汽车', decoration: {right: 10},
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
          title: '娱乐', decoration: {right: 10},
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
          title: '娱乐1', decoration: {right: 10},
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
          title: '娱乐2', decoration: {right: 10},
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
          title: '娱乐3', decoration: {right: 10},
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
          title: '娱乐4', decoration: {right: 10},
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
          title: '电影5', decoration: {right: 10},
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
          title: '电影3', decoration: {right: 10},
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
          title: '电影1', decoration: {right: 10},
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
          title: '电影2', decoration: {right: 10},
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

      ],

      //from
      //   list:[
      //     {
      //       type:1,
      //       data:{
      //         cover:'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
      //         text:'myText1',
      //         title:'hello',
      //         titleSize:'30px'
      //       }
      //     },
      //     {
      //       type:1,
      //       data:{
      //         cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //         text:'myText3',
      //         title:'hello3'
      //       }
      //     },
      //     // {
      //     //   type:2,
      //     //   data:{
      //     //     text:'myText2'
      //     //   }
      //     // },
      //     {
      //       type:1,
      //       data:{
      //         cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //         text:'myText4',
      //         title:'hello4'
      //       }
      //     },
      //     {
      //       type:1,
      //       data:{
      //         cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //         text:'myText5',
      //         title:'hello5'
      //       }
      //     },
      //     {
      //       type:2,
      //       data:{
      //         text:'myText2',
      //         title:'hello2'
      //       }
      //     },
      //     {
      //       type:1,
      //       data:{
      //         cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //         text:'myText6',
      //         title:'hello6'
      //       }
      //     },
      //     {
      //       type:4,
      //       data:{
      //         mlist:[
      //           {
      //             type:1,
      //             data:{
      //               cover:'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
      //               title:'hello1'
      //             },
      //
      //           },
      //           {
      //             type:1,
      //             data:{
      //               cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //               title:'hello2'
      //             }
      //           },
      //           {
      //             type:2,
      //             data:{
      //               text:'hello2'
      //             }
      //           },
      //           {
      //             type:1,
      //             data:{
      //               cover:'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
      //               title:'hello1'
      //             },
      //
      //           },
      //           {
      //             type:1,
      //             data:{
      //               cover:'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      //               title:'hello2'
      //             }
      //           },
      //           {
      //             type:2,
      //             data:{
      //               text:'hello2'
      //             }
      //           },
      //           {
      //             type:1,
      //             data:{
      //               cover:'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
      //               title:'hello1'
      //             },
      //
      //           },
      //         ]
      //       }
      //     },
      //   ]
      // 简单写法：
      list: [
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
        {
          type: 2,
          text: 'myText2',
          title: 'hello2'
        },
        {
          type: 1,
          cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
          text: 'myText6',
          title: 'hello6'
        },
        {
          type: 4,
          mlist: [
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              title: 'hello1'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              title: 'hello2'
            },
            {
              type: 2,
              text: 'hello2'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
              title: 'hello1'
            },
            {
              type: 1,
              cover: 'https://img0.baidu.com/it/u=2911487270,282554651&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
              title: 'hello2'
            },
            {
              type: 2,
              text: 'hello2'
            },
            {
              type: 1,
              data: {
                cover: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
                title: 'hello1'
              },
            },
          ]
        },
      ]
    }
  },


}
</script>

<style scoped>
testRoot {
  width: 1920px;
  height: 1080px;
  background-color: #fcb931;
  display: flex;
  flex-direction: row;
}

#itemRoot1 {
  width: 300px;
  height: 400px;
  background-color: #42b983;
}

.rootListPage {
  width: 1920px;
  height: 1080px;
  background-color: blueviolet;
}

.itemImg1 {
  width: 200px;
  height: 300px;
  background-color: #E63E2A;
}

.itemSpan1 {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: red;
}

#itemRoot2 {
  width: 300px;
  height: 200px;
  background-color: blue;
  focus-background-color: red;
}

#itemRoot3 {
  display: flex;
  width: 1680px;
  height: 500px;
  background-color: blue;
}

.itemSpan2 {
  width: 300px;
  height: 50px;
  color: grey;
  background-color: #7415B1;
}

.itemSpan3 {
  width: 300px;
  height: 50px;
  color: grey;
  background-color: #0D234E;
}

#click {
  background-color: #0D234E;
  width: 100px;
  height: 100px;
  focus-scale: 1.1;
}

.flex {
  display: flex;
  flex-direction: row;
  width: 1680px;
  height: 500px;
  background-color: grey;
}
</style>
