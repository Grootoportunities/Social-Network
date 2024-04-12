import React, { FC } from "react";
import { User } from "./user/User";
import defaultAva from "../../assets/3906412.png";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { UserType } from "../../redux/reducers/usersReducer";
import { S } from "./_styles";

type UsersProps = {
  users: UserType[];
  totalUsersCount: number;
  count: number;
  page: number;
  onChangePageHandler: (page: number) => void;
  onChangeSubscribeHandler: (userID: string) => void;
};
export const Users: FC<UsersProps> = ({
  users,
  totalUsersCount,
  count,
  page,
  onChangePageHandler,
  onChangeSubscribeHandler,
}) => {
  let pages = [];

  const pageCount = Math.ceil(totalUsersCount / count);

  for (let i = 1; i <= pageCount; i++) pages.push(i);

  const mappedPages = pages.map((p) => {
    return (
      <li>
        <S.Page currentPage={page} p={p} onClick={() => onChangePageHandler(p)}>
          {p}
        </S.Page>
      </li>
    );
  });

  const mappedUsers = users.map((u) => {
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
        <FlexWrapper direction={"column"} alignItems={"center"} gap={"10px"}>
          <S.PagesList>{mappedPages}</S.PagesList>
          <ul>{mappedUsers}</ul>
        </FlexWrapper>
      </Container>
    </section>
  );
};
