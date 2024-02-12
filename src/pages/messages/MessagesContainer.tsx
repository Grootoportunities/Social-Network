import {
  addMessageAC,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";
import { Messages } from "./Messages";
import { connect } from "react-redux";
import { RootDispatchType, RootStateType } from "../../redux/redux-store";

const messagesPageState = (state: RootStateType) => ({
  state: state.messagesPage,
});
const messagesDispatch = (dispatch: RootDispatchType) => ({
  sendMessage: () => dispatch(addMessageAC()),
  setValue: (value: string) => dispatch(setMessageValueAC(value)),
});

export const MessagesContainer = connect(
  messagesPageState,
  messagesDispatch,
)(Messages);
