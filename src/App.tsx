import React from "react";
import "./App.css";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { Container } from "./Container";
import { FlexWrapper } from "./FlexWrapper";
import cover from "./assets/Landscape-Color.jpg";

function App() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Logo src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" />
        </Container>
      </StyledHeader>
      <FlexWrapper>
        <StyledSidebar>
          <Menu>
            <ul>
              <MenuItem>
                <>Profile</>
              </MenuItem>
              <MenuItem>
                <>Messages</>
              </MenuItem>
              <MenuItem>
                <>News</>
              </MenuItem>
              <MenuItem>
                <>Music</>
              </MenuItem>
              <MenuItem>
                <a>Settings</a>
              </MenuItem>
            </ul>
          </Menu>
        </StyledSidebar>
        <Content>
          <Container>
            <Cover src={cover} />
            <div>
              <div>My Post</div>
              <div>New Post</div>
            </div>
            <div>
              <div>Post1</div>
              <div>Post2</div>
            </div>
          </Container>
        </Content>
      </FlexWrapper>
    </>
  );
}

export default App;

const StyledHeader = styled.header`
  background-color: ${Theme.colors.accent};
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px 0;
`;

const StyledSidebar = styled.aside`
  background-color: ${Theme.colors.sidebar};
  padding: 30px;
`;

const Content = styled.section`
  padding: 60px 60px;
`;

const Menu = styled.nav``;

const MenuItem = styled.li`
  padding: 10px;
`;

const Cover = styled.img`
  width: 100%;
`;
