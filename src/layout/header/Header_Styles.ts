import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

const Header = styled.header`
  background-color: ${Theme.colors.accent};

  ${Container} {
    max-width: 1400px;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px 0;
`;

export const S = { Header, Logo };
