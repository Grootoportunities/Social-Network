import styled, { css } from "styled-components";

const Error = styled.span`
  color: red;
`;

const Textarea = styled.textarea<{ error: boolean }>`
  ${(props) =>
    props.error &&
    css<{ error: boolean }>`
      border: 2px solid red;
    `}
`;

const Input = styled.input<{ error: boolean }>`
  ${(props) =>
    props.error &&
    css<{ error: boolean }>`
      border: 2px solid red;
    `}
`;

const MessageArea = styled(Textarea)`
  height: 80px;
  resize: none;
  padding: 10px;
`;

export const S = { Error, MessageArea, Textarea, Input };
