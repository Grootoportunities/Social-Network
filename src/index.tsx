import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { state } from "./redux/State";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App state={state} />
  </>,
  document.getElementById("root"),
);
