import { v1 } from "uuid";

type FriendOnlineType = { id: string; name: string };
type SidebarElementType = { id: string; title: string; link: string };
export type SidebarType = {
  elements: SidebarElementType[];
  friendsOnline: FriendOnlineType[];
};

export type SidebarActionsType = any;

const initialState: SidebarType = {
  elements: [
    { id: v1(), title: "Profile", link: "/profile" },
    { id: v1(), title: "Messages", link: "/messages" },
    { id: v1(), title: "Users", link: "/users" },
    { id: v1(), title: "News", link: "/news" },
    { id: v1(), title: "Music", link: "/music" },
    { id: v1(), title: "Settings", link: "/settings" },
  ],

  friendsOnline: [
    { id: v1(), name: "Sviatoslav" },
    { id: v1(), name: "Maria" },
    { id: v1(), name: "Andrey" },
  ],
};

export const sidebarReducer = (
  state: SidebarType = initialState,
  action: SidebarActionsType,
): SidebarType => {
  switch (action.type) {
    default:
      return state;
  }
};
