import { S } from "../Profile_Styles";
import cover from "../../../assets/Landscape-Color.jpg";
import React, { FC } from "react";
import { ProfileType } from "../../../redux/reducers/profileReducer";

type ProfileInfoProps = {
  profile: ProfileType | null;
};

export const ProfileInfo: FC<ProfileInfoProps> = ({ profile }) => {
  return !profile ? (
    <h2>Такого пользователя не существует</h2>
  ) : (
    <>
      <S.Cover src={cover} />
      <S.AvaDescription>
        <img src={profile.photos.large} />
        <h2>{profile.fullName}</h2>
        <span>{profile.lookingForAJobDescription}</span>
      </S.AvaDescription>
    </>
  );
};
