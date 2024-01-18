import styled from "styled-components";
import { Theme } from "../styles/Theme";
import React from "react";

type ButtonProps = { name: string; onClick?: () => void };

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => (
  <StyledButton onClick={onClick}>{name}</StyledButton>
);

const StyledButton = styled.button`
  background-color: ${Theme.colors.button};
  padding: 5px 15px;
  border-radius: 4px;
`;
