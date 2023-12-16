import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Sidebar = () => {
  return (
    <div>
      <StyledSidebar>
        <Menu>
          <ul>
            <MenuItem>
              <a>Profile</a>
            </MenuItem>
            <MenuItem>
              <a>Messages</a>
            </MenuItem>
            <MenuItem>
              <a>News</a>
            </MenuItem>
            <MenuItem>
              <a>Music</a>
            </MenuItem>
            <MenuItem>
              <a>Settings</a>
            </MenuItem>
          </ul>
        </Menu>
      </StyledSidebar>
      ;
    </div>
  );
};

const StyledSidebar = styled.aside`
  background-color: ${Theme.colors.sidebar};
  padding: 30px;
`;

const Menu = styled.nav``;

const MenuItem = styled.li`
  margin: 20px;
`;
