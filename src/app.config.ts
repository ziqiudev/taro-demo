export default defineAppConfig({
  pages: ["pages/overview/index", "pages/detail/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#000000",
    selectedColor: "#21d86e",
    list: [
      {
        pagePath: "pages/overview/index",
        text: "商品概览",
      },
      {
        pagePath: "pages/detail/index",
        text: "商品详情",
      },
    ],
  },
});
