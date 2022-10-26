<template>
  <div class="horizontal_list_view_root_view_css">
    <span class="index_root_title_css">横向ListView测试</span>
    <div class="index_root_content_row_css">
      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        @click="botton1Click">
        <span class="button-text">按钮1</span>
      </text-button>
      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        @click="botton2Click">
        <span class="button-text">按钮2</span>
      </text-button>
      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        @click="botton3Click">
        <span class="button-text">添加数据</span>
      </text-button>
    </div>

    <tv-list
      ref="horizontalListView"
      :horizontal="true"
      :listenBoundEvent="true"
      @item-bind="itemBind"
      class="es_horizontal_list_view_root_css">

      <tv-item
        :type="666"
        class="es_horizontal_item_view_root_view_css"
        :focusScale="1.3"
        :focusable="true">
        <image
          class="es_horizontal_image_view_css"
          src="${image}"/>
        <text-view class="span_horizontal_text_root_css" text="${text}" gravity="center"></text-view>
      </tv-item>

      <tv-item
        :type="777"
        class="es_horizontal_item_view_root_view_css_new"
        :focusScale="1.3"
        :focusable="false">
        <!--        <image-->
        <!--          class="es_horizontal_image_view_css"-->
        <!--          src="${image}"/>-->
        <!--        <text-view class="span_horizontal_text_root_css" text="${text}" gravity="center"></text-view>-->
      </tv-item>

    </tv-list>
  </div>
</template>

