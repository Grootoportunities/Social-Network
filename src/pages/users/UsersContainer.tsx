import { connect } from "react-redux";
import { Users } from "./Users";
import { RootDispatchType, RootStateType } from "../../redux/redux-store";
import {
  setUsersAC,
  un_followAC,
  UserType,
} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state: RootStateType) => ({
  users: state.usersPage.users,
});
const matDispatchToProps = (dispatch: RootDispatchType) => ({
  un_follow: (id: string) => dispatch(un_followAC(id)),
  setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
});

export const UsersContainer = connect(
  mapStateToProps,
  matDispatchToProps,
)(Users);
