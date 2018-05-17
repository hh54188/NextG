/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import stores from "./modals";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
