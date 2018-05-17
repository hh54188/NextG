import React from "react";
import { observer, inject } from "mobx-react";

@inject("sampleStore")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const store = this.props.sampleStore;
    return (
      <div>
        <h1>{store.fullName}</h1>
        <input
          placeholder="first name"
          onChange={event => store.setFirstName(event.target.value)}
        />
        <input
          placeholder="last name"
          onChange={event => store.setLastName(event.target.value)}
        />
      </div>
    );
  }
}
