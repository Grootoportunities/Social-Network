import React from "react";
import { FlexWrapper } from "./FlexWrapper";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Sidebar />
        <Profile />
      </FlexWrapper>
    </>
  );
}

export default App;
