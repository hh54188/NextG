import React from "react";
import {
  Segment,
  Header,
  Button,
  Divider,
  Icon,
  Table,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";

import FormFilter from "../FormFilter";
import UserList from "../UserList";

const AppLayout = props => {
  return (
    <div>
      {/* <Dimmer active inverted>
        <Loader inverted content="加载中" />
      </Dimmer> */}
      <Header as="h2">
        <Header.Content>Application Content</Header.Content>
      </Header>
      <Divider />
      <Segment>
        <FormFilter />
      </Segment>
      <UserList />
      <UserList />
    </div>
  );
};

export default AppLayout;
