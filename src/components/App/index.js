import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { observer, inject } from "mobx-react";

import UserList from "../UserList";
import AppLayout from "../AppLayout";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>用户列表</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              component={props => <AppLayout {...props} title="" />}
            />
            <Route path="/list" component={UserList} />
          </Switch>
        </Layout>
      </Layout>
    );
  }
}
