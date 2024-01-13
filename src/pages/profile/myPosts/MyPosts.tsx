import React from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Profile_Styles";
import { PostType } from "../../../index";

type MyPostsProps = {
  posts: PostType[];
};

export const MyPosts: React.FC<MyPostsProps> = ({ posts }) => {
  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>

      <FlexWrapper alignItems={"center"} gap={"20px;"}>
        <textarea></textarea>
        <Button>Add Post</Button>
      </FlexWrapper>

      {mappedPosts}
    </S.MyPosts>
  );
};
