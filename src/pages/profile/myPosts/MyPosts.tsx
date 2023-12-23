import React from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../FlexWrapper";

export const MyPosts: React.FC = () => {
  return (
    <div>
      <h3>My Posts</h3>

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
    </div>
  );
};
