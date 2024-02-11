import React from "react";
import { FlexWrapper } from "./components/FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import styled from "styled-components";
import { RootStoreType } from "./redux/redux-store";
import { MessagesContainer } from "./pages/messages/MessagesContainer";

type AppProps = {
  store: RootStoreType;
};

function App({ store }: AppProps) {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Sidebar sidebarState={store.getState().sidebar} />
        <Content>
          <Route path={"/profile"} render={() => <Profile store={store} />} />
          <Route
            path={"/messages"}
            render={() => <MessagesContainer store={store} />}
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
