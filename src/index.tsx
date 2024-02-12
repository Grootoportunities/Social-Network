import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { HashRouter } from "react-router-dom";
import { RootStoreType, store } from "./redux/redux-store";
import { Provider } from "react-redux";

const rerenderEntireTree = (store: RootStoreType) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById("root"),
  );
};

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store));
