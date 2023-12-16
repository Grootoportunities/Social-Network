import React from "react";
import "./App.css";
import { FlexWrapper } from "./FlexWrapper";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Profile } from "./components/profile/Profile";

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
