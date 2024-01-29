import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import {
  addMessage,
  addPost,
  setMessageValue,
  setPostValue,
  state,
  StateType,
  subscribe,
} from "./redux/State";
import { HashRouter } from "react-router-dom";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <HashRouter>
      <GlobalStyle />
      <App
        state={state}
        addPostCallback={addPost}
        addMessageCallback={addMessage}
        setPostValueCallback={setPostValue}
        setMessageValueCallback={setMessageValue}
      />
    </HashRouter>,
    document.getElementById("root"),
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
