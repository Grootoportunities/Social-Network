import React from "react";
import { Container } from "../../Container";
import cover from "../../assets/Landscape-Color.jpg";
import { S } from "./Profile_Styles";
import { MyPosts } from "./myPosts/MyPosts";

export const Profile: React.FC = () => {
  return (
    <section>
      <Container>
        <S.Cover src={cover} />
        <MyPosts />
      </Container>
    </section>
  );
};