import React from "react";
import { Container } from "../../components/Container";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/State";

type ProfileProps = { state: ProfilePageType };

export const Profile: React.FC<ProfileProps> = ({ state }) => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPosts posts={state.posts} />
      </Container>
    </section>
  );
};
