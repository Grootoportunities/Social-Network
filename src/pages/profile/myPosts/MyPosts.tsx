import React, { ChangeEvent } from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Profile_Styles";
import { PostType } from "../../../redux/reducers/profileReducer";

type MyPostsProps = {
  posts: PostType[];
  postValue: string;

  onValueChange: (value: string) => void;
  addPost: () => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({
  onValueChange,
  addPost,
  posts,
  postValue,
}) => {
  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  const onClickAddPost = () => {
    if (postValue.trim() !== "") addPost();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    onValueChange(e.currentTarget.value);

  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>

      <FlexWrapper alignItems={"center"} gap={"20px;"}>
        <textarea onChange={onChangeHandler} value={postValue} />
        <Button onClick={onClickAddPost}>Add Post</Button>
      </FlexWrapper>

      {mappedPosts}
    </S.MyPosts>
  );
};
