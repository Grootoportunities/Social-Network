import React from "react";

type MessageProps = {
  message: string;
};
export const Message: React.FC<MessageProps> = (props) => {
  const { message } = props;

  return <span>{message}</span>;
};
