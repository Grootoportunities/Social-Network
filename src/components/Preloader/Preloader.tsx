import { FC } from "react";
import loading from "../../assets/tube-spinner.svg";
import { S } from "./_styles";

export const Preloader: FC = () => (
  <S.Preloader src={loading} alt={"loading"} />
);
