import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import {
  setIsPendingAC,
  setPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  un_followAC,
  UsersType,
  UserType,
} from "../../redux/reducers/usersReducer";
import React, { Component } from "react";
import axios from "axios";
import { Users } from "./Users";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Preloader } from "../../components/Preloader/Preloader";

type UsersAPIComponentProps = UsersType & {
  un_follow: (id: number) => void;
  setUsers: (users: UserType[]) => void;
  setPage: (page: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  setIsPending: (isPending: boolean) => void;
};

type ResponseType = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};

export class UsersAPIComponent extends Component<UsersAPIComponentProps> {
  onChangePageHandler = (page: number) => {
    this.props.setIsPending(true);

    this.props.setPage(page);

    axios
      .get<ResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setIsPending(false);
      });
  };

  onChangeSubscribeHandler = (userID: number) => this.props.un_follow(userID);

  componentDidMount() {
    this.props.setIsPending(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.setIsPending(false);
      });
  }

  render() {
    return (
      <Container>
        {this.props.isPending ? (
          <FlexWrapper justifyContent={"center"}>
            <Preloader />
          </FlexWrapper>
        ) : (
          <Users
            page={this.props.page}
            users={this.props.users}
            count={this.props.count}
            totalUsersCount={this.props.totalUsersCount}
            onChangePageHandler={this.onChangePageHandler}
            onChangeSubscribeHandler={this.onChangeSubscribeHandler}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootStateType): UsersType => ({
  users: state.usersPage.users,
  count: state.usersPage.count,
  totalUsersCount: state.usersPage.totalUsersCount,
  page: state.usersPage.page,
  isPending: state.usersPage.isPending,
});

export const UsersContainer = connect(mapStateToProps, {
  un_follow: un_followAC,
  setUsers: setUsersAC,
  setPage: setPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setIsPending: setIsPendingAC,
})(UsersAPIComponent);
