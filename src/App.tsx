import React, { Component, ComponentType } from "react";
import { FlexWrapper } from "./components/FlexWrapper/FlexWrapper";
import { HashRouter, Route, withRouter } from "react-router-dom";
import { News } from "./pages/news/News";
import { Music } from "./pages/music/Music";
import { Settings } from "./pages/settings/Settings";
import styled from "styled-components";
import { MessagesContainer } from "./pages/messages/MessagesContainer";
import { SidebarContainer } from "./layout/sidebar/SidebarContainer";
import { UsersContainer } from "./pages/users/UsersContainer";
import { Theme } from "./styles/Theme";
import { ProfileContainer } from "./pages/profile/ProfileContainer";
import { HeaderContainer } from "./layout/header/HeaderContainer";
import { LoginContainer } from "./pages/login/LoginContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/appReducer";
import { RootStateType, store } from "./redux/redux-store";
import { Preloader } from "./components/Preloader/Preloader";
import { GlobalStyle } from "./styles/Global.styled";

class App extends Component<AppAPIProps> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.appIsInit)
      return (
        <FlexWrapper justifyContent={"center"} alignItems={"center"}>
          <Preloader />
        </FlexWrapper>
      );

    return (
      <>
        <HeaderContainer />
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
            <Route path={"/login"} render={() => <LoginContainer />} />
          </Content>
        </FlexWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: RootStateType) => ({
  appIsInit: state.app.isInitialized,
});

const AppContainer = compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  }),
)(App);

export const SocialNetwork = () => (
  <HashRouter>
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer />
    </Provider>
  </HashRouter>
);

//TYPES

type MapStateToProps = {
  appIsInit: boolean;
};

type MapDispatchToProps = {
  initializeApp: () => void;
};

type AppAPIProps = MapStateToProps & MapDispatchToProps;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Theme.colors.content};
`;
