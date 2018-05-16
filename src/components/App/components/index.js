import React from "react";
import { observer } from "mobx-react";

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.store.fullName}</h1>
        <input
          placeholder="first name"
          onChange={event => this.props.store.setFirstName(event.target.value)}
        />
        <input
          placeholder="last name"
          onChange={event => this.props.store.setLastName(event.target.value)}
        />
      </div>
    );
  }
}
