import React, { FC } from "react";
import { UserType } from "../../redux/reducers/usersReducer";
import defaultAva from "../../assets/3906412.png";
import { User } from "./user/User";
import { Container } from "../../components/Container";
import axios from "axios";
import { Button } from "../../components/Button";

type UsersProps = {
  users: UserType[];

  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
};

export const Users: FC<UsersProps> = ({ users, un_follow, setUsers }) => {
  const getUsers = () => {
    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => setUsers(res.data.items));
    }
  };

  const mappedUsers = users.map((u) => {
    const onChangeSubscribeHandler = (userID: string) => un_follow(userID);

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
  });

  return (
    <section>
      <Container>
        <Button onClick={getUsers}>Get Users</Button>
        <ul>{mappedUsers}</ul>
      </Container>
    </section>
  );
};
