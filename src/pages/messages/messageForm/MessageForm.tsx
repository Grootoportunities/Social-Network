import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import styled from "styled-components";
import { Button } from "../../../components/Button/Button";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

import { MessageArea } from "../../../components/FormsControls/MessageArea/MessageArea";

export type MessageFormData = {
  message: string;
};

const maxLength = maxLengthCreator(30);

const StyledMessageForm: FC<InjectedFormProps<MessageFormData>> = (props) => {
  return (
    <MessageForm onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Message"}
        name={"message"}
        component={MessageArea}
        validate={[required, maxLength]}
      />
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
  gap: 20px;
`;
