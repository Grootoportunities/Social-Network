import { SidebarType } from "../Store";
import { v1 } from "uuid";

type ActionsType = any;

const initialState = {
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
};

export const sidebarReducer = (
  state: SidebarType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
