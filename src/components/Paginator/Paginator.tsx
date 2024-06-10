import React, { FC } from "react";
import { S } from "./_styles";

type PaginatorProps = {
  totalItemsCount: number;
  page: number;
  count: number;

  onChangePageHandler: (page: number) => void;
};

export const Paginator: FC<PaginatorProps> = ({
  totalItemsCount,
  page,
  count,
  onChangePageHandler,
}) => {
  let pages = [];

  const pageCount = Math.ceil(totalItemsCount / count);

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

  return <S.PagesList>{mappedPages}</S.PagesList>;
};
