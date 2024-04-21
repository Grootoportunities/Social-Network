import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import {
  AuthDomainType,
  AuthType,
  setAuthUserDataAC,
  setAuthUserProfilePictureAC,
} from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/redux-store";
import { profileAPI } from "../../api/profileAPI";
import { authAPI } from "../../api/authAPI";

class HeaderAPI extends Component<HeaderAPIProps> {
  componentDidMount() {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        this.props.setUserAuthData(data.data);

        profileAPI.getProfile(data.data.id.toString()).then((data) => {
          if (data.photos.small)
            this.props.setAuthUserProfilePicture(data.photos.small);
        });
      }
    });
  }

  render() {
    return (
      <Header
        isAuth={this.props.userAuthData.isAuth}
        login={this.props.userAuthData.login}
        headerAva={this.props.userAuthData.authUserProfilePicture}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  userAuthData: state.userAuth,
});

export const HeaderContainer = connect(mapStateToProps, {
  setUserAuthData: setAuthUserDataAC,
  setAuthUserProfilePicture: setAuthUserProfilePictureAC,
})(HeaderAPI);

//TYPES

type HeaderAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  userAuthData: AuthDomainType;
};

type MapDispatchToPropsType = {
  setUserAuthData: (data: AuthType) => void;
  setAuthUserProfilePicture: (picture: string) => void;
};
