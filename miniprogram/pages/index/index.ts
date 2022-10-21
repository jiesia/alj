import { getWindowInfo } from '../../utils/jsapi';

const tabs = [
  { key: 0, title: '关注' },
  { key: 1, title: '推荐' },
  { key: 2, title: '同城' },
];

Page({
  data: {
    statusBarHeight: 0, // 状态栏高度
    titleBarHeight: 44, // 标题栏高度
    tabs, // 标题栏 tabs
    activeTab: 1, // 当前选中的 tab
  },
  onLoad() {
    const { statusBarHeight } = getWindowInfo();
    this.setData({ statusBarHeight });
  },
  // 切换 tab
  toggleTab(e: WechatMiniprogram.BaseEvent<{}, {item: typeof tabs[number]}>) {
    const { key } = e.target.dataset.item;
    this.setData({ activeTab: key });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
});
