import { S } from "./Header_Styles";
import { Container } from "../../components/Container/Container";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

type HeaderProps = {
  isAuth: boolean;
  login: string | null;
};

export const Header: FC<HeaderProps> = ({ isAuth, login }) => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <S.Logo src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" />
          {isAuth ? (
            <h2>{login}</h2>
          ) : (
            <Link to={"/login"}>
              <Button style={"transparent"}>Login</Button>
            </Link>
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
