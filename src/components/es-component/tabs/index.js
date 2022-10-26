import es_tabs_viewpager_page from './es-tabs-viewpager-page';
import es_tabs_single_page from './es-tabs-single-page';

const ESTabsListPage = {
  es_tabs_viewpager_page: {
    name: '多Page模式',
    component: es_tabs_viewpager_page
  },
  es_tabs_tv_list_page: {
    name: '单Page模式(tv-list)',
    component: es_tabs_single_page
  }
};

export default ESTabsListPage;
