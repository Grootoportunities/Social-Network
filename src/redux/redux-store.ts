import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProfileActionsType, profileReducer } from "./reducers/profileReducer";
import {
  MessagesActionsType,
  messagesReducer,
} from "./reducers/messagesReducer";
import { SidebarActionsType, sidebarReducer } from "./reducers/sidebarReducer";
import { UsersActionsType, usersReducer } from "./reducers/usersReducer";
import { AuthActionsType, authReducer } from "./reducers/authReducer";
import thunk, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  userAuth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>; //для типизации state

type RootActionsType =
  | AuthActionsType
  | MessagesActionsType
  | ProfileActionsType
  | SidebarActionsType
  | UsersActionsType;

export type AppThunksType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  RootActionsType
>;

// @ts-ignore
window.store = store;
