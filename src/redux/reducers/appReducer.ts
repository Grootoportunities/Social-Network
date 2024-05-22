import { AppThunksType } from "../redux-store";
import { authUserTC } from "./authReducer";

const initialState: AppInitialize = {
  isInitialized: false,
};

export const appReducer = (
  state: AppInitialize = initialState,
  action: AppActions,
): AppInitialize => {
  switch (action.type) {
    case "APP/SET-INITIALIZED":
      return { ...state, isInitialized: action.isInit };
    default:
      return state;
  }
};

//ACTIONS

export const setInitialize = (isInit: boolean) =>
  ({
    type: "APP/SET-INITIALIZED",
    isInit,
  }) as const;

//THUNKS

export const initializeApp = (): AppThunksType => (dispatch) =>
  dispatch(authUserTC()).then(() => {
    dispatch(setInitialize(true));
  });

//TYPES

type AppInitialize = {
  isInitialized: boolean;
};

type AppActions = ReturnType<typeof setInitialize>;
