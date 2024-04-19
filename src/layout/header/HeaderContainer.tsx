import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import axios from "axios";
import {
  AuthDomainType,
  AuthType,
  setAuthUserDataAC,
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
        }
      });
  }

  render() {
    return (
      <Header
        isAuth={this.props.userAuthData.isAuth}
        login={this.props.userAuthData.login}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  userAuthData: state.userAuth,
});

export const HeaderContainer = connect(mapStateToProps, {
  setUserAuthData: setAuthUserDataAC,
})(HeaderAPI);

//TYPES

type HeaderAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  userAuthData: AuthDomainType;
};

type MapDispatchToPropsType = {
  setUserAuthData: (data: AuthType) => {};
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
