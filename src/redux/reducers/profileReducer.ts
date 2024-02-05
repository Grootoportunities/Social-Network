import { ActionsType, PostType, ProfilePageType } from "../State";
import { v1 } from "uuid";

export type AddPostAT = { type: "ADD-POST" };
export type SetPostValueAT = { type: "SET-POST-VALUE"; value: string };

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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
