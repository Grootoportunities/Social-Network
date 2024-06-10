import React, { FC } from "react";
import { User } from "./user/User";
import defaultAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { UserType } from "../../redux/reducers/usersReducer";
import { Paginator } from "../../components/Paginator/Paginator";

type UsersProps = {
  users: UserType[];
  totalUsersCount: number;
  count: number;
  page: number;

  onChangePageHandler: (page: number) => void;
  setUn_Follow: (userID: number) => void;
};
export const Users: FC<UsersProps> = ({
  users,
  totalUsersCount,
  count,
  page,
  onChangePageHandler,

  setUn_Follow,
}) => {
  const mappedUsers = users.map((u) => {
    return (
      <User
        key={u.id}
        ava={u.photos.large ? u.photos.large : defaultAva}
        name={u.name}
        isFriend={u.followed}
        status={u.status ? u.status : null}
        location={{ country: "Belarus", city: "Minsk" }}
        userID={u.id}
        entityStatus={u.userEntityStatus}
        setUn_Follow={setUn_Follow}
      />
    );
  });

  return (
    <section>
      <FlexWrapper direction={"column"} alignItems={"center"} gap={"10px"}>
        <Paginator
          totalItemsCount={totalUsersCount}
          page={page}
          count={count}
          onChangePageHandler={onChangePageHandler}
        />
        <ul>{mappedUsers}</ul>
      </FlexWrapper>
    </section>
  );
};
