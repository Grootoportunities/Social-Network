import {
  setCountAC,
  setIsPendingAC,
  setPageAC,
  setTotalUsersCountAC,
  setUserEntityStatusAC,
  setUsersAC,
  un_followAC,
  usersReducer,
  UsersType,
} from "../usersReducer";

let startState: UsersType;

beforeEach(() => {
  startState = {
    users: [
      {
        id: 1,
        name: "Daniil",
        status: "test status",
        photos: {
          small: "test",
          large: "test",
        },
        followed: false,
        userEntityStatus: false,
      },
    ],
    count: 3,
    totalUsersCount: 0,
    page: 1,
    isPending: true,
    currentPortionNumber: 1,
  };
});

it("Should follow to user correctly", () => {
  const endState = usersReducer(startState, un_followAC(1, true));

  expect(endState.users[0].followed).toBe(true);
});

it("Users should be setted", () => {
  const endState = usersReducer(
    startState,
    setUsersAC([
      {
        id: 2,
        name: "Anastasia",
        status: "test status",
        photos: {
          small: "test",
          large: "test",
        },
        followed: true,
        userEntityStatus: false,
      },
    ]),
  );

  expect(endState.users.length).toBe(1);
  expect(endState.users[0].name).toBe("Anastasia");
});

it("Page should setted correctly", () => {
  const endState = usersReducer(startState, setPageAC(2));

  expect(endState.page).toBe(2);
});

it("Count should setted correctly", () => {
  const endState = usersReducer(startState, setCountAC(5));

  expect(endState.count).toBe(5);
});

it("Total user count should setted correctly", () => {
  const endState = usersReducer(startState, setTotalUsersCountAC(1000));

  expect(endState.totalUsersCount).toBe(1000);
});

it("Page should setted correctly", () => {
  const endState = usersReducer(startState, setIsPendingAC(false));

  expect(endState.isPending).toBeFalsy();
});

it("User entity status should setted correctly", () => {
  const endState = usersReducer(startState, setUserEntityStatusAC(true, 1));

  expect(endState.users[0].userEntityStatus).toBeTruthy();
});
