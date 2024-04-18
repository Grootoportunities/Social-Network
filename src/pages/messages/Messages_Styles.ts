import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

const Messages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${Container} {
    display: flex;
    justify-content: center;
    gap: 100px;
  }

  ${FlexWrapper} {
    width: 100%;
  }
`;

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DialogsMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DialogAva = styled.img`
  width: 40px;
`;

const ActiveMessage = styled.div`
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const MessageArea = styled.textarea`
  height: 80px;
  resize: none;
  padding: 10px;
`;

export const S = {
  Messages,
  Dialogs,
  DialogsMessages,
  DialogAva,
  ActiveMessage,
  MessageArea,
};
