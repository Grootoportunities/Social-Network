const initialState: AuthDomainType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state: AuthDomainType = initialState,
  action: AuthActionsType,
): AuthDomainType => {
  switch (action.type) {
    case "SET-USER-AUTH-DATA":
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (data: AuthType) =>
  ({
    type: "SET-USER-AUTH-DATA",
    data,
  }) as const;

//TYPES

export type AuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type AuthDomainType = AuthType & { isAuth: boolean };

type AuthActionsType = ReturnType<typeof setAuthUserDataAC>;
