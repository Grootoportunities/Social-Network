import React from "react";
import {
  addPostAC,
  setPostValueAC,
} from "../../../redux/reducers/profileReducer";
import { MyPosts } from "./MyPosts";
import { RootStoreType } from "../../../redux/redux-store";

type MyPostsContainerProps = {
  store: RootStoreType;
};

export const MyPostsContainer: React.FC<MyPostsContainerProps> = ({
  store,
}) => {
  const state = store.getState();

  const addPostCallback = () => {
    if (state.profilePage.postValue.trim() !== "") store.dispatch(addPostAC());
  };

  const onValueChangeCallback = (value: string) =>
    store.dispatch(setPostValueAC(value));

  return (
    <MyPosts
      onValueChange={onValueChangeCallback}
      addPost={addPostCallback}
      posts={state.profilePage.posts}
      postValue={state.profilePage.postValue}
    />
  );
};
