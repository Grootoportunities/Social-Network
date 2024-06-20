import styled from "styled-components";
import { Button } from "../../../components/Button/Button";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FC } from "react";
import { required } from "../../../utils/validators/validators";
import { LoginInput } from "../../../components/FormsControls/LoginInput/LoginInput";

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const StyledLoginForm: FC<InjectedFormProps<LoginFormData>> = ({
  handleSubmit,
  error,
}) => (
  <LoginForm onSubmit={handleSubmit}>
    <Field
      placeholder={"Email"}
      name={"email"}
      component={LoginInput}
      validate={[required]}
      type={"email"}
    />
    <Field
      placeholder={"Password"}
      name={"password"}
      component={LoginInput}
      validate={[required]}
      type={"password"}
    />
    <div>
      <span>Remember me</span>
      <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
    </div>
    <Button type={"submit"}>Login</Button>
    <FormError>{error}</FormError>
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

export const FormError = styled.span`
  color: red;
`;
