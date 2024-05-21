import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import {
  AuthDomainType,
  authUserTC,
  logoutTC,
} from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/redux-store";

class HeaderAPI extends Component<HeaderAPIProps> {
  logoutHandler = () => this.props.logout();

  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return (
      <Header
        isAuth={this.props.userAuthData.isAuth}
        login={this.props.userAuthData.login}
        headerAva={this.props.userAuthData.authUserProfilePicture}
        logout={this.logoutHandler}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  userAuthData: state.userAuth,
});

export const HeaderContainer = connect(mapStateToProps, {
  authUser: authUserTC,
  logout: logoutTC,
})(HeaderAPI);

//TYPES

type HeaderAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  userAuthData: AuthDomainType;
};

type MapDispatchToPropsType = {
  authUser: () => void;
  logout: () => void;
};
