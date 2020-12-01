import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
