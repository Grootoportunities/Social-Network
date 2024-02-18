import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { messagesReducer } from "./reducers/messagesReducer";
import { sidebarReducer } from "./reducers/sidebarReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);

export type RootStoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>; //для типизации state
export type RootDispatchType = ReturnType<typeof store.dispatch>;

// @ts-ignore
window.store = store;
