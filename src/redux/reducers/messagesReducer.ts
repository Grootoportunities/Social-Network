type MessageType = { id: number; message: string };
type DialogType = { id: number; name: string };
export type MessagesPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
  messageValue: string;
};

type ActionsType = AddMessageAT | SetMessageValueAT;
export type AddMessageAT = { type: "ADD-MESSAGE" };
export type SetMessageValueAT = { type: "SET-MESSAGE-VALUE"; value: string };

const initialState: MessagesPageType = {
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
): MessagesPageType => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      const newMessageElement: MessageType = {
        id: 6,
        message: state.messageValue,
      };

      return {
        ...state,
        messages: [...state.messages, newMessageElement],
        messageValue: "",
      };
    }
    case "SET-MESSAGE-VALUE":
      return { ...state, messageValue: action.value };

    default:
      return state;
  }
};

export const addMessageAC = (): AddMessageAT => ({ type: "ADD-MESSAGE" });
export const setMessageValueAC = (value: string): SetMessageValueAT => ({
  type: "SET-MESSAGE-VALUE",
  value,
});
