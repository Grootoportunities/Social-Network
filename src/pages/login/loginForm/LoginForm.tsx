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
  captcha: string;
};

type Props = {
  captcha: string | undefined;
};

const StyledLoginForm: FC<Props & InjectedFormProps<LoginFormData, Props>> = ({
  handleSubmit,
  error,
  captcha,
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
    {captcha && <img alt={"Captcha"} src={captcha} />}
    {captcha && (
      <Field
        placeholder={"Captcha"}
        name={"captcha"}
        component={LoginInput}
        validate={[required]}
      />
    )}
    <Button type={"submit"}>Login</Button>
    <FormError>{error}</FormError>
  </LoginForm>
);

export const ReduxLoginForm = reduxForm<LoginFormData, Props>({
  form: "login",
})(StyledLoginForm);

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormError = styled.span`
  color: red;
`;
