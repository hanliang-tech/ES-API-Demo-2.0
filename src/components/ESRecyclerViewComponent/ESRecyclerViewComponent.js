import Vue from 'vue';
import {getEventRedirector} from './utils/utils';

function ESRecyclerViewComponent() {
  Vue.registerElement('ESRecyclerViewComponent', {
    comment: {
      name: 'ESRecyclerViewComponent',
    },
  });

  Vue.component('tab_list_view', {
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

      methods: {
        setTabListData(data) {
          Vue.Native.callUIFunction(this.$refs.tabListView, 'setTabListData', data);
        },
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
      return h('ESRecyclerViewComponent',
        {
          on,
          ref: 'tabListView',
        }, this.$slots.default);
    },
  });
}

export default ESRecyclerViewComponent;
