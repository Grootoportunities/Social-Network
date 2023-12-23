import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Sidebar = styled.aside`
  background-color: ${Theme.colors.sidebar};
  padding: 30px;
`;

const MenuItem = styled.li`
  margin: 20px;
`;

export const S = { Sidebar, MenuItem };
