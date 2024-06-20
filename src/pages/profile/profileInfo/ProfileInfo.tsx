import { S } from "../Profile_Styles";
import React, { FC, useState } from "react";
import { ProfileType } from "../../../redux/reducers/profileReducer";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";
import { Button } from "../../../components/Button/Button";
import { ProfileData } from "./profileData/ProfileData";
import {
  EditProfileData,
  ProfileFormData,
} from "./profileDataEditMode/ProfileDataEditMode";

type ProfileInfoProps = {
  profile: ProfileType;
  isOwner: boolean;

  updateProfileStatus: (status: string) => void;
  updateProfilePhoto: (photo: File) => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};

export const ProfileInfo: FC<ProfileInfoProps> = ({
  profile,
  isOwner,

  updateProfileStatus,
  updateProfilePhoto,
  updateProfile,
}) => {
  const {
    userId,
    photos,
    fullName,
    lookingForAJobDescription,
    lookingForAJob,
    contacts,
    aboutMe,
  } = profile;

  const [editMode, setEditMode] = useState(false);

  const onSubmitHandler = (formData: ProfileFormData) => {
    updateProfile({ ...formData, userId, photos, aboutMe }).then(() => {
      setEditMode(false);
    });
  };

  return !userId ? (
    <h2>Такого пользователя не существует</h2>
  ) : (
    <FlexWrapper justifyContent="center">
      <S.AvaDescription>
        <ProfilePhoto
          photos={photos}
          isOwner={isOwner}
          updateProfilePhoto={updateProfilePhoto}
        />
        {editMode ? (
          <EditProfileData
            onSubmit={onSubmitHandler}
            initialValues={profile}
            contacts={profile.contacts}
          />
        ) : (
          <ProfileData
            fullName={fullName}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            contacts={contacts}
            updateProfileStatus={updateProfileStatus}
            status={aboutMe}
          />
        )}
        {!isOwner && !editMode && (
          <Button onClick={() => setEditMode(true)}>Edit mode</Button>
        )}
      </S.AvaDescription>
    </FlexWrapper>
  );
};
