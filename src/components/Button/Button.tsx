import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  onClick?: () => void;
  style?: "default" | "transparent";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style = "default",
}) => (
  <StyledButton $style={style} onClick={onClick}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{ $style: "default" | "transparent" }>`
  background-color: ${(props) =>
    props.$style === "transparent" ? "transparent" : Theme.colors.button};

  padding: 5px 15px;

  border-radius: 10px;
  border: 10px white;

  font-weight: 600;
  font-size: 15px;

  color: ${(props) =>
    props.$style === "transparent" ? Theme.colors.content : "black"};
`;
