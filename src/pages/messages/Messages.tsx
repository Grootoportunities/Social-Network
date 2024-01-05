import React from "react";
import { Container } from "../../Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";

export const Messages: React.FC = () => {
  return (
    <S.Messages>
      <Container>
        <S.Dialogs>
          <Dialog id={1} name={"Daniil"} />
          <Dialog id={2} name={"Anastasia"} />
          <Dialog id={3} name={"Danik"} />
          <Dialog id={4} name={"Semen"} />
          <Dialog id={5} name={"Max"} />
        </S.Dialogs>
        <S.DialogsMessages>
          <Message message={"Hi!"} />
          <Message message={"How are you doing?"} />
          <Message message={"Bye"} />
        </S.DialogsMessages>
      </Container>
    </S.Messages>
  );
};
