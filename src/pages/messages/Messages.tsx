import React, { ChangeEvent } from "react";
import { Container } from "../../components/Container/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import dialogAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Route } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { MessagesPageType } from "../../redux/reducers/messagesReducer";

type MessagesProps = {
  state: MessagesPageType;

  sendMessage: () => void;
  setValue: (value: string) => void;
};

export const Messages: React.FC<MessagesProps> = ({
  state,
  sendMessage,
  setValue,
}) => {
  const mappedDialogs = state.dialogs.map((d) => (
    <FlexWrapper key={d.id} alignItems={"center"}>
      <S.DialogAva src={dialogAva} />
      <Dialog key={d.id} id={d.id} name={d.name} />
    </FlexWrapper>
  ));

  const mappedMessages = state.messages.map((m) => (
    <FlexWrapper key={m.id} gap={"10px"} alignItems={"center"}>
      <Message message={m.message} />
      <Route
        path={`/messages/${m.id}`}
        render={() => <S.ActiveMessage></S.ActiveMessage>}
      />
    </FlexWrapper>
  ));

  const onSendMessage = () => {
    if (state.messageValue.trim() !== "") sendMessage();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.currentTarget.value);

  return (
    <S.Messages>
      <Container>
        <S.Dialogs>{mappedDialogs}</S.Dialogs>
        <S.DialogsMessages>{mappedMessages}</S.DialogsMessages>
      </Container>
      <FlexWrapper alignItems={"center"} justifyContent={"space-evenly"}>
        <S.MessageArea value={state.messageValue} onChange={onChangeHandler} />
        <Button onClick={onSendMessage}>Send</Button>
      </FlexWrapper>
    </S.Messages>
  );
};
