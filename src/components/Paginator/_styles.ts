import styled from "styled-components";

type PageProps = {
  currentPage: number;
  p: number;
};

const PagesList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Page = styled.span<PageProps>`
  color: ${(props) => (props.p === props.currentPage && "#1ea7fd") || "black"};
`;

export const S = { PagesList, Page };
