import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import styled from "styled-components";
import { Button } from "../../../components/Button/Button";

export type MessageFormData = {
  message: string;
};

const StyledMessageForm: FC<InjectedFormProps<MessageFormData>> = (props) => {
  return (
    <MessageForm onSubmit={props.handleSubmit}>
      <Field placeholder={"Message"} name={"message"} component={"textarea"} />
      <Button type={"submit"}>Send</Button>
    </MessageForm>
  );
};

export const ReduxMessageForm = reduxForm<MessageFormData>({ form: "message" })(
  StyledMessageForm,
);

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
