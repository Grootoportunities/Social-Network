import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  max-width: 200px;
  width: 100%;

  background-color: ${Theme.colors.sidebar};
  padding: 30px;
`;

const MenuItem = styled.li`
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

const PagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const OnlineFriends = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const OnlineAva = styled.img`
  width: 30px;
  border-radius: 50%;
`;

export const S = { Sidebar, MenuItem, PagesList, OnlineFriends, OnlineAva };
