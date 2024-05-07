import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  onClick?: () => void;
  style?: "default" | "transparent";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style = "default",
  disabled = false,
  type = "button",
}) => (
  <StyledButton
    $disabled={disabled}
    $style={style}
    onClick={onClick}
    type={type}
  >
    {children}
  </StyledButton>
);

type StyledButtonType = {
  $style: "default" | "transparent";
  $disabled: boolean;
};

const StyledButton = styled.button<StyledButtonType>`
  background-color: ${(props) =>
    props.$style === "transparent" ? "transparent" : Theme.colors.button};

  padding: 5px 15px;

  border-radius: 10px;
  border: 10px white;

  font-weight: 600;
  font-size: 15px;

  color: ${(props) =>
    props.$style === "transparent" ? Theme.colors.content : "black"};

  opacity: ${(props) => props.$disabled && 0.5};
`;
