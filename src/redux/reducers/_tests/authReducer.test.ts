import {
  AuthDomainType,
  authReducer,
  logoutAuthAC,
  setAuthUserDataAC,
  setAuthUserProfilePictureAC,
} from "../authReducer";

let startState: AuthDomainType;

beforeEach(() => {
  startState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authUserProfilePicture: "",
    captcha: undefined,
  };
});

it("Authorize user data", () => {
  const endState = authReducer(
    startState,
    setAuthUserDataAC({
      id: 1,
      email: "testemail@gmail.com",
      login: "test",
      isAuth: true,
    }),
  );

  expect(endState.email).toEqual("testemail@gmail.com");
  expect(endState.login).toBe("test");
  expect(endState.id).toBe(1);
});

it("User profile picture should be setted correctly", () => {
  const endState = authReducer(
    startState,
    setAuthUserProfilePictureAC("Profile picture"),
  );

  expect(endState.authUserProfilePicture).toBe("Profile picture");
});

it("User should logout correctly", () => {
  const endState = authReducer(startState, logoutAuthAC());

  expect(endState.isAuth).toBeFalsy();
});
