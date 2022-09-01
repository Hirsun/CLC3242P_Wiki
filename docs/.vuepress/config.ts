import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CLC3242P GXX",
  description: "中文传义小组项目 Wiki",

  base: "/CLC3242P_Wiki",

  theme,
});
