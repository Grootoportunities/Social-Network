import React, { FC } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Button } from "../../../components/Button/Button";
import { LocationType } from "../../../redux/reducers/usersReducer";
import { S } from "./_styles";
import { Link } from "react-router-dom";

type UserProps = {
  name: string;
  status: string | null;
  location: LocationType;
  ava: string;
  isFriend: boolean;
  userID: number;
  entityStatus: boolean;

  setUn_Follow: (userID: number) => void;
};
export const User: FC<UserProps> = ({
  ava,
  name,
  status,
  location,
  isFriend,
  userID,
  entityStatus,

  setUn_Follow,
}) => {
  const onUn_FollowClickHandler = () => setUn_Follow(userID);

  return (
    <S.User>
      <Link to={`/profile/${userID}`}>
        <S.UserAvatar src={ava} />
      </Link>
      <FlexWrapper direction={"column"} gap={"15px"}>
        <S.NameSpan>{name}</S.NameSpan>
        <S.StatusSpan>{status}</S.StatusSpan>
      </FlexWrapper>
      <FlexWrapper direction={"column"} gap={"10px"}>
        <S.CitySpan>{location.city}</S.CitySpan>
        <S.CountrySpan>{location.country}</S.CountrySpan>
      </FlexWrapper>
      <Button onClick={onUn_FollowClickHandler} disabled={entityStatus}>
        {isFriend ? "Unfollow" : "Follow"}
      </Button>
    </S.User>
  );
};
