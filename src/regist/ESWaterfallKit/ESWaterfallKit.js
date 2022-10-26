import Vue from 'vue';
import {getEventRedirector} from './utils/utils';

function ESWaterfallKit() {
  Vue.registerElement('FastListView', {
    component: {
      name: 'FastListView',
      processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onItemClick':
            event.position = nativeEventParams.position;
            event.index = nativeEventParams.index;
            event.item = nativeEventParams.item;
            event.name = nativeEventParams.name;
            event.parentPosition = nativeEventParams.parentPosition;
            break;
          case 'onItemFocused':
            event.position = nativeEventParams.position;
            event.index = nativeEventParams.index;
            event.hasFocus = nativeEventParams.hasFocus;
            event.isFocused = nativeEventParams.hasFocus;
            event.item = nativeEventParams.item;
            event.name = nativeEventParams.name;
            event.parentPosition = nativeEventParams.parentPosition;
            break;
          case 'onBindItem':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            break;
          case 'onUnbindItem':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            break;
          case 'onScroll':
            event.offsetX = nativeEventParams.contentOffset.x;
            event.offsetY = nativeEventParams.contentOffset.y;
            break;
          case 'onScrollOffset':
            event.offsetY = nativeEventParams.y;
            break;
          case 'onScrollStateChanged':
            event.offsetX = nativeEventParams.contentOffset.x;
            event.offsetY = nativeEventParams.contentOffset.y;
            event.oldState = nativeEventParams.state.oldState;
            event.newState = nativeEventParams.state.newState;
            break;
          case 'onChildFocus':
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            };
            event.focused = {
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
            };
            break;
          case 'onChildSelect':
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            };
            break;
          case 'onFocusSearchFailed':
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            };
            event.focused = {
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
            };
            event.direction = nativeEventParams.direction;
            break;
          default:
            break;
        }
        return event;
      },
    },
  });

  Vue.component('tv-list', {
    methods: {
      onItemClick(evt) {
        this.$emit('item-click', evt);
      },
      onScroll(evt) {
        this.$emit('scroll', evt);
      },
      onItemFocused(evt) {
        this.$emit('item-focused', evt);
      },
      onBindItem(evt) {
        this.$emit('item-bind', evt);
      },
      onUnbindItem(evt) {
        this.$emit('item-unbind', evt);
      },
      updateItem(pos, data) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'updateItem', [pos, data]);
      },
      hasFocus(callback) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'hasFocus', (res) => {
          callback(res);
        });
      },
      updateItemProps(position, name, toUpdateMap) {
        Vue.Native.callUIFunction(this.$refs.FastItemView, 'updateItemProps', [name, position, toUpdateMap, true]);
      },
      setListData(data) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'setListData', data);
      },
      setBlockFocusDirectionsOnFail(data) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'setBlockFocusDirectionsOnFail', [data]);
      },
      setListDataWithParams(data, autoChangeVisible) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'setListDataWithParams', [data, autoChangeVisible]);
      },
      prepareForRecycle() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'prepareForRecycle', []);
      },
      setDisplay(b) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'setDisplay', [b]);
      },
      scrollToTop() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'scrollToTop', []);
      },
      changeDisplayState(display, autoDataState) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'changeDisplayState', [display, autoDataState]);
      },
      notifySaveInstance() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'notifySaveInstance', []);
      },
      notifyRestoreInstance() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'notifyRestoreInstance', []);
      },
      pausePostTask() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'pausePostTask', []);
      },
      resumePostTask() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'resumePostTask', []);
      },
      getScrollOffset(callback) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'getScrollOffset', [], callback);
      },
      scrollToPosition(index) {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'scrollToPosition', [index]);
      },
      scrollToIndex(x, y, anim, offset, duration) {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'scrollToPositionWithOffset', [y, offset, anim]);
      },
      destroy() {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'destroy', []);
      },
      requestChildFocus(pos) {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'requestChildFocus', [pos]);
      },
      onScrollYGreaterReference() {
        this.$emit('scrollYGreaterReference');
      },
      clearPostTask() {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'clearAllPostTask', []);
      },

      clearFocus() {
        Vue.Native.callUIFunction(this.$refs.FastListView,
          'clearFocus', []);
      },
      onScrollYLesserReference() {
        this.$emit('scrollYLesserReference');
      },
      setSelectChildPosition(pos, b) {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'setSelectChildPosition', [pos, b]);
      },
      blockRootFocus() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'blockRootFocus', []);
      },
      unBlockRootFocus() {
        Vue.Native.callUIFunction(this.$refs.FastListView, 'unBlockRootFocus', []);
      },


    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['item-focused', 'itemFocused'],
        ['scroll', 'scroll'],
        ['item-click', 'itemClick'],
        ['item-bind', 'bindItem'],
        ['item-unbind', 'unbindItem'],
        ['scrollYGreaterReference', 'scrollYGreaterReference'],
        ['scrollYLesserReference', 'scrollYLesserReference'],
      ]);
      return h('FastListView',
        {
          on,
          ref: 'FastListView',
        }, this.$slots.default);
    },
  });

  Vue.registerElement('FastItemView', {
    component: {
      name: 'FastItemView',
      processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onBindItem':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            event.item = nativeEventParams.item;
            break;
          case 'onItemFocused':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            event.item = nativeEventParams.item;
            event.parentPosition = nativeEventParams.parentPosition;
            event.hasFocus = nativeEventParams.hasFocus;
            break;
          case 'onItemRecycled':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            event.item = nativeEventParams.item;
            break;
          case 'onAttachedToWindow':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            event.item = nativeEventParams.item;
            break;
          case 'onDetachedFromWindow':
            event.position = nativeEventParams.position;
            event.name = nativeEventParams.name;
            event.item = nativeEventParams.item;
            break;
          case 'onItemClick':
            event.position = nativeEventParams.position;
            event.index = nativeEventParams.index;
            event.item = nativeEventParams.item;
            event.name = nativeEventParams.name;
            event.parentPosition = nativeEventParams.parentPosition;
            break;
          default:
            break;
        }
        return event;
      },
    },

  });

  Vue.component('tv-item', {
    methods: {
      updateItem(posInList, data) {
        Vue.Native.callUIFunction(this.$refs.FastItemView, 'updateItem', [posInList, data]);
      },
      dispatchItemFunction(position, name, funcName, params) {
        Vue.Native.callUIFunction(this.$refs.FastItemView, 'dispatchItemFunction', [position, name, funcName, params]);
      },
      updateItemProps(position, name, toUpdateMap) {
        Vue.Native.callUIFunction(this.$refs.FastItemView, 'updateItemProps', [name, position, toUpdateMap, true]);
      },
      batch(pos) {
        Vue.Native.callUIFunction(this.$refs.FastItemView, 'batch', [pos]);
      },
      onBindItem(evt) {
        this.$emit('item-bind', evt);
      },
      onItemRecycled(evt) {
        this.$emit('item-unbind', evt);
      },
      onAttachedToWindow(evt) {
        this.$emit('item-attached', evt);
      },
      onDetachedFromWindow(evt) {
        this.$emit('item-detached', evt);
      },
      onItemFocused(evt) {
        this.$emit('item-focused', evt);
      },
      onItemClick(evt) {
        this.$emit('item-click', evt);
      },
    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['item-bind', 'bindItem'],
        ['item-unbind', 'itemRecycled'],
        ['item-focused', 'itemFocused'],
        ['item-attached', 'attachedToWindow'],
        ['item-detached', 'detachedFromWindow'],
      ]);
      return h('FastItemView',
        {
          on,
          ref: 'FastItemView',
        }, this.$slots.default);
    },
  });

  Vue.registerElement('FastFlexView', {
    component: {
      name: 'FastFlexView',
    },
  });

  Vue.component('tv-flex', {

    render(h) {
      return h('FastFlexView',
        {
          ref: 'FastFlexView',
        }, this.$slots.default);
    },
  });


  // Vue.registerElement('ListViewPager', {
  //   component: {
  //     name: 'ListViewPager',
  //
  //   },
  // });
  //
  // Vue.component('list-view-pager', {
  //   methods: {
  //     setListData(data) {
  //       Vue.Native.callUIFunction(this.$refs.viewPager, 'setListData', data);
  //     },
  //   },
  //
  //   render(h) {
  //     const on = getEventRedirector.call(this, []);
  //     return h('ListViewPager',
  //       {
  //         on,
  //         ref: 'viewPager',
  //       }, this.$slots.default);
  //   },
  // });

  Vue.registerElement('RecyclerViewPager', {
    component: {
      name: 'RecyclerViewPager',

    },
  });

  Vue.component('recycler-view-pager', {
    methods: {
      setListData(data) {
        Vue.Native.callUIFunction(this.$refs.viewPager, 'setListData', data);
      },
    },

    render(h) {
      const on = getEventRedirector.call(this, []);
      return h('RecyclerViewPager',
        {
          on,
          ref: 'viewPager',
        }, this.$slots.default);
    },
  });

  Vue.registerElement('TabsView', {
    component: {
      name: 'TabsView',
      processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onLoadPageData':
            event.pageIndex = nativeEventParams.pageIndex;
            event.itemCount = nativeEventParams.itemCount;
            break;
          case 'onLoadMoreData':
            event.pageIndex = nativeEventParams.pageIndex;
            event.itemCount = nativeEventParams.itemCount;
            break;
          case 'onTabsEvent':
            event.eventName = nativeEventParams.eventName;
            event.params = nativeEventParams.params;
            break;
          case 'onPageChanged':
            event.pageIndex = nativeEventParams.pageIndex;
            break;
        }
      }
    },

  });

  Vue.component('tabs', {
    methods: {
      setTabsData(param, data) {
        Vue.Native.callUIFunction(this.$refs.TabsView, 'setTabsData', [param, data]);
      },
      setPageData(pageIndex, params, pageData) {
        Vue.Native.callUIFunction(this.$refs.TabsView, 'setPageData', [pageIndex, params, pageData]);
      },
      addPageData(pageIndex, data) {
        Vue.Native.callUIFunction(this.$refs.TabsView, 'addPageData', [pageIndex, data]);
      },
      setCurrentPage(page) {
        Vue.Native.callUIFunction(this.$refs.TabsView, 'setCurrentPage', [page]);
      },
      invokeContentFunction(pageIndex, functionName, param) {
        Vue.Native.callUIFunction(this.$refs.TabsView, 'invokeContentFunction', [pageIndex, functionName, param]);
      },
      onLoadPageData(evt) {
        this.$emit('load-page', evt);
      },
      onLoadMoreData(evt) {
        this.$emit('load-more', evt);
      },
      onTabsEvent(evt) {
        this.$emit('tab-event', evt);
      },
      onPageChanged(evt) {
        this.$emit('page-changed', evt)
      }
    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['load-page', 'loadPageData'],
        ['load-more', 'loadMoreData'],
        ['tab-event', 'tabsEvent'],
        ['page-changed', 'pageChanged'],
      ]);
      return h('TabsView',
        {
          on,
          ref: 'TabsView',
        }, this.$slots.default);
    },
  });
}

export default ESWaterfallKit;
