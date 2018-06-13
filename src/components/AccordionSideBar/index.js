import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Accordion, Segment, Menu, Icon } from "semantic-ui-react";

import styles from "./index.less";

const activeItem = "enterprise";

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
      <Menu.Item>
        <Menu.Header className={styles.textAlignLeft}>Products</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            className={styles.textAlignLeft}
            name="enterprise"
            active={activeItem === "enterprise"}
          >
            <Link to="/detail">用户详情</Link>
          </Menu.Item>
          <Menu.Item
            className={styles.textAlignLeft}
            name="consumer"
            active={activeItem === "consumer"}
          >
            <Link to="/users">用户列表</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header className={styles.textAlignLeft}>
          CMS Solutions
        </Menu.Header>

        <Menu.Menu>
          <Menu.Item
            className={styles.textAlignLeft}
            name="rails"
            active={activeItem === "rails"}
          />
          <Menu.Item
            className={styles.textAlignLeft}
            name="python"
            active={activeItem === "python"}
          />
          <Menu.Item
            className={styles.textAlignLeft}
            name="php"
            active={activeItem === "php"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>
    </Sidebar>
  );
};

export default SimpleSideBar;
