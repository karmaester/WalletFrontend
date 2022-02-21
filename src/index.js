import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styles from "./index.scss";
// import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div className={styles.app}>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
  // </Provider>
);
