import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Divider } from "semantic-ui-react";
import { observer } from "mobx-react";
import { Transition, animated } from "react-spring";

import UserList from "../UserList";
import UserDetail from "../UserDetail";

class AnimationWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log("AnimationWrapper Constructor");
  }
  componentDidMount() {
    console.log("AnimationWrapper Mount", this.props);
  }
  componentWillUnmount() {
    console.log("AnimationWrapper Unmount");
  }
  render() {
    return (
      <animated.div>
        <div>Hello World</div>
        {/* <Switch>
          <Route path={`${this.props.match.path}/list`} component={UserList} />
          <Route
            path={`${this.props.match.path}/detail`}
            component={UserDetail}
          />
        </Switch> */}
      </animated.div>
    );
  }
}

@observer
export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Header.Content>Application Content</Header.Content>
        </Header>
        <Divider />
        <Switch>
          {/* <Transition
          config={{ duration: 3000 }}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => {
            console.log("style--->", style);
            return (
              <animated.div {...style}>
                <Switch>
                  <Route
                    path={`${this.props.match.path}/list`}
                    component={UserList}
                  />
                  <Route
                    path={`${this.props.match.path}/detail`}
                    component={UserDetail}
                  />
                </Switch>
              </animated.div>
            );
          }}
        </Transition> */}
          <Route path={`${this.props.match.path}/list`} component={UserList} />
          <Route
            path={`${this.props.match.path}/detail`}
            component={UserDetail}
          />
        </Switch>
      </div>
    );
  }
}
