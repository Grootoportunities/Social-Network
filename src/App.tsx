import React from "react";
import { FlexWrapper } from "./components/FlexWrapper/FlexWrapper";
import { Header } from "./layout/header/Header";
import { Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import styled from "styled-components";
import { MessagesContainer } from "./pages/messages/MessagesContainer";
import { SidebarContainer } from "./layout/sidebar/SidebarContainer";
import { UsersContainer } from "./pages/users/UsersContainer";
import { Theme } from "./styles/Theme";
import { ProfileContainer } from "./pages/profile/ProfileContainer";

function App() {
  return (
    <>
      <Header />
      <FlexWrapper>
        <SidebarContainer />
        <Content>
          <Route
            path={"/profile/:userID?"}
            render={() => <ProfileContainer />}
          />
          <Route path={"/messages"} render={() => <MessagesContainer />} />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settings"} render={() => <Settings />} />
        </Content>
      </FlexWrapper>
    </>
  );
}

export default App;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Theme.colors.content};
`;
