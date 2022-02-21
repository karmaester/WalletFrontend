import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styles from "./index.scss";
import store, { Persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <BrowserRouter>
        <div className={styles.app}>
          <App />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
