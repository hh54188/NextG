import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Transition, animated, config } from "react-spring";

import AppLayout from "../AppLayout";
// import SimpleSideBar from "../SimpleSideBar";
import AccordionSideBar from "../AccordionSideBar";

import UserList from "../UserList";
import UserDetail from "../UserDetail";

@withRouter
@observer
export default class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Sidebar.Pushable as={Segment}>
          {/* <SimpleSideBar /> */}
          <AccordionSideBar />
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
              <Transition
                config={config.slow}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0, height: 0 }}
              >
                {style => {
                  return (
                    <animated.div {...style}>
                      <Switch>
                        <Route exact path="/detail" component={UserDetail} />
                        <Route exact path="/users" component={UserList} />
                        {/* <Route
                          path="/"
                          exact
                          component={props => <AppLayout {...props} title="" />}
                        />
                        <Route
                          path="/users"
                          component={props => <AppLayout {...props} title="" />}
                        /> */}
                      </Switch>
                    </animated.div>
                  );
                }}
              </Transition>
              {/* <Switch>
                <Route
                  path="/"
                  exact
                  component={props => <AppLayout {...props} title="" />}
                />
                <Route
                  path="/users"
                  component={props => <AppLayout {...props} title="" />}
                />
              </Switch> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
