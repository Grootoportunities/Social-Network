import React from "react";
import { Container } from "../../components/Container";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/State";

type ProfileProps = {
  profilePageState: ProfilePageType;
  addPostCallback: () => void;
  setPostValueCallback: (value: string) => void;
};

export const Profile: React.FC<ProfileProps> = ({
  profilePageState,
  addPostCallback,
  setPostValueCallback,
}) => {
  return (
    <section>
      <Container>
        <ProfileInfo />
        <MyPosts
          postValue={profilePageState.postValue}
          posts={profilePageState.posts}
          addPostCallback={addPostCallback}
          setPostValueCallback={setPostValueCallback}
        />
      </Container>
    </section>
  );
};
