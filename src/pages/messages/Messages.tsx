import React, { useRef } from "react";
import { Container } from "../../components/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import { MessagesPageType } from "../../redux/State";
import dialogAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Route } from "react-router-dom";
import { Button } from "../../components/Button";

type MessagesProps = {
  state: MessagesPageType;
  addMessageCallback: (newMessage: string) => void;
};

export const Messages: React.FC<MessagesProps> = ({
  state,
  addMessageCallback,
}) => {
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
        render={() => <S.ActiveMessage></S.ActiveMessage>}
      />
    </FlexWrapper>
  ));

  const newMessage = useRef<HTMLTextAreaElement>(null);

  const onSendMessage = () => {
    if (newMessage.current) addMessageCallback(newMessage.current.value);
  };

  return (
    <S.Messages>
      <Container>
        <S.Dialogs>{mappedDialogs}</S.Dialogs>
        <S.DialogsMessages>{mappedMessages}</S.DialogsMessages>
      </Container>
      <FlexWrapper alignItems={"center"} justifyContent={"space-evenly"}>
        <S.MessageArea ref={newMessage} />
        <Button name={"Send"} onClick={onSendMessage} />
      </FlexWrapper>
    </S.Messages>
  );
};
