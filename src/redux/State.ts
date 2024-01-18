import { v1 } from "uuid";

export type DialogType = { id: number; name: string };
export type MessageType = { id: number; message: string };
export type PostType = { id: string; postMessage: string; likes: number };
export type SidebarElementType = { id: string; title: string; link: string };
export type FriendOnlineType = { id: string; name: string };

export type ProfilePageType = { posts: PostType[] };
export type SidebarType = {
  elements: SidebarElementType[];
  friendsOnline: FriendOnlineType[];
};
export type MessagesPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
  sidebar: SidebarType;
};

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
};
