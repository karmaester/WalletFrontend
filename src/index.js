import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styles from "./index.scss";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className={styles.app}>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
