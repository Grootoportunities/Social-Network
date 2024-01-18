import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { state } from "./redux/State";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <App state={state} />
  </HashRouter>,
  document.getElementById("root"),
);
