/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import stores from "./modals";

import sampleStore from "./modals/SampleStore";
import App from "./components/App/components";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
