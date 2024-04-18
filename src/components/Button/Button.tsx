import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import React, { ReactNode } from "react";

type ButtonProps = { children: ReactNode; onClick?: () => void };

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

const StyledButton = styled.button`
  background-color: ${Theme.colors.button};
  padding: 5px 15px;
  border-radius: 4px;

  font-weight: 600;
  font-size: 15px;
`;
