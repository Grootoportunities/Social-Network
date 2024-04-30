import React, { FC } from "react";
import { Container } from "../../components/Container/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { ProfilePageType } from "../../redux/reducers/profileReducer";

type ProfileProps = {
  profilePage: ProfilePageType;
};

export const Profile: FC<ProfileProps> = ({ profilePage }) => {
  debugger;

  return (
    <section>
      <Container>
        <ProfileInfo profile={profilePage.profile} />
        <MyPostsContainer />
      </Container>
    </section>
  );
};
