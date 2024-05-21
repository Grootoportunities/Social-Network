import React from "react";
import { Container } from "../../components/Container/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import dialogAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Route } from "react-router-dom";
import { MessagesPageType } from "../../redux/reducers/messagesReducer";
import { MessageFormData, ReduxMessageForm } from "./messageForm/MessageForm";

type MessagesProps = {
  state: MessagesPageType;

  sendMessage: (messageValue: string) => void;
};

export const Messages: React.FC<MessagesProps> = ({ state, sendMessage }) => {
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

  const onSendMessage = (formData: MessageFormData) => {
    if (formData.message.trim() !== "") sendMessage(formData.message);
  };

  return (
    <S.Messages>
      <Container>
        <S.Dialogs>{mappedDialogs}</S.Dialogs>
        <S.DialogsMessages>{mappedMessages}</S.DialogsMessages>
      </Container>
      <ReduxMessageForm onSubmit={onSendMessage} />
    </S.Messages>
  );
};
