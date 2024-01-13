import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { v1 } from "uuid";

export type PostType = {
  id: string;
  postMessage: string;
  likes: number;
};

export type DialogsType = {
  id: string;
  name: string;
};

export type MessagesType = {
  id: string;
  message: string;
};

const posts: PostType[] = [
  {
    id: v1(),
    postMessage: "You are seeing this page in the final result",
    likes: 15,
  },
  {
    id: v1(),
    postMessage: "Hello, i'm developing this social network right now",
    likes: 20,
  },
];

const dialogs: DialogsType[] = [
  { id: v1(), name: "Daniil" },
  { id: v1(), name: "Anastasia" },
  { id: v1(), name: "Danik" },
  { id: v1(), name: "Semen" },
  { id: v1(), name: "Max" },
];

const messages: MessagesType[] = [
  { id: v1(), message: "Hi!" },
  { id: v1(), message: "How are you doing?" },
  { id: v1(), message: "Bye" },
];

ReactDOM.render(
  <>
    <GlobalStyle />
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </>,
  document.getElementById("root"),
);
