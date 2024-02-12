import React from "react";
import {
  addMessageAC,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";
import { Messages } from "./Messages";
import { StoreContext } from "../../StoreContext";

export const MessagesContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};
