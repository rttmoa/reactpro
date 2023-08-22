import React from 'react';
import { Layout, Dropdown, Menu, Row, Col } from 'antd';
import { SmileOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import { appStores } from '../../stores';
import './style.less';

const menu = (
  <Menu>
    <Menu.Item key="0"><SmileOutlined />个人信息</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/login"><LogoutOutlined />&nbsp; 退出登录</Link>
    </Menu.Item>
    <Menu.Item key="2">Dropdown/Menu使用</Menu.Item>
  </Menu>
);

// Header：使用mobx管理侧边栏的展开与关闭
const MainHeader = () => {
  const { globalStore } = appStores(); /** #### TODO: Mobx获取数据  */
  // console.log(globalStore)

  return (
    <Layout.Header className="main-header">
      <Row type="flex" style={{ paddingRight: 20 }}>
        <Col style={{ flex: 1 }}>
          <span className="trigger" onClick={globalStore.toggleCollapsed}>
            {globalStore.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Col>
        <Col>
          <Dropdown overlay={menu} trigger={['click', 'hover']} placement="bottom">
            <div className="user-info">
              <span className="user-img" />
              <span className="user-name">{globalStore.userInfo.loginName}</span>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default observer(MainHeader);
