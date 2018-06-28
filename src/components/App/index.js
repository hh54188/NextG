import React, { Component } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import AppLayout from "../AppLayout";
import SimpleSideBar from "../SimpleSideBar";
import AccordionSideBar from "../AccordionSideBar";
import NestSideBar from "../NestSideBar";

import UserList from "../UserList";
import UserDetail from "../UserDetail";
import Other from "../Other";

@withRouter
@observer
export default class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Sidebar.Pushable as={Segment}>
          <SimpleSideBar />
          {/* <AccordionSideBar /> */}
          {/* <NestSideBar /> */}
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
                <Route path="/" exact component={null} />
                <Route path="/list" component={UserList} />
                <Route path="/detail" component={UserDetail} />
                <Route path="/other" component={Other} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
