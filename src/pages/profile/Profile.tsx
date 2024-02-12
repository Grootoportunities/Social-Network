import React from "react";
import { Container } from "../../components/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";

export const Profile: React.FC = () => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPostsContainer />
      </Container>
    </section>
  );
};
