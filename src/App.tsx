import React from "react";
import { FlexWrapper } from "./FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Messages } from "./pages/messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FlexWrapper>
        <Sidebar />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/messages"} component={Messages} />
        <Route path={"/news"} component={News} />
        <Route path={"/music"} component={Music} />
        <Route path={"/settings"} component={Settings} />
      </FlexWrapper>
    </BrowserRouter>
  );
}

export default App;
