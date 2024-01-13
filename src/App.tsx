import React from "react";
import { FlexWrapper } from "./components/FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Messages } from "./pages/messages/Messages";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import { DialogsType, MessagesType, PostType } from "./index";

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
        <Route path={"/profile"} render={() => <Profile posts={posts} />} />
        <Route
          path={"/messages"}
          render={() => <Messages dialogs={dialogs} messages={messages} />}
        />
        <Route path={"/news"} render={() => <News />} />
        <Route path={"/music"} render={() => <Music />} />
        <Route path={"/settings"} render={() => <Settings />} />
      </FlexWrapper>
    </BrowserRouter>
  );
}

export default App;
