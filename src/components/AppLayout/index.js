import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Header, Divider } from "semantic-ui-react";
import { observer } from "mobx-react";

import UserList from "../UserList";
import UserDetail from "../UserDetail";

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
        <p>
          <Link to="/users/detail">User Detail Link</Link>
        </p>
        <p>
          <Link to="/users/list">User List Link</Link>
        </p>
        <Divider />
        <Switch>
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
