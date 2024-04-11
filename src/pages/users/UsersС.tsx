import React, { Component } from "react";
import { Container } from "../../components/Container";
import { User } from "./user/User";
import defaultAva from "../../assets/3906412.png";
import axios from "axios";
import { UserType } from "../../redux/reducers/usersReducer";

type UsersProps = {
  users: UserType[];

  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
};

export class Users extends Component<UsersProps> {
  constructor(props: UsersProps) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => this.props.setUsers(res.data.items));
  }

  render() {
    return (
      <section>
        <Container>
          <ul>
            {this.props.users.map((u) => {
              const onChangeSubscribeHandler = (userID: string) =>
                this.props.un_follow(userID);

              return (
                <User
                  key={u.id}
                  ava={u.ava ? u.ava : defaultAva}
                  name={u.name}
                  isFriend={u.isFriend}
                  status={u.status}
                  location={{ country: "Belarus", city: "Minsk" }}
                  //location={u.location}
                  userID={u.id}
                  onChangeSubscribe={onChangeSubscribeHandler}
                />
              );
            })}
          </ul>
        </Container>
      </section>
    );
  }
}
