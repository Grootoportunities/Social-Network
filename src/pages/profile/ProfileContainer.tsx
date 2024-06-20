import { connect } from "react-redux";
import { Profile } from "./Profile";
import { Component, ComponentType } from "react";
import { RootStateType } from "../../redux/redux-store";
import {
  fetchProfilePageTC,
  ProfilePageType,
  ProfileType,
  updateProfile,
  updateProfilePhoto,
  updateProfileStatusTC,
} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPI extends Component<ProfileAPIProps> {
  refreshProfile() {
    let userID = +this.props.match.params.userID;

    if (!userID) {
      if (!this.props.authorizedUserID) {
        userID = 0;
        this.props.history.push("/login");
      } else {
        userID = this.props.authorizedUserID;
      }
    }

    this.props.setUserProfilePage(userID);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: Readonly<ProfileAPIProps>) {
    if (prevProps.match.params.userID !== this.props.match.params.userID) {
      debugger;
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        updateProfileStatus={this.props.updateProfileStatus}
        profilePage={this.props.profilePage}
        isOwner={Boolean(this.props.match.params.userID)}
        updateProfilePhoto={this.props.updateProfilePhoto}
        updateProfile={this.props.updateProfile}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profilePage: state.profilePage,
  authorizedUserID: state.userAuth.id,
  isAuth: state.userAuth.isAuth,
});

export const ProfileContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    setUserProfilePage: fetchProfilePageTC,
    updateProfileStatus: updateProfileStatusTC,
    updateProfilePhoto,
    updateProfile,
  }),
  withRouter,
)(ProfileAPI);

//TYPES

type OwnProfileAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  profilePage: ProfilePageType;
  authorizedUserID: number | null;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  setUserProfilePage: (userID: number) => void;
  updateProfileStatus: (status: string) => void;
  updateProfilePhoto: (photo: File) => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};

type PathParamsType = {
  userID: string;
};

type ProfileAPIProps = RouteComponentProps<PathParamsType> & OwnProfileAPIProps;
