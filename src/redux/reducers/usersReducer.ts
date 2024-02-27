export type UsersType = { users: UserType[] };
export type LocationType = { country: string; city: string };
export type UserType = {
  id: string;
  name: string;
  status: string;
  location: LocationType;
  ava: string;
  isFriend: boolean;
};

type ActionsType = Un_FollowAT | SetUsersAT;
type Un_FollowAT = ReturnType<typeof un_followAC>;
type SetUsersAT = ReturnType<typeof setUsersAC>;

const initialState: UsersType = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const un_followAC = (id: string) => ({ type: "UN-FOLLOW", id }) as const;
export const setUsersAC = (users: UserType[]) =>
  ({ type: "SET-USERS", users }) as const;
