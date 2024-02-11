import React from "react";
import {
  addMessageAC,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";
import { RootStoreType } from "../../redux/redux-store";
import { Messages } from "./Messages";

type MessagesProps = {
  store: RootStoreType;
};

export const MessagesContainer: React.FC<MessagesProps> = ({ store }) => {
  const state = store.getState().messagesPage;

  const sendMessageCallback = () => store.dispatch(addMessageAC());
  const setValueCallback = (value: string) =>
    store.dispatch(setMessageValueAC(value));

  return (
    <Messages
      sendMessage={sendMessageCallback}
      setValue={setValueCallback}
      state={state}
    />
  );
};
