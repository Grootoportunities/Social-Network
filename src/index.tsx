import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { StoreType } from "./redux/Store";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/redux-store";

const rerenderEntireTree = (store: StoreType) => {
  ReactDOM.render(
    <HashRouter>
      <GlobalStyle />
      <App store={store} />
    </HashRouter>,
    document.getElementById("root"),
  );
};

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store));
// store.subscribe(rerenderEntireTree);
