import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

const Cover = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const AvaPost = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const LikesCount = styled.span`
  margin-left: 10px;
`;

const AvaDescription = styled.span`
  display: inline-block;
  margin: 15px 0;
`;

const PostsHeader = styled.h3`
  margin: 10px 0;
`;

const MyPosts = styled.div`
  ${FlexWrapper} {
    margin: 10px 0;
  }
`;

export const S = {
  Cover,
  AvaPost,
  LikesCount,
  AvaDescription,
  PostsHeader,
  MyPosts,
};
