import React, { Component } from "react";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";

const SimpleSideBar = props => {
  return (
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
  );
};

export default SimpleSideBar;
