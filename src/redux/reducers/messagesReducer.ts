import { ActionsType, MessagesPageType, MessageType } from "../Store";

export type AddMessageAT = { type: "ADD-MESSAGE" };
export type SetMessageValueAT = { type: "SET-MESSAGE-VALUE"; value: string };

const initialState = {
  dialogs: [
    { id: 1, name: "Daniil" },
    { id: 2, name: "Anastasia" },
    { id: 3, name: "Danik" },
    { id: 4, name: "Semen" },
    { id: 5, name: "Max" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you doing?" },
    { id: 3, message: "Bye" },
    { id: 4, message: "I'm Semen" },
    { id: 5, message: "And i'm Max" },
  ],
  messageValue: "",
};

export const messagesReducer = (
  state: MessagesPageType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      const newMessageElement: MessageType = {
        id: 6,
        message: state.messageValue,
      };

      state.messages.push(newMessageElement);
      state.messageValue = "";

      return state;
    }
    case "SET-MESSAGE-VALUE": {
      state.messageValue = action.value;

      return state;
    }
    default:
      return state;
  }
};

export const addMessageAC = (): AddMessageAT => ({ type: "ADD-MESSAGE" });
export const setMessageValueAC = (value: string): SetMessageValueAT => ({
  type: "SET-MESSAGE-VALUE",
  value,
});
