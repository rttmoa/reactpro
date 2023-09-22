import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { RouteObjectType } from "@/routers/interface";

export type LayoutType = "vertical" | "classic" | "transverse" | "columns";

export type LanguageType = "zh" | "en" | null;

/* GlobalState */
export interface GlobalState {
  layout: LayoutType;
  componentSize: SizeType;
  compactAlgorithm: boolean;
  borderRadius: number;
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  menuSplit: boolean;
  siderInverted: boolean;
  headerInverted: boolean;
  isCollapse: boolean;
  accordion: boolean;
  watermark: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  tabsDrag: boolean;
  footer: boolean;
  themeDrawerVisible: boolean;
}

/* tabsMenuProps */
export interface TabsListProp {
  icon: string;
  title: string;
  path: string;
  closable: boolean;
}

/* TabsState */
export interface TabsState {
  tabsList: TabsListProp[];
}

/* UserState */
export interface UserState {
  token: string;
  userInfo: { name: string };
}

/* AuthState */
export interface AuthState {
  // 从接口获取的 Array
  authMenuList: RouteObjectType[]; // (14)[{…}, {…}, {…}, {…}, ..................]
  showMenuList: RouteObjectType[];
  flatMenuList: RouteObjectType[]; // (60)Array: [{…}, {…}, {…}, {…}, {…}, ...............]
  authButtonList: {
    [key: string]: string[];
  };
}
