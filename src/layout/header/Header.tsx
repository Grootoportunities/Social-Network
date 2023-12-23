import React from "react";
import { Container } from "../../Container";
import { S } from "./Header_Styles";

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Logo src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" />
      </Container>
    </S.Header>
  );
};
