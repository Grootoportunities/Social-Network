import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import axios from "axios";
import {
  AuthDomainType,
  AuthType,
  setAuthUserDataAC,
  setAuthUserProfilePictureAC,
} from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/redux-store";

class HeaderAPI extends Component<HeaderAPIProps> {
  componentDidMount() {
    axios
      .get<GetResponseType>(
        "https://social-network.samuraijs.com/api/1.0/auth/me",
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.setUserAuthData(res.data.data);
          //TODO: authAPI and refactor profile request with API
          axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`,
            )
            .then((res) =>
              this.props.setAuthUserProfilePicture(res.data.photos.small),
            );
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

type GetResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: string[];
};
