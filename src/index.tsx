import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { addMessage, addPost, state } from "./redux/State";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <App
      state={state}
      addPostCallback={addPost}
      addMessageCallback={addMessage}
    />
  </HashRouter>,
  document.getElementById("root"),
);
