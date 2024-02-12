import React from "react";
import {
  addPostAC,
  setPostValueAC,
} from "../../../redux/reducers/profileReducer";
import { MyPosts } from "./MyPosts";
import { StoreContext } from "../../../StoreContext";

export const MyPostsContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;

        const addPostCallback = () => {
          if (state.postValue.trim() !== "") store.dispatch(addPostAC());
        };

        const onValueChangeCallback = (value: string) =>
          store.dispatch(setPostValueAC(value));

        return (
          <MyPosts
            onValueChange={onValueChangeCallback}
            addPost={addPostCallback}
            posts={state.posts}
            postValue={state.postValue}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
