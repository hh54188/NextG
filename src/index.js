/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";

import sampleStore from "./modals/SampleStore";
import App from "./components/App/components";

ReactDOM.render(<App store={sampleStore} />, document.querySelector("#app"));
