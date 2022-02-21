import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styles from "./index.scss";
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <BrowserRouter>
      <div className={styles.app}>
        <App />
      </div>
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
