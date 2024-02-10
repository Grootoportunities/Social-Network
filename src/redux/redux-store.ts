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
