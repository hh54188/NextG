import React from "react";
import { observer, inject } from "mobx-react";
import { Icon, Table, Segment, Dimmer, Loader } from "semantic-ui-react";

import FormFilter from "../FormFilter";

@inject("usersStore")
@observer
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.usersStore.fetchUsers();
  }
  render() {
    const {
      usersStore: { result, isLoading, error, fetchUsers }
    } = this.props;
    console.log(this.props.usersStore);
    return (
      <div>
        <Dimmer inverted active={isLoading}>
          <Loader inverted />
        </Dimmer>
        <Segment>
          <FormFilter />
        </Segment>
        <Table celled striped>
          <Table.Body>
            {result.map((person, index) => {
              const {
                name: { title, first, last }
              } = person;
              return (
                <Table.Row key={index}>
                  <Table.Cell collapsing>
                    {title} {first} {last}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
