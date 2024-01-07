import { Message } from "./Message";

export default {
  title: "Message",
  component: Message,
};

export const FirstMessage = () => <Message message={"First Message"} />;
export const SecondMessage = () => <Message message={"Second Message"} />;
