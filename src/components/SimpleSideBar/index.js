import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";

import styles from "./index.less";

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
      <Menu.Item className={styles.menuItem} name="home">
        <Link to="/">
          <Icon name="home" />
          <span className={styles.menuItemLabel}>Home 家</span>
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} name="gamepad">
        <Link to="/list">
          <Icon name="gamepad" />
          <span className={styles.menuItemLabel}>List 列表</span>
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} name="camera">
        <Link to="/detail">
          <Icon name="camera" />
          <span className={styles.menuItemLabel}>Detail</span>
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} name="camera">
        <Link to="/other">
          <Icon name="camera" />
          <span className={styles.menuItemLabel}>Other</span>
        </Link>
      </Menu.Item>
    </Sidebar>
  );
};

export default SimpleSideBar;
