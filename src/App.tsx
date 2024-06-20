import React, { Component, ComponentType, lazy } from "react";
import { FlexWrapper } from "./components/FlexWrapper/FlexWrapper";
import { HashRouter, Redirect, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import { SidebarContainer } from "./layout/sidebar/SidebarContainer";
import { Theme } from "./styles/Theme";
import { ProfileContainer } from "./pages/profile/ProfileContainer";
import { HeaderContainer } from "./layout/header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/appReducer";
import { RootStateType, store } from "./redux/redux-store";
import { Preloader } from "./components/Preloader/Preloader";
import { GlobalStyle } from "./styles/Global.styled";
import { withSuspense } from "./hoc/withSuspense";

const News = lazy(() => import("./pages/news/News"));
const Music = lazy(() => import("./pages/music/Music"));
const Settings = lazy(() => import("./pages/settings/Settings"));
const UsersContainer = lazy(() => import("./pages/users/UsersContainer"));
const LoginContainer = lazy(() => import("./pages/login/LoginContainer"));
const MessagesContainer = lazy(
  () => import("./pages/messages/MessagesContainer"),
);

class App extends Component<AppAPIProps> {
  catchAllUnhandledErrors = (promiseRejectEvent: PromiseRejectionEvent) => {
    debugger;
    alert("Error occured");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors,
    );
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
            <Route path={"/"} render={() => <Redirect to={"/profile"} />} />
            <Route
              path={"/profile/:userID?"}
              render={() => <ProfileContainer />}
            />
            <Route
              path={"/messages"}
              render={withSuspense(MessagesContainer)}
            />
            <Route path={"/users"} render={withSuspense(UsersContainer)} />
            <Route path={"/news"} render={withSuspense(News)} />
            <Route path={"/music"} render={withSuspense(Music)} />
            <Route path={"/settings"} render={withSuspense(Settings)} />
            <Route path={"/login"} render={withSuspense(LoginContainer)} />
            {/*<Route path={"*"} render={() => <div>404</div>} />*/}
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
