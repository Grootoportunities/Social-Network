import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Button } from "../../../../components/Button/Button";
import styled from "styled-components";

export type PostFormData = {
  post: string;
};

const StyledPostForm: FC<InjectedFormProps<PostFormData>> = (props) => {
  return (
    <PostForm onSubmit={props.handleSubmit}>
      <Field placeholder={"Post"} name={"post"} component={"textarea"} />
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
