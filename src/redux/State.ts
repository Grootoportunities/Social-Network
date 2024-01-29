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

export type StoreType = {
  _state: StateType;

  getState: () => StateType;
  addPost: () => void;
  addMessage: () => void;

  setPostValue: (value: string) => void;
  setMessageValue: (value: string) => void;

  _callSubscriber: (store: StoreType) => void;

  subscribe: (observer: (store: StoreType) => void) => void;
};

export const store: StoreType = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber(store: StoreType) {
    console.log("State has been changed");
  },
  addPost() {
    const newPost: PostType = {
      id: v1(),
      postMessage: this._state.profilePage.postValue,
      likes: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.postValue = "";
    this._callSubscriber(store);
  },
  addMessage() {
    const newMessageElement: MessageType = {
      id: 6,
      message: this._state.messagesPage.messageValue,
    };

    this._state.messagesPage.messages.push(newMessageElement);
    this._state.messagesPage.messageValue = "";

    this._callSubscriber(store);
  },
  setPostValue(value: string) {
    this._state.profilePage.postValue = value;

    this._callSubscriber(store);
  },
  setMessageValue(value: string) {
    this._state.messagesPage.messageValue = value;

    this._callSubscriber(store);
  },
  subscribe(observer: (store: StoreType) => void) {
    this._callSubscriber = observer;
  },
};
