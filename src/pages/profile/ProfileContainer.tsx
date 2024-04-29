import { connect } from "react-redux";
import { Profile } from "./Profile";
import { Component } from "react";
import { RootStateType } from "../../redux/redux-store";
import {
  fetchProfilePageTC,
  ProfilePageType,
} from "../../redux/reducers/profileReducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

class ProfileAPI extends Component<ProfileAPIProps> {
  componentDidMount() {
    let userID = this.props.match.params.userID;

    if (!userID) userID = "2";

    this.props.setUserProfilePage(userID);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"login"} />;

    return <Profile profilePage={this.props.profilePage} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profilePage: state.profilePage,
  isAuth: state.userAuth.isAuth,
});

const ProfileAPIWithURL = withRouter(ProfileAPI);

export const ProfileContainer = connect(mapStateToProps, {
  setUserProfilePage: fetchProfilePageTC,
})(ProfileAPIWithURL);

//TYPES

type OwnProfileAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  profilePage: ProfilePageType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  setUserProfilePage: (userID: string) => void;
};

type PathParamsType = {
  userID: string;
};

type ProfileAPIProps = RouteComponentProps<PathParamsType> & OwnProfileAPIProps;
