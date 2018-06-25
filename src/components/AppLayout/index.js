import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Header, Divider } from "semantic-ui-react";
import { observer } from "mobx-react";
import { Spring, Transition, animated, config } from "react-spring";

import UserList from "../UserList";
import UserDetail from "../UserDetail";
import Other from "../Other";

const AnimationWrapper = ({ style, children }) => {
  return <animated.div style={style}>{children}</animated.div>;
};

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
        <Transition
          config={config.slow}
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => {
            return (
              <Switch>
                <Route
                  path={`${this.props.match.path}/list`}
                  component={() => {
                    return (
                      <AnimationWrapper style={style}>
                        <UserList />
                      </AnimationWrapper>
                    );
                  }}
                />
                <Route
                  path={`${this.props.match.path}/detail`}
                  component={() => {
                    return (
                      <AnimationWrapper style={style}>
                        <UserDetail />
                      </AnimationWrapper>
                    );
                  }}
                />
                <Route
                  path={`${this.props.match.path}/other`}
                  component={() => {
                    return (
                      <AnimationWrapper style={style}>
                        <Other />
                      </AnimationWrapper>
                    );
                  }}
                />
              </Switch>
            );
          }}
        </Transition>
      </div>
    );
  }
}
