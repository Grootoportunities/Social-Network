import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Sidebar = styled.aside`
  background-color: ${Theme.colors.sidebar};
  padding: 30px;
`;

const MenuItem = styled.li`
  margin: 20px;

  & > a {
    color: ${Theme.colors.sidebarLinks};
  }

  & > a.active {
    color: ${Theme.colors.sidebarLinksActiveAndHover};
  }

  & > a:hover {
    color: ${Theme.colors.sidebarLinksActiveAndHover};
  }
`;

export const S = { Sidebar, MenuItem };
