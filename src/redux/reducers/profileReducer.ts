import { ActionsType, PostType, ProfilePageType } from "../Store";
import { v1 } from "uuid";

export type AddPostAT = { type: "ADD-POST" };
export type SetPostValueAT = { type: "SET-POST-VALUE"; value: string };

const initialState: ProfilePageType = {
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
  postValue: "",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsType,
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: v1(),
        postMessage: state.postValue,
        likes: 0,
      };

      state.posts.push(newPost);
      state.postValue = "";

      return state;
    }
    case "SET-POST-VALUE": {
      state.postValue = action.value;
      return state;
    }
    default:
      return state;
  }
};

export const addPostAC = (): AddPostAT => ({ type: "ADD-POST" });
export const setPostValueAC = (value: string): SetPostValueAT => ({
  type: "SET-POST-VALUE",
  value,
});
