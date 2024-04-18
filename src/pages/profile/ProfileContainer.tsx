import { connect } from "react-redux";
import { Profile } from "./Profile";
import { Component } from "react";
import axios from "axios";
import { RootStateType } from "../../redux/redux-store";
import {
  ProfilePageType,
  ProfileType,
  setUserProfilePageAC,
} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ProfileAPI extends Component<ProfileAPIProps> {
  componentDidMount() {
    let userID = this.props.match.params.userID;

    if (!userID) userID = "2";

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((res) => {
        debugger;
        this.props.setUserProfilePage(res.data);
      });
  }

  render() {
    return <Profile profilePage={this.props.profilePage} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profilePage: state.profilePage,
});

const ProfileAPIWithURL = withRouter(ProfileAPI);

export const ProfileContainer = connect(mapStateToProps, {
  setUserProfilePage: setUserProfilePageAC,
})(ProfileAPIWithURL);

//TYPES

type OwnProfileAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  profilePage: ProfilePageType;
};

type MapDispatchToPropsType = {
  setUserProfilePage: (profile: ProfileType) => void;
};

type PathParamsType = {
  userID: string;
};

type ProfileAPIProps = RouteComponentProps<PathParamsType> & OwnProfileAPIProps;
