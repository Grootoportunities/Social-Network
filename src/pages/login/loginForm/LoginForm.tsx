import styled from "styled-components";
import { Button } from "../../../components/Button/Button";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FC } from "react";
import { required } from "../../../utils/validators/validators";
import { LoginInput } from "../../../components/FormsControls/LoginInput/LoginInput";

export type LoginFormData = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const StyledLoginForm: FC<InjectedFormProps<LoginFormData>> = (props) => (
  <LoginForm onSubmit={props.handleSubmit}>
    <Field
      placeholder={"Login"}
      name={"login"}
      component={LoginInput}
      validate={[required]}
    />
    <Field
      placeholder={"Password"}
      name={"password"}
      component={LoginInput}
      validate={[required]}
    />
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
