<template>
  <div class="list_view_root_view_css">
    <span class="index_root_title_css">ListView测试</span>

    <div
      class="top_button_root_css">
      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        text="更新数据"
        @onButtonClicked="botton1Click">
      </text-button>
      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        text="按钮2"
        @onButtonClicked="botton2Click">
      </text-button>

      <text-button
        class="button_root_css"
        :focusScale="1.5"
        :focusable="true"
        text="添加数据"
        @onButtonClicked="botton3Click">
      </text-button>

      <nav-button text="横向ListView" :url="'test_horizontal_list_view'"/>
    </div>

    <tv-list
      ref="verticalListView"
      :list="verticalListData"
      class="es_list_view_root_css">
      <tv-item
        :type="666"
        class="es_item_view_root_view_css"
        :focusScale="1.1"
        :focusable="true">
        <image
          class="es_image_view_css"
          src="${image}"/>
        <text-view class="span_text_root_css" text="${text}"></text-view>
        <div class="tv_item_float">
          <text-view class="span_text_root_css" style="position:absolute;" text="角标"></text-view>
        </div>
      </tv-item>

    </tv-list>
  </div>
</template>

<script>
import {ESPage, ESToast} from '@extscreen/es-core';

export default {
  name: "test_list_view",
  mixins: [ESPage],
  data() {
    return {
      verticalListData: [
        {
          type: 666,
          text: 'item1',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/47f02563-55b8-4e61-ac20-71e131d82e53.png'
        }, {
          type: 666,
          text: 'item2',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/45aaab30-e0a2-436e-9a2b-7af282e49c1c.png'
        }, {
          type: 666,
          text: 'item3',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/5eae67dc-5299-4bd0-a032-8c431d17ecfe.png'
        }, {
          type: 666,
          text: 'item4',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/d1988a58-d02d-401b-9a33-947ebed77ac0.png'
        },
        {
          type: 666,
          text: 'item5',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/181f9437-5567-4358-9e31-4d603f2cca7c.png'
        },
        {
          type: 666,
          text: 'item6',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/90708435-b452-4364-9e07-7d9969dff54e.png'
        }, {
          type: 666,
          text: 'item7',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/73fcc0df-4c2a-43be-8d30-b63b10dc1d89.jpg'
        }, {
          type: 666,
          text: 'item8',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/8ad771c1-1e19-40ad-998c-a5a4d7a64ad8.jpg'
        }, {
          type: 666,
          text: 'item9',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e0fcac89-ac1f-4afd-898d-22d509bb17d8.jpg'
        }, {
          type: 666,
          text: 'item10',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e9a386ef-c0b0-4031-b735-5b03dd2aa479.jpg'
        },
      ],

      verticalListDataUpdate: [
        {
          type: 666,
          text: 'item改1',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/45aaab30-e0a2-436e-9a2b-7af282e49c1c.png'
        }, {
          type: 666,
          text: 'item改2',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/47f02563-55b8-4e61-ac20-71e131d82e53.png'
        }, {
          type: 666,
          text: 'item3',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/5eae67dc-5299-4bd0-a032-8c431d17ecfe.png'
        }, {
          type: 666,
          text: 'item4',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/d1988a58-d02d-401b-9a33-947ebed77ac0.png'
        },
        {
          type: 666,
          text: 'item5',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/181f9437-5567-4358-9e31-4d603f2cca7c.png'
        },
        {
          type: 666,
          text: 'item改6',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e9a386ef-c0b0-4031-b735-5b03dd2aa479.jpg'
        }, {
          type: 666,
          text: 'item7',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/73fcc0df-4c2a-43be-8d30-b63b10dc1d89.jpg'
        }, {
          type: 666,
          text: 'item8',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/8ad771c1-1e19-40ad-998c-a5a4d7a64ad8.jpg'
        }, {
          type: 666,
          text: 'item9',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e0fcac89-ac1f-4afd-898d-22d509bb17d8.jpg'
        }, {
          type: 666,
          text: 'item10',
          image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e9a386ef-c0b0-4031-b735-5b03dd2aa479.jpg'
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

      ]
    }
  },
  mounted() {
    this.setListData()
  },
  methods: {
    setListData() {
      //this.$refs.verticalListView.setListData(this.verticalListData)
    },
    botton1Click() {


      //this.$refs.verticalListView.scrollToIndex(0,0,false,150,200)
      ESToast.showToast('updateList')
      // this.verticalListData.splice(1,1,{
      //   type: 666,
      //   text: 'item更新过后1',
      //   image: 'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/08/17/e9a386ef-c0b0-4031-b735-5b03dd2aa479.jpg'
      // },)
      this.verticalListData = this.verticalListDataUpdate
    },

    botton2Click() {
      this.$refs.verticalListView.scrollToPosition(8)
    },

    botton3Click() {
      for (let i = 0; i < this.addListData.length; i++) {
        let number = Math.round(Math.random() * (this.addListData.length - 1));
        this.verticalListData.push(this.addListData[number])
      }
      this.setListData()
    }
  }
}
</script>

<style scoped>

.list_view_root_view_css {
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

.es_list_view_root_css {
  position: absolute;
  width: 1920px;
  height: 900px;
  margin-top: 100px;
  margin-left: 500px;
  margin-right: 100px;
}

.es_item_view_root_view_css {
  width: 800px;
  height: 300px;
  align-items: center;
  position: absolute;
}

.es_image_view_css {
  width: 800px;
  height: 250px;
}

.span_text_root_css {
  width: 800px;
  height: 50px;
  background-color: darkslateblue;
  text-align: center;
  font-size: 20px;
}

.top_button_root_css {
  width: 1920px;
  height: 900px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}

.button_root_css {
  width: 100px;
  height: 50px;
  margin-right: 50px;
  background-color: grey;
  text-align: center;
}

.button-text {
  text-align: center;
  font-size: 20px;
  color: white;
  align-self: center;
}

.tv_item_float {
  position: absolute;
  margin-left: 200px;
  width: 200px;
  height: 200px;
  background-color: #7415B1;
}
</style>
