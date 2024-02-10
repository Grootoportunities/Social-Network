import React from "react";
import { Container } from "../../components/Container";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { ActionsType, ProfilePageType } from "../../redux/Store";

type ProfileProps = {
  profilePageState: ProfilePageType;
  dispatch: (action: ActionsType) => void;
};

export const Profile: React.FC<ProfileProps> = ({
  profilePageState,
  dispatch,
}) => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPosts
          postValue={profilePageState.postValue}
          posts={profilePageState.posts}
          dispatch={dispatch}
        />
      </Container>
    </section>
  );
};
