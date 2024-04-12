const initialState: UsersType = {
  users: [],
  count: 3,
  totalUsersCount: 0,
  page: 1,
};

export const usersReducer = (
  state: UsersType = initialState,
  action: ActionsType,
): UsersType => {
  switch (action.type) {
    case "UN-FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, isFriend: !u.isFriend } : u,
        ),
      };
    case "SET-USERS":
      return { ...state, users: [...action.users] };
    case "SET-PAGE":
      return { ...state, page: action.page };
    case "SET-COUNT":
      return { ...state, count: action.count };
    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

//ACTIONS

export const un_followAC = (id: string) => ({ type: "UN-FOLLOW", id }) as const;
export const setUsersAC = (users: UserType[]) =>
  ({ type: "SET-USERS", users }) as const;
export const setPageAC = (page: number) =>
  ({ type: "SET-PAGE", page }) as const;
export const setCountAC = (count: number) =>
  ({ type: "SET-COUNT", count }) as const;
export const setTotalUsersCountAC = (totalUsersCount: number) =>
  ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount,
  }) as const;

//TYPES

export type LocationType = { country: string; city: string };
export type UsersType = {
  users: UserType[];
  count: number;
  totalUsersCount: number;
  page: number;
};
export type UserType = {
  id: string;
  name: string;
  status: string;
  location: LocationType;
  ava: string;
  isFriend: boolean;
};

type ActionsType =
  | ReturnType<typeof un_followAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setPageAC>
  | ReturnType<typeof setCountAC>
  | ReturnType<typeof setTotalUsersCountAC>;