<script>
export default {
  name: "test_horizontal_list_view",
  data() {
    return {
      horizontalListData: [
        {
          type: 666,
          text: 'item1',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242306111155-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=c43a084b5aced8057caaea356fe7116e',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item2',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-04-26%2F5ea53529cfe91.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=85f34747a298124d0717c2c04d9a0d7c',
        }, {
          type: 666,
          text: 'item3',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091304%2Ff2vw2etwg3pf2vw2etwg3p.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=bb85a05aaab1d669cb291a7f94361710',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item4',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F112414123216%2F141124123216-0-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=a5f5665dc2af4623bb456dc81ed7e636',
          isLastPosition: false
        },
        {
          type: 666,
          text: 'item5',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F811%2F040915120S0%2F150409120S0-5-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=198315e3349fadc998027a8a511747a8',
          isLastPosition: false
        },
        {
          type: 666,
          text: 'item6',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-09%2F5b432e16c1edd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=aec4ee15d9a4d4b6e543c806e3575bff',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item7',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1112%2F061519115S2%2F1Z615115S2-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=22fbaa2df889d8e40a4745b3a59c19d3',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item8',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0QR0103525%2F200QQ03525-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=981cf79375ed00e2612ca7b2f6bf6cd9',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item9',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910011AI95444-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=ffb0d96aa6475fd6121bb6419210cca1',
          isLastPosition: false
        }, {
          type: 666,
          text: 'item10',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0R620115Q8%2F200R6115Q8-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=b0ea4371f3d9591951d662bc16356050',
          isLastPosition: true
        },
        {
          type: 777,
          text: 'item111111111',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0R620115Q8%2F200R6115Q8-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=b0ea4371f3d9591951d662bc16356050',
          isLastPosition: true
        },
      ],
      addListData: [
        {
          type: 666,
          text: 'item11',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg13.51tietu.net%2Fpic%2F20200119%2F4nij2qcpocu4nij2qcpocu.jpg&refer=http%3A%2F%2Fimg13.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262452&t=074f41b6f2001d6c99768ac3d6a8fe8e'
        },

        {
          type: 666,
          text: 'item12',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1011%2F05041G05945%2F1F504105945-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=e745a37370715f3b5e5217942071fda5'
        },

        {
          type: 666,
          text: 'item13',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.pig66.com%2Fuploadfile%2F2017%2F1113%2F20171113120927961.png&refer=http%3A%2F%2Fupload.pig66.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=811218041f241d34263202fc3150e91b'
        },


        {
          type: 666,
          text: 'item14',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0Q119121629%2F1ZQ1121629-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=db73fb3356ca9916da31b0fa3261d583'
        },

        {
          type: 666,
          text: 'item15',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091306%2F04hn3yrzoxz04hn3yrzoxz.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=dd2f30adb9d75dc35a59db9bc46e3cde'
        },

        {
          type: 666,
          text: 'item16',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-090920%2F2mdl5l224xj2mdl5l224xj.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=63f6779454f166774509e5dc2bad7633'
        },

        {
          type: 666,
          text: 'item17',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg13.51tietu.net%2Fpic%2F20200120%2Fvovgxb1mmgsvovgxb1mmgs.jpg&refer=http%3A%2F%2Fimg13.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=67c8b285a17428a1315965cbecafd1f0'
        },

        {
          type: 666,
          text: 'item18',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dabaoku.com%2Fsucai%2Fdongwu%2Fqi-e%2F062cj.jpg&refer=http%3A%2F%2Fwww.dabaoku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=e89079e201c64f9e9132631ec71d2583'
        },

        {
          type: 666,
          text: 'item19',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dabaoku.com%2Fsucaidatu%2Fdongwu%2Fdaxiang%2F291424.jpg&refer=http%3A%2F%2Fwww.dabaoku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=eb76434b0b6768f867dca830e5a8a64b'
        },

        {
          type: 666,
          text: 'item20',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F012421120027%2F210124120027-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262453&t=5827031a6e249c9e27e2fc33d815b5ce'
        },


        {
          type: 666,
          text: 'item21',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F6d%2Fb3%2F36%2F6db336fae6fcd575568de0bcf04b4d4b.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=ec7cdf76a78e7c14cb712f8d5aac01a5'
        },

        {
          type: 666,
          text: 'item22',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp83572916.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=d64792fa040f09442a63ecee1adeb00f'
        },

        {
          type: 666,
          text: 'item23',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fb4%2F02%2F03%2Fb40203433187c8d1c31986854b6a59d7.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=5434efb3889f04d1860deca963c44d50'
        },

        {
          type: 666,
          text: 'item24',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fe9%2F32%2F2b%2Fe9322b9a81ba9b43a0e088b6a5ed3e79.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=d267108f60d4d1a12a5a1b459430bf1a'
        },

        {
          type: 666,
          text: 'item25',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F911%2F121615101023%2F151216101023-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=e9e8943aee24f0382f36026a6d6011d2'
        },

        {
          type: 666,
          text: 'item26',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1413%2Fntk-1413-6646.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=a53c47536d740f58d7f5abdd87726ec4'
        },

        {
          type: 666,
          text: 'item27',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F64%2F19%2Ffc%2F6419fce02e76fa7b313cf84f27f25d8b.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264637&t=aef2470ccd8a474e337c7d62d25b329a'
        },
        {
          type: 666,
          text: 'item28',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F9b%2Ff6%2Fe2%2F9bf6e2f200b1dbe9e0d040263ccd9f20.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659265300&t=07e3e5c57037a9a82395fb48d937ae2e'
        },
        {
          type: 666,
          text: 'item29',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F24%2F5c%2F92%2F245c9290aedf43d68b0bf4d90fadf30f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264761&t=8e00be864c67f9a797b9fed80db94ca2'
        },
        {
          type: 666,
          text: 'item30',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F79f0f736afc379311ea46898e1c4b74542a911b6.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659264761&t=6956416a118a821e209114c0ac1db5eb'
        },

        {
          type: 777,
          text: 'item111111111',
          image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0R620115Q8%2F200R6115Q8-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659262018&t=b0ea4371f3d9591951d662bc16356050',
        },

      ],

      isLoadMore: false,

      isBindLastPosition: false,
    }
  },

  mounted() {
    this.setHorizontalListData()
  },

  methods: {
    setHorizontalListData() {
      this.$refs.horizontalListView.setListData(this.horizontalListData)
    },

    addData() {
      this.$refs.horizontalListView.addListData(this.addListData, 1)
    },

    botton1Click() {
      console.log("gxh", "------botton1Click----------")
      this.$refs.horizontalListView.scrollToIndex(0, 0, false, 100, 100)
    },
    botton2Click() {
      console.log("gxh", "------botton2Click----------")
      this.$refs.horizontalListView.scrollToPosition(8)
    },
    botton3Click() {
      // for (let i = 0; i < this.addListData.length; i++) {
      //   let number = Math.round(Math.random() * (this.addListData.length - 1));
      //   this.horizontalListData.push(this.addListData[number])
      // }

      // this.horizontalListData = [...this.horizontalListData,...this.addListData];
      // console.log("gxh", "-----this.horizontalListData------" + this.horizontalListData.length)
      // this.setHorizontalListData()
    },

    itemBind(event) {
      console.log("gxh", "------itemBind------index----" + event.position)
      if (event.position + 1 === this.horizontalListData.length) {
        this.isBindLastPosition = true
      }


      if (event.position + 1 === this.horizontalListData.length && !this.isLoadMore) {
        console.log("gxh", "------start---loadmore----ing---")
        this.isLoadMore = true
        setTimeout(() => {
          console.log("gxh", "------loadmore----end----start---addData---")
          this.addData()
          this.horizontalListData.pop()
          this.horizontalListData = [...this.horizontalListData, ...this.addListData];
          this.isLoadMore = false
        }, 300)
      }
    },
  },
}
</script>

<style scoped>

.horizontal_list_view_root_view_css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
}

.index_root_title_css {
  font-size: 40px;
  width: 1920px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.index_root_content_row_css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  width: 1920px;
  padding-left: 100px;
  padding-right: 100px;
}

.button_root_css {
  width: 150px;
  height: 50px;
  margin-right: 50px;
}

.button-text {
  text-align: center;
  font-size: 20px;
  color: white;
  margin-top: 10px;
}


.es_horizontal_list_view_root_css {
  width: 1920px;
  height: 500px;
  margin-top: 50px;
}

.es_horizontal_item_view_root_view_css {
  width: 400px;
  height: 300px;
  align-items: center;
}

.es_horizontal_item_view_root_view_css_new {
  width: 800px;
  height: 300px;
  background-color: red;
}

.es_horizontal_image_view_css {
  width: 400px;
  height: 250px;
}

.span_horizontal_text_root_css {
  width: 400px;
  height: 50px;
  background-color: yellow;
  text-align: center;
  font-size: 20px;
}


</style>
