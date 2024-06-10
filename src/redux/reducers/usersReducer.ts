import { usersAPI } from "../../api/usersAPI";
import { followAPI } from "../../api/followAPI";
import { AppThunksType } from "../redux-store";

const initialState: UsersType = {
  users: [],
  count: 3,
  totalUsersCount: 0,
  page: 1,
  isPending: true,
};

export const usersReducer = (
  state: UsersType = initialState,
  action: UsersActionsType,
): UsersType => {
  switch (action.type) {
    case "users/UN-FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: action.shouldSubscribe } : u,
        ),
      };
    case "users/SET-USERS":
      return { ...state, users: [...action.users] };
    case "users/SET-PAGE":
      return { ...state, page: action.page };
    case "users/SET-COUNT":
      return { ...state, count: action.count };
    case "users/SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    case "users/SET-IS-PENDING":
      return { ...state, isPending: action.isPending };
    case "users/SET-USER-ENTITY-STATUS":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id
            ? { ...user, userEntityStatus: action.entityStatus }
            : user,
        ),
      };
    default:
      return state;
  }
};

//ACTIONS

export const un_followAC = (id: number, shouldSubscribe: boolean) =>
  ({ type: "users/UN-FOLLOW", id, shouldSubscribe }) as const;
export const setUsersAC = (users: UserType[]) =>
  ({ type: "users/SET-USERS", users }) as const;
export const setPageAC = (page: number) =>
  ({ type: "users/SET-PAGE", page }) as const;
export const setCountAC = (count: number) =>
  ({ type: "users/SET-COUNT", count }) as const;
export const setTotalUsersCountAC = (totalUsersCount: number) =>
  ({
    type: "users/SET-TOTAL-USERS-COUNT",
    totalUsersCount,
  }) as const;
export const setIsPendingAC = (isPending: boolean) =>
  ({ type: "users/SET-IS-PENDING", isPending }) as const;
export const setUserEntityStatusAC = (entityStatus: boolean, id: number) =>
  ({ type: "users/SET-USER-ENTITY-STATUS", entityStatus, id }) as const;

//THUNKS

export const getUsersTC =
  (page: number, count: number): AppThunksType =>
  async (dispatch) => {
    dispatch(setIsPendingAC(true));

    const data = await usersAPI.getUsers(page, count);
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
    dispatch(setIsPendingAC(false));
  };

export const getUserOnPageChangeTC =
  (page: number, count: number): AppThunksType =>
  async (dispatch) => {
    dispatch(setIsPendingAC(true));
    dispatch(setPageAC(page));

    const data = await usersAPI.getUsers(page, count);
    dispatch(setUsersAC(data.items));
    dispatch(setIsPendingAC(false));
  };

export const setUn_FollowTC =
  (userID: number): AppThunksType =>
  async (dispatch) => {
    dispatch(setUserEntityStatusAC(true, userID));
    const data = await followAPI.getFollow(userID);
    const res = data
      ? await followAPI.deleteFollow(userID)
      : await followAPI.createFollow(userID);
    res.resultCode === 0 && dispatch(un_followAC(userID, !data));
    dispatch(setUserEntityStatusAC(false, userID));
  };

//TYPES

export type LocationType = { country: string; city: string };
export type UsersType = {
  users: UserType[];
  count: number;
  totalUsersCount: number;
  page: number;
  isPending: boolean;
};

type PhotosType = {
  small: string | null;
  large: string | null;
};

export type UserType = {
  id: number;
  name: string;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
  userEntityStatus: boolean;
};

export type UsersActionsType =
  | ReturnType<typeof un_followAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setPageAC>
  | ReturnType<typeof setCountAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setIsPendingAC>
  | ReturnType<typeof setUserEntityStatusAC>;
