import { S } from "../Profile_Styles";
import React, { FC } from "react";
import { ProfileDomainType } from "../../../redux/reducers/profileReducer";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import defaultAva from "../../../assets/3906412.png";
import { Status } from "./status/Status";

type ProfileInfoProps = {
  profile: ProfileDomainType;
  updateProfileStatus: (status: string) => void;
};

export const ProfileInfo: FC<ProfileInfoProps> = ({
  profile,
  updateProfileStatus,
}) => {
  return !profile.userId ? (
    <h2>Такого пользователя не существует</h2>
  ) : (
    <FlexWrapper justifyContent="center">
      <S.AvaDescription>
        <S.ProfilePhoto
          alt={"Profile picture"}
          src={profile.photos.large || defaultAva}
        />
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
