import { connect } from "react-redux";
import { Profile } from "./Profile";
import { Component, ComponentType } from "react";
import { RootStateType } from "../../redux/redux-store";
import {
  fetchProfilePageTC,
  ProfilePageType,
  updateProfileStatusTC,
} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPI extends Component<ProfileAPIProps> {
  componentDidMount() {
    let userID = +this.props.match.params.userID;

    if (!userID)
      userID = this.props.authorizedUserID
        ? this.props.authorizedUserID
        : 30713;

    this.props.setUserProfilePage(userID);
  }

  render() {
    return (
      <Profile
        updateProfileStatus={this.props.updateProfileStatus}
        profilePage={this.props.profilePage}
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
};

type PathParamsType = {
  userID: string;
};

type ProfileAPIProps = RouteComponentProps<PathParamsType> & OwnProfileAPIProps;
