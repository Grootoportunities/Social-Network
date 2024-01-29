import React, { ChangeEvent } from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Profile_Styles";
import { PostType } from "../../../redux/State";

type MyPostsProps = {
  postValue: string;
  posts: PostType[];
  addPostCallback: () => void;
  setPostValueCallback: (value: string) => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({
  posts,
  addPostCallback,
  postValue,
  setPostValueCallback,
}) => {
  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  const onClickAddPost = () => {
    if (postValue.trim() !== "") addPostCallback();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setPostValueCallback(e.currentTarget.value);

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
