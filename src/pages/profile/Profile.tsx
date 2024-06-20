import React, { FC } from "react";
import { Container } from "../../components/Container/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import {
  ProfilePageType,
  ProfileType,
} from "../../redux/reducers/profileReducer";

type ProfileProps = {
  profilePage: ProfilePageType;
  isOwner: boolean;

  updateProfileStatus: (status: string) => void;
  updateProfilePhoto: (photo: File) => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};

export const Profile: FC<ProfileProps> = ({
  profilePage,
  isOwner,

  updateProfileStatus,
  updateProfilePhoto,
  updateProfile,
}) => {
  return (
    <section>
      <Container>
        <ProfileInfo
          profile={profilePage.profile}
          updateProfileStatus={updateProfileStatus}
          isOwner={isOwner}
          updateProfilePhoto={updateProfilePhoto}
          updateProfile={updateProfile}
        />
        <MyPostsContainer />
      </Container>
    </section>
  );
};
