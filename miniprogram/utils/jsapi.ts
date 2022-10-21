/**
 * wx.getWindowInfo, 开启缓存
 */
let windowInfo: WechatMiniprogram.WindowInfo;
export function getWindowInfo(): WechatMiniprogram.WindowInfo {
  return windowInfo || (windowInfo = wx.getWindowInfo());
}
