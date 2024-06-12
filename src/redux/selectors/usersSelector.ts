import { RootStateType } from "../redux-store";

export const getPage = (state: RootStateType) => state.usersPage.page;
export const getUsers = (state: RootStateType) => state.usersPage.users;
export const getCount = (state: RootStateType) => state.usersPage.count;
export const getIsPending = (state: RootStateType) => state.usersPage.isPending;
export const getTotalUsersCount = (state: RootStateType) =>
  state.usersPage.totalUsersCount;
export const getCurrentPortionNumber = (state: RootStateType) =>
  state.usersPage.currentPortionNumber;
