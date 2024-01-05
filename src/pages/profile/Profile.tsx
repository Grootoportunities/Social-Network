import React from "react";
import { Container } from "../../Container";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile: React.FC = () => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPosts />
      </Container>
    </section>
  );
};
