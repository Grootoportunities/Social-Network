import React from "react";
import { Container } from "../../components/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import { DialogsType, MessagesType } from "../../index";

type MessagesProps = {
  dialogs: DialogsType[];
  messages: MessagesType[];
};

export const Messages: React.FC<MessagesProps> = ({ dialogs, messages }) => {
  const mappedDialogs = dialogs.map((d) => (
    <Dialog key={d.id} id={d.id} name={d.name} />
  ));

  const mappedMessages = messages.map((m) => (
    <Message key={m.id} message={m.message} />
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
