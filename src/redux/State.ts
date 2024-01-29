import { v1 } from "uuid";

export type DialogType = { id: number; name: string };
export type MessageType = { id: number; message: string };
export type PostType = { id: string; postMessage: string; likes: number };
export type SidebarElementType = { id: string; title: string; link: string };
export type FriendOnlineType = { id: string; name: string };

export type ProfilePageType = { posts: PostType[]; postValue: string };
export type SidebarType = {
  elements: SidebarElementType[];
  friendsOnline: FriendOnlineType[];
};
export type MessagesPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
  messageValue: string;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
  sidebar: SidebarType;
};

let rerenderEntireTree = (state: StateType) =>
  console.log("State has been changed");

export const state: StateType = {
  profilePage: {
    posts: [
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
    ],
    postValue: "",
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Daniil" },
      { id: 2, name: "Anastasia" },
      { id: 3, name: "Danik" },
      { id: 4, name: "Semen" },
      { id: 5, name: "Max" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you doing?" },
      { id: 3, message: "Bye" },
      { id: 4, message: "I'm Semen" },
      { id: 5, message: "And i'm Max" },
    ],
    messageValue: "",
  },

  sidebar: {
    elements: [
      { id: v1(), title: "Profile", link: "/profile" },
      { id: v1(), title: "Messages", link: "/messages" },
      { id: v1(), title: "News", link: "/news" },
      { id: v1(), title: "Music", link: "/music" },
      { id: v1(), title: "Settings", link: "/settings" },
    ],

    friendsOnline: [
      { id: v1(), name: "Sviatoslav" },
      { id: v1(), name: "Maria" },
      { id: v1(), name: "Andrey" },
    ],
  },
};

export const addPost = () => {
  const newPost: PostType = {
    id: v1(),
    postMessage: state.profilePage.postValue,
    likes: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.postValue = "";
  rerenderEntireTree(state);
};

export const addMessage = () => {
  const newMessageElement: MessageType = {
    id: 6,
    message: state.messagesPage.messageValue,
  };

  state.messagesPage.messages.push(newMessageElement);
  state.messagesPage.messageValue = "";

  rerenderEntireTree(state);
};

export const setPostValue = (value: string) => {
  state.profilePage.postValue = value;

  rerenderEntireTree(state);
};

export const setMessageValue = (value: string) => {
  state.messagesPage.messageValue = value;

  rerenderEntireTree(state);
};

export const subscribe = (observer: (state: StateType) => void) => {
  rerenderEntireTree = observer;
};
