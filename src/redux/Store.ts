import { v1 } from "uuid";
import { ProfilePageType, ProfileType } from "./reducers/profileReducer";
import {
  AddMessageAT,
  MessagesPageType,
  SetMessageValueAT,
} from "./reducers/messagesReducer";
import { SidebarType } from "./reducers/sidebarReducer";

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
  sidebar: SidebarType;
};

export type ActionsType = AddMessageAT | SetMessageValueAT;

export type StoreType = {
  _state: StateType;
  _callSubscriber: (store: StoreType) => void;

  getState: () => StateType;
  subscribe: (observer: (store: StoreType) => void) => void;

  dispatch: (action: ActionsType) => void;
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
      profile: {} as ProfileType,
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

  _callSubscriber(store: StoreType) {
    console.log("State has been changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer: (store: StoreType) => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionsType) {
    // profileReducer(this._state.profilePage, action);
    // messagesReducer(this._state.messagesPage, action);
    // sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(store);
  },
};
