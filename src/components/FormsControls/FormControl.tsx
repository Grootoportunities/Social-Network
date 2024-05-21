import { FC, ReactNode } from "react";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";
import { S } from "./_styles";

type Props = {
  children: ReactNode;
  meta: any;
  error: boolean;
};

export const FormControl: FC<Props> = ({ meta, children, error }) => (
  <FlexWrapper direction="column" alignItems="center">
    {children}
    {error && <S.Error>{meta.error}</S.Error>}
  </FlexWrapper>
);
