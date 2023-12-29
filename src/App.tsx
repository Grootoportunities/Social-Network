import React from "react";
import { FlexWrapper } from "./FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";
import { Messages } from "./pages/messages/Messages";

function App() {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Sidebar />
        {/*<Profile />*/}
        <Messages />
      </FlexWrapper>
    </>
  );
}

export default App;
