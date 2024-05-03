import { S } from "../Profile_Styles";
import React, { FC } from "react";
import { ProfileType } from "../../../redux/reducers/profileReducer";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Status } from "./status/Status";

type ProfileInfoProps = {
  profile: ProfileType | null;
};

export const ProfileInfo: FC<ProfileInfoProps> = ({ profile }) => {
  return !profile ? (
    <h2>Такого пользователя не существует</h2>
  ) : (
    <FlexWrapper justifyContent="center">
      <S.AvaDescription>
        <img src={profile.photos.large} />
        <h2>{profile.fullName}</h2>
        <span>{profile.lookingForAJobDescription}</span>
        <Status statusValue={"Status"} />
      </S.AvaDescription>
    </FlexWrapper>
  );
};
