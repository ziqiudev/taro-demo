export default defineAppConfig({
  pages: ["pages/overview/index", "pages/detail/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/overview/index",
        selectedIconPath: "assets/icon/overview_select.svg",
        iconPath: "assets/icon/overview_default.svg",
        text: "商品概览",
      },
      {
        pagePath: "pages/detail/index",
        selectedIconPath: "assets/icon/goods_select.svg",
        iconPath: "assets/icon/goods_default.svg",
        text: "商品详情",
      },
    ],
  },
});
