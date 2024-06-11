import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { ProfileActionsType, profileReducer } from "./reducers/profileReducer";
import {
  MessagesActionsType,
  messagesReducer,
} from "./reducers/messagesReducer";
import { SidebarActionsType, sidebarReducer } from "./reducers/sidebarReducer";
import { UsersActionsType, usersReducer } from "./reducers/usersReducer";
import { AuthActionsType, authReducer } from "./reducers/authReducer";
import thunk, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./reducers/appReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  userAuth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

//TYPES

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

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// @ts-ignore
window.__store__ = store;
