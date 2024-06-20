import { Preloader } from "../../../../components/Preloader/Preloader";
import { S } from "../../Profile_Styles";
import defaultAva from "../../../../assets/3906412.png";
import React, { ChangeEvent, FC } from "react";
import { ProfilePhotosType } from "../../../../redux/reducers/profileReducer";

type Props = {
  photos: ProfilePhotosType;
  isOwner: boolean;

  updateProfilePhoto: (photo: File) => void;
};

export const ProfilePhoto: FC<Props> = ({
  photos,
  isOwner,
  updateProfilePhoto,
}) => {
  const setUserPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length)
      updateProfilePhoto(event.currentTarget.files[0]);
  };

  return (
    <>
      {photos.entityStatus ? (
        <Preloader />
      ) : (
        <S.ProfilePhoto
          alt={"Profile picture"}
          src={photos.large || defaultAva}
        />
      )}
      {!isOwner && <input type={"file"} onChange={setUserPhotoHandler} />}{" "}
    </>
  );
};
