import { authAPI, LoginData } from "../../api/authAPI";
import { profileAPI } from "../../api/profileAPI";
import { AppThunksType } from "../redux-store";
import { stopSubmit } from "redux-form";

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
      return { ...state, ...action.data };
    case "SET-USER-PROFILE-PICTURE":
      return { ...state, authUserProfilePicture: action.picture };
    case "LOGOUT-USER-AUTH":
      return { ...state, isAuth: false };
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

export const logoutAuthAC = () => ({ type: "LOGOUT-USER-AUTH" }) as const;

//THUNKS

export const authUserTC = (): AppThunksType => (dispatch) =>
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserDataAC({ ...data.data, isAuth: true }));

      profileAPI.getProfile(data.data.id).then((data) => {
        if (data.photos.small)
          dispatch(setAuthUserProfilePictureAC(data.photos.small));
      });
    }
  });

export const loginTC =
  (data: LoginData): AppThunksType =>
  (dispatch) => {
    authAPI.login(data).then((res) => {
      if (res.resultCode === 0) {
        dispatch(authUserTC());
        return;
      }

      const message = res.messages.length ? res.messages[0] : "Some error";

      dispatch(stopSubmit("login", { _error: message }));
    });
  };

export const logoutTC = (): AppThunksType => (dispatch) =>
  authAPI.logout().then((res) => {
    if (res.resultCode === 0) {
      dispatch(
        setAuthUserDataAC({
          isAuth: false,
          id: null,
          login: null,
          email: null,
        }),
      );
      dispatch(setAuthUserProfilePictureAC(""));
    }
  });

//TYPES

export type AuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type AuthDomainType = AuthType & {
  isAuth: boolean;
  authUserProfilePicture: string;
};

export type AuthActionsType =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setAuthUserProfilePictureAC>
  | ReturnType<typeof logoutAuthAC>;
