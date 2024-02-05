import React from "react";
import { FlexWrapper } from "./components/FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Messages } from "./pages/messages/Messages";
import { Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import styled from "styled-components";
import { StoreType } from "./redux/State";

type AppProps = {
  store: StoreType;
};

function App({ store }: AppProps) {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Sidebar sidebarState={store.getState().sidebar} />
        <Content>
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                profilePageState={store.getState().profilePage}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path={"/messages"}
            render={() => (
              <Messages
                messagesPageState={store.getState().messagesPage}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
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
`;
