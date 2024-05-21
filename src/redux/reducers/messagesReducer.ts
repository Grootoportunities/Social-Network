type MessageType = { id: number; message: string };
type DialogType = { id: number; name: string };
export type MessagesPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
};

export type MessagesActionsType = AddMessageAT | SetMessageValueAT;
export type AddMessageAT = { type: "ADD-MESSAGE"; messageValue: string };
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
};

export const messagesReducer = (
  state: MessagesPageType = initialState,
  action: MessagesActionsType,
): MessagesPageType => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      const newMessageElement: MessageType = {
        id: 6,
        message: action.messageValue,
      };

      return {
        ...state,
        messages: [...state.messages, newMessageElement],
      };
    }

    default:
      return state;
  }
};

export const addMessageAC = (messageValue: string): AddMessageAT => ({
  type: "ADD-MESSAGE",
  messageValue,
});
