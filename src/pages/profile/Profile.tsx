import React from "react";
import { Container } from "../../components/Container";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { PostType } from "../../index";

type ProfileProps = {
  posts: PostType[];
};

export const Profile: React.FC<ProfileProps> = ({ posts }) => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPosts posts={posts} />
      </Container>
    </section>
  );
};
