import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { messagesReducer } from "./reducers/messagesReducer";
import { sidebarReducer } from "./reducers/sidebarReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  userAuth: authReducer,
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>; //для типизации state

// @ts-ignore
window.store = store;
