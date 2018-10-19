import React from "react";
import { observer, inject } from "mobx-react";

@inject("usersStore")
@inject("sampleStore")
@observer
export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      sampleStore: { fullName, fistName, lastName, setFirstName, setLastName }
    } = this.props;
    return <div>{fullName}</div>;
  }
}
