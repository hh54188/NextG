import React from "react";
import { observer, inject } from "mobx-react";

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}
