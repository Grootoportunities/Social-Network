import React from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../FlexWrapper";
import { S } from "../Profile_Styles";

export const MyPosts: React.FC = () => {
  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>

      <FlexWrapper alignItems={"center"} gap={"20px;"}>
        <textarea></textarea>
        <Button>Add Post</Button>
      </FlexWrapper>

      <Post
        postMessage={"Hello, i'm developing this social network right now"}
        likesCount={15}
      />
      <Post
        postMessage={"You are seeing this page in the final result"}
        likesCount={20}
      />
    </S.MyPosts>
  );
};
