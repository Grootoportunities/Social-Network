import React from "react";
import { Container } from "../../components/Container";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { RootStoreType } from "../../redux/redux-store";

type ProfileProps = {
  store: RootStoreType;
};

export const Profile: React.FC<ProfileProps> = ({ store }) => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPostsContainer store={store} />
      </Container>
    </section>
  );
};
