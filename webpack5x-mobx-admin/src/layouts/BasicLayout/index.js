import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
import MainFooter from "../MainFooter";

import './style.less';



/** #### TODO: 封装：页面的布局 - 侧边栏+头部+内容+底部  */
const BasicLayout = ({ route, children }) => (
  <Layout className="main-layout">
    <SiderMenu routes={route.childRoutes} />
    {/* 左侧菜单导航 */}
    <Layout className="main-layout-right">
      <MainHeader />
      <Layout.Content className="main-layout-content">
        {children}
        <MainFooter />
      </Layout.Content>
    </Layout>
  </Layout>
);

export default BasicLayout;
