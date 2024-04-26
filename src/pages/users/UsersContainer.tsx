import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import {
  setIsPendingAC,
  setPageAC,
  setTotalUsersCountAC,
  setUserEntityStatusAC,
  setUsersAC,
  un_followAC,
  UsersType,
  UserType,
} from "../../redux/reducers/usersReducer";
import React, { Component } from "react";
import { Users } from "./Users";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Preloader } from "../../components/Preloader/Preloader";
import { usersAPI } from "../../api/usersAPI";

type UsersAPIComponentProps = UsersType & {
  un_follow: (id: number, shouldSubscribe: boolean) => void;
  setUsers: (users: UserType[]) => void;
  setPage: (page: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  setIsPending: (isPending: boolean) => void;
  setUserEntityStatus: (entityStatus: boolean, id: number) => void;
};

export class UsersAPIComponent extends Component<UsersAPIComponentProps> {
  onChangePageHandler = (page: number) => {
    this.props.setIsPending(true);
    this.props.setPage(page);

    usersAPI.getUsers(page, this.props.count).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsPending(false);
    });
  };

  onChangeSubscribeHandler = (userID: number, shouldSubscribe: boolean) =>
    this.props.un_follow(userID, shouldSubscribe);

  componentDidMount() {
    this.props.setIsPending(true);

    usersAPI.getUsers(this.props.page, this.props.count).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
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
            setUserEntityStatus={this.props.setUserEntityStatus}
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
  setUserEntityStatus: setUserEntityStatusAC,
})(UsersAPIComponent);
