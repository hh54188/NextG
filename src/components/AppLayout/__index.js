import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import UserList from "../UserList";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = props => {
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Switch>
            <Route
              path={`${props.match.path}/list`}
              exact
              component={UserList}
            />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
