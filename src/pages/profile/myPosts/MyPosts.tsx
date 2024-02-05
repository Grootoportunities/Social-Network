import React, { ChangeEvent } from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Profile_Styles";
import { ActionsType, PostType } from "../../../redux/State";
import {
  addPostAC,
  setPostValueAC,
} from "../../../redux/reducers/profileReducer";

type MyPostsProps = {
  postValue: string;
  posts: PostType[];
  dispatch: (action: ActionsType) => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({
  posts,
  postValue,
  dispatch,
}) => {
  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  const onClickAddPost = () => {
    if (postValue.trim() !== "") dispatch(addPostAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setPostValueAC(e.currentTarget.value));

  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>

      <FlexWrapper alignItems={"center"} gap={"20px;"}>
        <textarea onChange={onChangeHandler} value={postValue} />
        <Button name={"Add Post"} onClick={onClickAddPost} />
      </FlexWrapper>

      {mappedPosts}
    </S.MyPosts>
  );
};
