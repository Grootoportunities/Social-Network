import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import {
  setPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  un_followAC,
  UsersType,
  UserType,
} from "../../redux/reducers/usersReducer";
import { Dispatch } from "redux";
import React, { Component } from "react";
import axios from "axios";
import { Users } from "./Users";

type UsersAPIComponentProps = {
  users: UserType[];
  count: number;
  totalUsersCount: number;
  page: number;

  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
  setPage: (page: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
};

type PhotosType = {
  small: string | null;
  large: string | null;
};

type UserDomainType = {
  name: string;
  id: number;
  photos: PhotosType;
  status: string | null;
  followed: boolean;
};

type ResponseType = {
  items: UserDomainType[];
  totalCount: number;
  error: string | null;
};

export class UsersAPIComponent extends Component<UsersAPIComponentProps> {
  onChangePageHandler = (page: number) => {
    this.props.setPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`,
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  onChangeSubscribeHandler = (userID: string) => this.props.un_follow(userID);

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  render() {
    return (
      <Users
        page={this.props.page}
        users={this.props.users}
        count={this.props.count}
        totalUsersCount={this.props.totalUsersCount}
        onChangePageHandler={this.onChangePageHandler}
        onChangeSubscribeHandler={this.onChangeSubscribeHandler}
      />
    );
  }
}

type MapDispatchToPropsType = {
  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
  setPage: (page: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
};

const mapStateToProps = (state: RootStateType): UsersType => ({
  users: state.usersPage.users,
  count: state.usersPage.count,
  totalUsersCount: state.usersPage.totalUsersCount,
  page: state.usersPage.page,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  un_follow: (id: string) => dispatch(un_followAC(id)),
  setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
  setPage: (page: number) => dispatch(setPageAC(page)),
  setTotalUsersCount: (totalUsersCount: number) =>
    dispatch(setTotalUsersCountAC(totalUsersCount)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAPIComponent);
