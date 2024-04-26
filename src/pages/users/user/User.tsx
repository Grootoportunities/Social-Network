import React, { FC } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Button } from "../../../components/Button/Button";
import { LocationType } from "../../../redux/reducers/usersReducer";
import { S } from "./_styles";
import { Link } from "react-router-dom";
import { followAPI } from "../../../api/followAPI";

type UserProps = {
  name: string;
  status: string | null;
  location: LocationType;
  ava: string;
  isFriend: boolean;
  userID: number;
  entityStatus: boolean;

  onChangeSubscribe: (userID: number, shouldSubscribe: boolean) => void;
  setUserEntityStatus: (entityStatus: boolean, id: number) => void;
};
export const User: FC<UserProps> = ({
  ava,
  name,
  status,
  location,
  isFriend,
  userID,
  entityStatus,

  onChangeSubscribe,
  setUserEntityStatus,
}) => {
  const onUn_FollowClickHandler = () => {
    setUserEntityStatus(true, userID);
    followAPI.getFollow(userID).then((data) => {
      if (data) {
        followAPI.deleteFollow(userID).then((data) => {
          data.resultCode === 0 && onChangeSubscribe(userID, false);
          setUserEntityStatus(false, userID);
        });

        return;
      }

      followAPI.createFollow(userID).then((data) => {
        data.resultCode === 0 && onChangeSubscribe(userID, true);
        setUserEntityStatus(false, userID);
      });
    });
  };

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
