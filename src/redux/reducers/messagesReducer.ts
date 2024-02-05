import { ActionsType, MessagesPageType, MessageType } from "../State";

export type AddMessageAT = { type: "ADD-MESSAGE" };
export type SetMessageValueAT = { type: "SET-MESSAGE-VALUE"; value: string };

export const messagesReducer = (
  state: MessagesPageType,
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
