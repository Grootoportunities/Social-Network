import {
  addMessageAC,
  MessagesPageType,
  messagesReducer,
} from "../messagesReducer";

let startState: MessagesPageType;

beforeEach(() => {
  startState = {
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
});

it("Message should be added correctly", () => {
  const endState = messagesReducer(startState, addMessageAC("New message"));

  expect(endState.messages.length).toBe(6);
  expect(endState.messages[5].message).toBe("New message");
});
