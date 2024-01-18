import React from "react";
import postAva from "../../../../assets/photo_2023-10-23_14-55-44.jpg";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "../../Profile_Styles";

type PostPropsType = {
  postMessage: string;
  likesCount: number;
};

export const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
  return (
    <div>
      <FlexWrapper alignItems={"center"} gap={"20px"}>
        <S.AvaPost src={postAva} />
        <span>{props.postMessage}</span>
      </FlexWrapper>
      <Button name={"Like"} />
      <S.LikesCount>{props.likesCount} likes</S.LikesCount>
    </div>
  );
};
