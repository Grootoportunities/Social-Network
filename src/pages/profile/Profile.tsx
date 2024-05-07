import React, { FC } from "react";
import { Container } from "../../components/Container/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { ProfilePageType } from "../../redux/reducers/profileReducer";

type ProfileProps = {
  profilePage: ProfilePageType;
  updateProfileStatus: (status: string) => void;
};

export const Profile: FC<ProfileProps> = ({
  profilePage,
  updateProfileStatus,
}) => {
  return (
    <section>
      <Container>
        <ProfileInfo
          profile={profilePage.profile}
          updateProfileStatus={updateProfileStatus}
        />
        <MyPostsContainer />
      </Container>
    </section>
  );
};
