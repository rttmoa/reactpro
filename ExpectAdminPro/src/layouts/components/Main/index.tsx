import React from "react";
import { Layout } from "antd";
import { useDebounceFn } from "ahooks";
import { RefreshContext } from "@/context/Refresh";
import { useEffect, createRef, useContext } from "react";
import { RouteObjectType } from "@/routers/interface";
import { useLocation, useOutlet } from "react-router-dom";
import { setGlobalState } from "@/redux/modules/global";
import { RootState, useDispatch, useSelector } from "@/redux";
// 动画效果： CSSTransition 过滤 ， SwitchTransition 组件切换显示与隐藏
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Maximize from "./components/Maximize";
import LayoutTabs from "@/layouts/components/Tabs";
import LayoutFooter from "@/layouts/components/Footer";
import "./index.less";

type RouteTypeWithNodeRef = {
  nodeRef?: React.Ref<HTMLElement> | undefined;
} & RouteObjectType;

const { Content } = Layout;

const LayoutMain: React.FC = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { outletShow } = useContext(RefreshContext);

  const maximize = useSelector((state: RootState) => state.global.maximize); // 是否 最大化
  const isCollapse = useSelector((state: RootState) => state.global.isCollapse); // 是否 折叠
  const flatMenuList = useSelector((state: RootState) => state.auth.flatMenuList); // 菜单权限列表 (扁平化数组)

  // 监视窗口变化，折叠菜单
  const { run } = useDebounceFn(
    () => {
      const screenWidth = document.body.clientWidth;
      if (screenWidth) {
        const shouldCollapse = screenWidth < 1200;
        if (isCollapse !== shouldCollapse) dispatch(setGlobalState({ key: "isCollapse", value: shouldCollapse }));
      }
    },
    { wait: 100 }
  );
  useEffect(() => {
    window.addEventListener("resize", run, false);
    return () => window.removeEventListener("resize", run);
  }, []);

  // 监控当前页面是否最大化，动态添加 class
  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement;
    // console.log(maximize);
    root.classList.toggle("main-maximize", maximize);
  }, [maximize]);

  // Solve the transition animation that causes useEffect to execute multiple times
  // @see: http://reactcommunity.org/react-transition-group/with-react-router
  const menuList: RouteTypeWithNodeRef[] = flatMenuList.map(item => ({ ...item, nodeRef: createRef() }));
  const { nodeRef } = menuList.find(route => route.path === pathname) ?? {};

  return (
    <React.Fragment>
      <Maximize />
      <LayoutTabs />
      <SwitchTransition>
        <CSSTransition classNames="fade" key={pathname} nodeRef={nodeRef} timeout={300} exit={false} unmountOnExit>
          <Content ref={nodeRef}>{outletShow && outlet}</Content>
        </CSSTransition>
      </SwitchTransition>
      <LayoutFooter />
    </React.Fragment>
  );
};

export default LayoutMain;
