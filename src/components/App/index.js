import React, { Component } from "react";
import "antd/dist/antd.css";

import CommonLayout from "../CommonLayout";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CommonLayout />
      </div>
    );
  }
}
