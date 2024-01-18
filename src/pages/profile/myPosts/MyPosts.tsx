import React, { useRef } from "react";
import { Post } from "./post/Post";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Profile_Styles";
import { PostType } from "../../../redux/State";

type MyPostsProps = {
  posts: PostType[];
  addPostCallback: (newPostMessage: string) => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({ posts, addPostCallback }) => {
  const newPost = useRef<HTMLTextAreaElement>(null);

  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  const onClickAddPost = () => {
    if (newPost.current !== null) addPostCallback(newPost.current.value);
  };

  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>

      <FlexWrapper alignItems={"center"} gap={"20px;"}>
        <textarea ref={newPost} />
        <Button onClick={onClickAddPost}>Add Post</Button>
      </FlexWrapper>

      {mappedPosts}
    </S.MyPosts>
  );
};
