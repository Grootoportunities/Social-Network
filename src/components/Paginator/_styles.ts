import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type PageProps = {
  currentPage: number;
  p: number;
};

const PagesList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Page = styled.span<PageProps>`
  margin: 4px;
  padding: 10px;
  color: ${(props) => (props.p === props.currentPage && "#1ea7fd") || "black"};
  background-color: ${Theme.colors.button};
  border-radius: 50%;
  border: 1px solid ${Theme.colors.sidebarLinks};
`;

export const S = { PagesList, Page };
