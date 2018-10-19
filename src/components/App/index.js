import React, { Component } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { observer } from "mobx-react";

import ParentComponent from "../ParentComponent";

@withRouter
@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <ParentComponent />
      </div>
    );
  }
}
