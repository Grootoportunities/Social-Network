import React from "react";
import { Container } from "../../components/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import { MessagesPageType } from "../../redux/State";
import dialogAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Route } from "react-router-dom";
import styled from "styled-components";

type MessagesProps = { state: MessagesPageType };

export const Messages: React.FC<MessagesProps> = ({ state }) => {
  const mappedDialogs = state.dialogs.map((d) => (
    <FlexWrapper key={d.id} alignItems={"center"}>
      <S.DialogAva src={dialogAva} />
      <Dialog key={d.id} id={d.id} name={d.name} />
    </FlexWrapper>
  ));

  const mappedMessages = state.messages.map((m) => (
    <FlexWrapper gap={"10px"} alignItems={"center"}>
      <Message key={m.id} message={m.message} />
      <Route
        path={`/messages/${m.id}`}
        render={() => <ActiveMessage></ActiveMessage>}
      />
    </FlexWrapper>
  ));

  return (
    <S.Messages>
      <Container>
        <S.Dialogs>{mappedDialogs}</S.Dialogs>
        <S.DialogsMessages>{mappedMessages}</S.DialogsMessages>
      </Container>
    </S.Messages>
  );
};

const ActiveMessage = styled.div`
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
