import { S } from "./Header_Styles";
import { Container } from "../../components/Container/Container";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import defaultAva from "../../assets/3906412.png";
import styled from "styled-components";

type HeaderProps = {
  isAuth: boolean;
  login: string | null;
  headerAva: string;
};

export const Header: FC<HeaderProps> = ({ isAuth, login, headerAva }) => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <S.Logo src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" />
          {isAuth ? (
            <FlexWrapper alignItems={"center"}>
              <h2>{login}</h2>
              <HeaderAva src={headerAva ? headerAva : defaultAva} />
            </FlexWrapper>
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

const HeaderAva = styled.img`
  width: 70px;
  border-radius: 50%;
  margin-left: 40px;
`;
