import { AppInitialize, appReducer, setInitialize } from "../appReducer";

let startState: AppInitialize;

beforeEach(() => {
  startState = {
    isInitialized: false,
  };
});

it("App should be initialized", () => {
  const endState = appReducer(startState, setInitialize(true));

  expect(endState.isInitialized).toBe(true);
});
