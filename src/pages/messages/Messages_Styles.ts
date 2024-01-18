import styled from "styled-components";
import { Container } from "../../components/Container";

const Messages = styled.section`
  ${Container} {
    display: flex;
    justify-content: center;
    gap: 100px;
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

export const S = { Messages, Dialogs, DialogsMessages, DialogAva };
