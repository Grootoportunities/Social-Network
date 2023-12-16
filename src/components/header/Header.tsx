import React from "react";
import { Container } from "../../Container";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${Theme.colors.accent};

  ${Container} {
    max-width: 1400px;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px 0;
`;
