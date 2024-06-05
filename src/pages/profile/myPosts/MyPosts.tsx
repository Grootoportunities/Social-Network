import React, { memo } from "react";
import { Post } from "./post/Post";
import { S } from "../Profile_Styles";
import { PostType } from "../../../redux/reducers/profileReducer";
import { PostFormData, ReduxPostForm } from "./postForm/PostForm";

type MyPostsProps = {
  posts: PostType[];

  addPost: (postValue: string) => void;
};

export const MyPosts: React.FC<MyPostsProps> = memo(({ addPost, posts }) => {
  const mappedPosts = posts.map((p) => (
    <Post key={p.id} postMessage={p.postMessage} likesCount={p.likes} />
  ));

  const onClickAddPost = (formData: PostFormData) => {
    if (formData.post.trim() !== "") addPost(formData.post);
  };

  return (
    <S.MyPosts>
      <S.PostsHeader>My Posts</S.PostsHeader>
      <ReduxPostForm onSubmit={onClickAddPost} />
      {mappedPosts}
    </S.MyPosts>
  );
});
