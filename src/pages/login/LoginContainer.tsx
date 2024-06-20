import { FC } from "react";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";
import { LoginFormData, ReduxLoginForm } from "./loginForm/LoginForm";
import { connect } from "react-redux";
import { loginTC } from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import { LoginData } from "../../api/authAPI";

type Props = {
  isAuth: boolean;
  captcha: string | undefined;

  login: (data: LoginData) => void;
};

const Login: FC<Props> = ({ isAuth, login, captcha }) => {
  const onSubmit = (formData: LoginFormData) => {
    const { email, password, rememberMe, captcha } = formData;

    login({
      email,
      password,
      rememberMe,
      captcha,
    });
  };

  if (isAuth) return <Redirect to={"/profile"} />;

  return (
    <section>
      <Container>
        <FlexWrapper justifyContent="center" direction="column" gap={"30px"}>
          <LoginHeader>LOGIN</LoginHeader>
          <ReduxLoginForm onSubmit={onSubmit} captcha={captcha} />
        </FlexWrapper>
      </Container>
    </section>
  );
};

const mapStateToProps = (state: RootStateType): MapStateToProps => ({
  isAuth: state.userAuth.isAuth,
  captcha: state.userAuth.captcha,
});

export default connect(mapStateToProps, {
  login: loginTC,
})(Login);

type MapStateToProps = {
  isAuth: boolean;
  captcha: string | undefined;
};

const LoginHeader = styled.h2`
  align-self: center;
`;
