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
import { StateType } from "./redux/State";

type AppProps = {
  state: StateType;
  addPostCallback: () => void;
  addMessageCallback: () => void;
  setPostValueCallback: (value: string) => void;
  setMessageValueCallback: (value: string) => void;
};

function App({
  state,
  addPostCallback,
  addMessageCallback,
  setPostValueCallback,
  setMessageValueCallback,
}: AppProps) {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Sidebar state={state.sidebar} />
        <Content>
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                profilePageState={state.profilePage}
                addPostCallback={addPostCallback}
                setPostValueCallback={setPostValueCallback}
              />
            )}
          />
          <Route
            path={"/messages"}
            render={() => (
              <Messages
                messagesPageState={state.messagesPage}
                addMessageCallback={addMessageCallback}
                messageValue={state.messagesPage.messageValue}
                setMessageValueCallback={setMessageValueCallback}
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
