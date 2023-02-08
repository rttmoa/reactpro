import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";
import News from "./components/News";

import "./assets/css/index.css";

//antd 布局
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },

  {
    path: "/user",
    component: User,
  },
  {
    path: "/news",
    component: News,
  },
];

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo"></div>

              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>
                    {" "}
                    <Link to="/">首页组件</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>
                    <Link to="/news">新闻页面</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>
                    <Link to="/user">用户页面</Link>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280,
                }}
              >
                {routes.map((route, key) => {
                  if (route.exact) {
                    return (
                      <Route
                        key={key}
                        exact
                        path={route.path}
                        component={route.component}
                      />
                    );
                  } else {
                    return (
                      <Route
                        key={key}
                        path={route.path}
                        component={route.component}
                      />
                    );
                  }
                })}
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
