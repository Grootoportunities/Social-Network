import { S } from "../Profile_Styles";
import cover from "../../../assets/Landscape-Color.jpg";
import React from "react";

export const ProfileInfo = () => {
  return (
    <>
      <S.Cover src={cover} />
      <S.AvaDescription>Ava + Description</S.AvaDescription>
    </>
  );
};
