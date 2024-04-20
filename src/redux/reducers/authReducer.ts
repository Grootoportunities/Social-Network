const initialState: AuthDomainType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  authUserProfilePicture: "",
};

export const authReducer = (
  state: AuthDomainType = initialState,
  action: AuthActionsType,
): AuthDomainType => {
  switch (action.type) {
    case "SET-USER-AUTH-DATA":
      return { ...state, ...action.data, isAuth: true };
    case "SET-USER-PROFILE-PICTURE":
      return { ...state, authUserProfilePicture: action.picture };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (data: AuthType) =>
  ({
    type: "SET-USER-AUTH-DATA",
    data,
  }) as const;

export const setAuthUserProfilePictureAC = (picture: string) =>
  ({
    type: "SET-USER-PROFILE-PICTURE",
    picture,
  }) as const;

//TYPES

export type AuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type AuthDomainType = AuthType & {
  isAuth: boolean;
  authUserProfilePicture: string;
};

type AuthActionsType =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setAuthUserProfilePictureAC>;
