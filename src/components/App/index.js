import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import AppLayout from "../AppLayout";

@observer
export default class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={true}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher
            style={{
              marginLeft: -150,
              paddingLeft: 150,
              width: "100%",
              overflowY: "scroll",
              height: "100%"
            }}
          >
            <Segment basic>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={props => <AppLayout {...props} title="" />}
                />
                <Route
                  path="/users"
                  component={props => <AppLayout {...props} title="" />}
                />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
