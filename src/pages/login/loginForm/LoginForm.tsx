import styled from "styled-components";
import { Button } from "../../../components/Button/Button";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FC } from "react";

export type LoginFormData = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const StyledLoginForm: FC<InjectedFormProps<LoginFormData>> = (props) => (
  <LoginForm onSubmit={props.handleSubmit}>
    <Field placeholder={"Login"} name={"login"} component={"input"} />
    <Field placeholder={"Password"} name={"password"} component={"input"} />
    <div>
      <span>Remember me</span>
      <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
    </div>
    <Button type={"submit"}>Login</Button>
  </LoginForm>
);

export const ReduxLoginForm = reduxForm<LoginFormData>({ form: "login" })(
  StyledLoginForm,
);

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
