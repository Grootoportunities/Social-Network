import {
  addPostAC,
  deletePostAC,
  ProfileDomainType,
  ProfilePageType,
  profileReducer,
  setProfileStatusAC,
  setUserProfilePageAC,
} from "../profileReducer";
import { v1 } from "uuid";

let startState: ProfilePageType;

beforeEach(() => {
  startState = {
    posts: [
      {
        id: v1(),
        postMessage: "You are seeing this page in the final result",
        likes: 15,
      },
      {
        id: v1(),
        postMessage: "Hello, i'm developing this social network right now",
        likes: 20,
      },
    ],
    profile: {} as ProfileDomainType,
  };
});

it("Post should be added correctly", () => {
  const endState = profileReducer(startState, addPostAC("New post"));

  expect(endState.posts.length).toBe(3);
  expect(endState.posts[0].postMessage).toBe("New post");
  expect(endState.posts[0].likes).toBe(0);
});

it("Post should be deleted correctly", () => {
  const endState = profileReducer(
    startState,
    deletePostAC(startState.posts[0].id),
  );

  expect(endState.posts.length).toBe(1);
  expect(endState.posts[0].postMessage).toBe(
    "Hello, i'm developing this social network right now",
  );
  expect(endState.posts[0].likes).toBe(20);
});

it("User profile should be setted", () => {
  const endState = profileReducer(
    startState,
    setUserProfilePageAC({
      userId: 1,
      lookingForAJob: true,
      lookingForAJobDescription: "I'm looking for a job",
      fullName: "Daniil",
      contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
      },
      photos: {
        small: undefined,
        large: undefined,
      },
    }),
  );

  expect(endState.profile.fullName).toBe("Daniil");
  expect(endState.profile.userId).toBe(1);
});

it("Profile status should be setted", () => {
  const endState = profileReducer(startState, setProfileStatusAC("New status"));

  expect(endState.profile.status).toBe("New status");
});
