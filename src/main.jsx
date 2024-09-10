import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
