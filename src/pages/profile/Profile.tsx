import React, { FC } from "react";
import { Container } from "../../components/Container/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { ProfilePageType } from "../../redux/reducers/profileReducer";

type ProfileProps = {
  profilePage: ProfilePageType;
  isOwner: boolean;

  updateProfileStatus: (status: string) => void;
  updateProfilePhoto: (photo: File) => void;
};

export const Profile: FC<ProfileProps> = ({
  profilePage,
  isOwner,

  updateProfileStatus,
  updateProfilePhoto,
}) => {
  return (
    <section>
      <Container>
        <ProfileInfo
          profile={profilePage.profile}
          updateProfileStatus={updateProfileStatus}
          isOwner={isOwner}
          updateProfilePhoto={updateProfilePhoto}
        />
        <MyPostsContainer />
      </Container>
    </section>
  );
};
