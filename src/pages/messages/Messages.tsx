import React, { ChangeEvent } from "react";
import { Container } from "../../components/Container";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { S } from "./Messages_Styles";
import { ActionsType, MessagesPageType } from "../../redux/State";
import dialogAva from "../../assets/3906412.png";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Route } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  addMessageAC,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";

type MessagesProps = {
  messagesPageState: MessagesPageType;
  dispatch: (action: ActionsType) => void;
};

export const Messages: React.FC<MessagesProps> = ({
  messagesPageState,
  dispatch,
}) => {
  const mappedDialogs = messagesPageState.dialogs.map((d) => (
    <FlexWrapper key={d.id} alignItems={"center"}>
      <S.DialogAva src={dialogAva} />
      <Dialog key={d.id} id={d.id} name={d.name} />
    </FlexWrapper>
  ));

  const mappedMessages = messagesPageState.messages.map((m) => (
    <FlexWrapper gap={"10px"} alignItems={"center"}>
      <Message key={m.id} message={m.message} />
      <Route
        path={`/messages/${m.id}`}
        render={() => <S.ActiveMessage></S.ActiveMessage>}
      />
    </FlexWrapper>
  ));

  const onSendMessage = () => {
    if (messagesPageState.messageValue.trim() !== "") dispatch(addMessageAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setMessageValueAC(e.currentTarget.value));

  return (
    <S.Messages>
      <Container>
        <S.Dialogs>{mappedDialogs}</S.Dialogs>
        <S.DialogsMessages>{mappedMessages}</S.DialogsMessages>
      </Container>
      <FlexWrapper alignItems={"center"} justifyContent={"space-evenly"}>
        <S.MessageArea
          value={messagesPageState.messageValue}
          onChange={onChangeHandler}
        />
        <Button name={"Send"} onClick={onSendMessage} />
      </FlexWrapper>
    </S.Messages>
  );
};
