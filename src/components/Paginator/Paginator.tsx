import React, { FC } from "react";
import { S } from "./_styles";
import { Button } from "../Button/Button";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";

type PaginatorProps = {
  totalItemsCount: number;
  page: number;
  count: number;
  portion: number;
  currentPortionNumber: number;

  onChangePageHandler: (page: number) => void;
  changeCurrentPortionNumberHandler: (currentPortionNumber: number) => void;
};

export const Paginator: FC<PaginatorProps> = ({
  totalItemsCount,
  page,
  count,
  portion,

  onChangePageHandler,
  changeCurrentPortionNumberHandler,
  currentPortionNumber,
}) => {
  let pages = [];
  const pageCount = Math.ceil(totalItemsCount / count);
  const portionCount = Math.ceil(pageCount / portion);
  const leftPortionBorder = (currentPortionNumber - 1) * portion + 1;
  const rightPortionBorder = currentPortionNumber * portion;

  for (let i = 1; i <= pageCount; i++) pages.push(i);

  const filteredPages = pages.filter(
    (p) => p >= leftPortionBorder && p <= rightPortionBorder,
  );
  const mappedPages = filteredPages.map((p, index) => {
    return (
      <li key={index}>
        <S.Page currentPage={page} p={p} onClick={() => onChangePageHandler(p)}>
          <Button>{p}</Button>
        </S.Page>
      </li>
    );
  });

  const increaseCurrentPortionNumberHandler = () =>
    changeCurrentPortionNumberHandler(++currentPortionNumber);
  const decreaseCurrentPortionNumberHandler = () =>
    changeCurrentPortionNumberHandler(--currentPortionNumber);

  return (
    <FlexWrapper direction={"row"} gap={"20px"}>
      {currentPortionNumber > 1 && (
        <Button onClick={decreaseCurrentPortionNumberHandler}>Back</Button>
      )}
      <S.PagesList>{mappedPages}</S.PagesList>
      {portionCount > currentPortionNumber && (
        <Button onClick={increaseCurrentPortionNumberHandler}>Next</Button>
      )}
    </FlexWrapper>
  );
};
