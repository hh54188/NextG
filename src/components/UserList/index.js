import React from "react";
import { observer, inject } from "mobx-react";

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
    console.log(this.props);
    return <div>UserList</div>;
  }
}
