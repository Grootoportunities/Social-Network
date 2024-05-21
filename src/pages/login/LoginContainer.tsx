import { FC } from "react";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";
import { LoginFormData, ReduxLoginForm } from "./loginForm/LoginForm";
import { connect } from "react-redux";
import { loginTC } from "../../redux/reducers/authReducer";
import { RootStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type Props = {
  isAuth: boolean;

  login: (data: LoginFormData) => void;
};

const Login: FC<Props> = ({ isAuth, login }) => {
  const onSubmit = (formData: LoginFormData) =>
    login({
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    });

  if (isAuth) return <Redirect to={"/profile"} />;

  return (
    <section>
      <Container>
        <FlexWrapper justifyContent="center" direction="column" gap={"30px"}>
          <LoginHeader>LOGIN</LoginHeader>
          <ReduxLoginForm onSubmit={onSubmit} />
        </FlexWrapper>
      </Container>
    </section>
  );
};

const mapStateToProps = (state: RootStateType): MapStateToProps => ({
  isAuth: state.userAuth.isAuth,
});

export const LoginContainer = connect(mapStateToProps, {
  login: loginTC,
})(Login);

type MapStateToProps = {
  isAuth: boolean;
};

const LoginHeader = styled.h2`
  align-self: center;
`;
