import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Divider } from "semantic-ui-react";
import { observer } from "mobx-react";

import UserList from "../UserList";

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
          <Route path={`${this.props.match.path}/list`} component={UserList} />
        </Switch>
      </div>
    );
  }
}
