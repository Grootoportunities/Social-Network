import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import {
  getUserOnPageChangeTC,
  getUsersTC,
  setUn_FollowTC,
  UsersType,
} from "../../redux/reducers/usersReducer";
import React, { Component, ComponentType } from "react";
import { Users } from "./Users";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Preloader } from "../../components/Preloader/Preloader";
import { compose } from "redux";
import {
  getCount,
  getIsPending,
  getPage,
  getTotalUsersCount,
  getUsers,
} from "../../redux/selectors/usersSelector";

type UsersAPIComponentProps = UsersType & {
  getUsers: (page: number, count: number) => void;
  getUserOnPageChange: (page: number, count: number) => void;
  setUn_Follow: (userID: number) => void;
};

export class UsersAPIComponent extends Component<UsersAPIComponentProps> {
  onChangePageHandler = (page: number) => {
    const { getUserOnPageChange, count } = this.props;

    getUserOnPageChange(page, count);
  };

  componentDidMount() {
    const { getUsers, page, count } = this.props;

    getUsers(page, count);
  }

  render() {
    const { isPending, page, users, count, totalUsersCount, setUn_Follow } =
      this.props;

    return (
      <Container>
        {isPending ? (
          <FlexWrapper justifyContent={"center"}>
            <Preloader />
          </FlexWrapper>
        ) : (
          <Users
            page={page}
            users={users}
            count={count}
            totalUsersCount={totalUsersCount}
            onChangePageHandler={this.onChangePageHandler}
            setUn_Follow={setUn_Follow}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootStateType): UsersType => ({
  users: getUsers(state),
  count: getCount(state),
  totalUsersCount: getTotalUsersCount(state),
  page: getPage(state),
  isPending: getIsPending(state),
});

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    getUsers: getUsersTC,
    getUserOnPageChange: getUserOnPageChangeTC,
    setUn_Follow: setUn_FollowTC,
  }),
)(UsersAPIComponent);
