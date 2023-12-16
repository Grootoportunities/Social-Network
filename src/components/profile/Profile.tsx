import React from "react";
import { Container } from "../../Container";
import cover from "../../assets/Landscape-Color.jpg";
import styled from "styled-components";

export const Profile = () => {
  return (
    <StyledProfile>
      <Container>
        <Cover src={cover} />
        <div>
          <div>My Post</div>
          <div>New Post</div>
        </div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </Container>
    </StyledProfile>
  );
};

const StyledProfile = styled.section`
  padding: 60px;
`;

const Cover = styled.img`
  width: 100%;
`;
