import React, { FC } from "react";
import { UserType } from "../../redux/reducers/usersReducer";
import yaAva from "./../../assets/photo_2023-10-23_14-55-44.jpg";
import NastyaAva from "./../../assets/Nastya.jpg";
import Daryl from "./../../assets/Daryl.jpg";
import { User } from "./user/User";
import { Container } from "../../components/Container";
import { v1 } from "uuid";

type UsersProps = {
  users: UserType[];

  un_follow: (id: string) => void;
  setUsers: (users: UserType[]) => void;
};

export const Users: FC<UsersProps> = ({ users, un_follow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: v1(),
        name: "Daniil Lameika",
        status: "I am developer of this social network",
        location: { country: "Belarus", city: "Soligorsk" },
        ava: yaAva,
        isFriend: false,
      },
      {
        id: v1(),
        name: "Anastasia Serdukova",
        status: "I am omejka",
        location: { country: "Russia", city: "Krasnodar" },
        ava: NastyaAva,
        isFriend: false,
      },
      {
        id: v1(),
        name: "Daryl Fortescue",
        status: "I am the best good boy",
        location: { country: "Belarus", city: "Soligorsk" },
        ava: Daryl,
        isFriend: false,
      },
    ]);
  }

  const mappedUsers = users.map((u) => {
    const onChangeSubscribeHandler = (userID: string) => un_follow(userID);

    return (
      <User
        key={u.id}
        ava={u.ava}
        name={u.name}
        isFriend={u.isFriend}
        status={u.status}
        location={u.location}
        userID={u.id}
        onChangeSubscribe={onChangeSubscribeHandler}
      />
    );
  });

  return (
    <section>
      <Container>
        <ul>{mappedUsers}</ul>
      </Container>
    </section>
  );
};
