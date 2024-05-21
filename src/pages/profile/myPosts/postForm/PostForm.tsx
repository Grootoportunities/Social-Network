import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Button } from "../../../../components/Button/Button";
import styled from "styled-components";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { PostArea } from "../../../../components/FormsControls/PostArea/PostArea";

export type PostFormData = {
  post: string;
};

const maxLength = maxLengthCreator(10);

const StyledPostForm: FC<InjectedFormProps<PostFormData>> = (props) => {
  return (
    <PostForm onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Post"}
        name={"post"}
        component={PostArea}
        validate={[required, maxLength]}
      />
      <Button type={"submit"}>Add Post</Button>
    </PostForm>
  );
};

export const ReduxPostForm = reduxForm<PostFormData>({ form: "post" })(
  StyledPostForm,
);

const PostForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;
