import { S } from "../Profile_Styles";
import React, { ChangeEvent, FC } from "react";
import { ProfileDomainType } from "../../../redux/reducers/profileReducer";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import defaultAva from "../../../assets/3906412.png";
import { Status } from "./status/Status";
import { Preloader } from "../../../components/Preloader/Preloader";

type ProfileInfoProps = {
  profile: ProfileDomainType;
  isOwner: boolean;

  updateProfileStatus: (status: string) => void;
  updateProfilePhoto: (photo: File) => void;
};

export const ProfileInfo: FC<ProfileInfoProps> = ({
  profile,
  isOwner,

  updateProfileStatus,
  updateProfilePhoto,
}) => {
  const setUserPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length)
      updateProfilePhoto(event.currentTarget.files[0]);
  };
  debugger;
  return !profile.userId ? (
    <h2>Такого пользователя не существует</h2>
  ) : (
    <FlexWrapper justifyContent="center">
      <S.AvaDescription>
        {profile.photos.entityStatus ? (
          <Preloader />
        ) : (
          <S.ProfilePhoto
            alt={"Profile picture"}
            src={profile.photos.large || defaultAva}
          />
        )}
        {!isOwner && <input type={"file"} onChange={setUserPhotoHandler} />}
        <h2>{profile.fullName}</h2>
        <span>{profile.lookingForAJobDescription}</span>
        <Status
          statusValue={profile.status}
          updateProfileStatus={updateProfileStatus}
        />
      </S.AvaDescription>
    </FlexWrapper>
  );
};
