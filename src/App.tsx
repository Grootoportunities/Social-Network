import React from "react";
import { FlexWrapper } from "./components/FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Messages } from "./pages/messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import { DialogsType, MessagesType, PostType } from "./index";
import styled from "styled-components";

type AppProps = {
  posts: PostType[];
  dialogs: DialogsType[];
  messages: MessagesType[];
};

function App({ posts, dialogs, messages }: AppProps) {
  return (
    <BrowserRouter>
      <Header />
      <FlexWrapper>
        <Sidebar />
        <Content>
          <Route path={"/profile"} render={() => <Profile posts={posts} />} />
          <Route
            path={"/messages"}
            render={() => <Messages dialogs={dialogs} messages={messages} />}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settings"} render={() => <Settings />} />
        </Content>
      </FlexWrapper>
    </BrowserRouter>
  );
}

export default App;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
