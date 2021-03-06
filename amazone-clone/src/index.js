import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import { initialState } from "./reducer";
import { reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
