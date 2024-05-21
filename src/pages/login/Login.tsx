import { FC } from "react";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";
import { LoginFormData, ReduxLoginForm } from "./loginForm/LoginForm";

export const Login: FC = () => {
  const onSubmit = (formData: LoginFormData) => console.log(formData);

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

const LoginHeader = styled.h2`
  align-self: center;
`;
