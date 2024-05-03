import { connect } from "react-redux";
import { Profile } from "./Profile";
import { Component, ComponentType } from "react";
import { RootStateType } from "../../redux/redux-store";
import {
  fetchProfilePageTC,
  ProfilePageType,
} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPI extends Component<ProfileAPIProps> {
  componentDidMount() {
    let userID = this.props.match.params.userID;

    if (!userID) userID = "2";

    this.props.setUserProfilePage(userID);
  }

  render() {
    return <Profile profilePage={this.props.profilePage} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profilePage: state.profilePage,
});

export const ProfileContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    setUserProfilePage: fetchProfilePageTC,
  }),
  withRouter,
)(ProfileAPI);

//TYPES

type OwnProfileAPIProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  profilePage: ProfilePageType;
};

type MapDispatchToPropsType = {
  setUserProfilePage: (userID: string) => void;
};

type PathParamsType = {
  userID: string;
};

type ProfileAPIProps = RouteComponentProps<PathParamsType> & OwnProfileAPIProps;
