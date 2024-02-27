import { connect } from "react-redux";
import { Users } from "./Users";
import { RootStateType } from "../../redux/redux-store";
import {
  setUsersAC,
  un_followAC,
  UsersType,
  UserType,
} from "../../redux/reducers/usersReducer";
import { Dispatch } from "redux";

type MapDispatchToPropsType = {
  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
};

const mapStateToProps = (state: RootStateType): UsersType => ({
  users: state.usersPage.users,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  un_follow: (id: string) => dispatch(un_followAC(id)),
  setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
