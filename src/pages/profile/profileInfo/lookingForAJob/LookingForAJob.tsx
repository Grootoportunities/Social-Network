import { FlexWrapper } from "../../../../components/FlexWrapper/FlexWrapper";
import check from "../../../../assets/check-square.png";
import cross from "../../../../assets/cross-mark.png";
import React, { FC } from "react";

type Props = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
};

export const LookingForAJob: FC<Props> = ({
  lookingForAJob,
  lookingForAJobDescription,
}) => (
  <>
    <FlexWrapper gap={"5px"} alignItems={"center"}>
      <b>Looking for a job:</b>
      <img
        src={lookingForAJob ? check : cross}
        alt={"Looking for a job"}
        style={{ width: "30px" }}
      />
    </FlexWrapper>
    <p>{lookingForAJobDescription}</p>
  </>
);
