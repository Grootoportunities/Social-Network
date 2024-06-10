import { authAPI, LoginData } from "../../api/authAPI";
import { profileAPI } from "../../api/profileAPI";
import { AppThunksType } from "../redux-store";
import { stopSubmit } from "redux-form";
import { Dispatch } from "redux";

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
    case "auth/SET-USER-AUTH-DATA":
      return { ...state, ...action.data };
    case "auth/SET-USER-PROFILE-PICTURE":
      return { ...state, authUserProfilePicture: action.picture };
    case "auth/LOGOUT-USER-AUTH":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (data: AuthType) =>
  ({
    type: "auth/SET-USER-AUTH-DATA",
    data,
  }) as const;

export const setAuthUserProfilePictureAC = (picture: string) =>
  ({
    type: "auth/SET-USER-PROFILE-PICTURE",
    picture,
  }) as const;

export const logoutAuthAC = () => ({ type: "auth/LOGOUT-USER-AUTH" }) as const;

//THUNKS

export const authUserTC = () => async (dispatch: Dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    dispatch(setAuthUserDataAC({ ...data.data, isAuth: true }));

    const res = await profileAPI.getProfile(data.data.id);
    if (res.photos.small)
      dispatch(setAuthUserProfilePictureAC(res.photos.small));
  }
};

export const loginTC =
  (data: LoginData): AppThunksType =>
  async (dispatch) => {
    const res = await authAPI.login(data);
    if (res.resultCode === 0) {
      dispatch(authUserTC());
      return;
    }

    const message = res.messages.length ? res.messages[0] : "Some error";

    dispatch(stopSubmit("login", { _error: message }));
  };

export const logoutTC = (): AppThunksType => async (dispatch) => {
  const res = await authAPI.logout();
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
};

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
