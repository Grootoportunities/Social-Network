import {
  addMessageAC,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";
import { Messages } from "./Messages";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { MessagesPageType } from "../../redux/Store";

type MapStateToPropsType = { state: MessagesPageType };
type MapDispatchToPropsType = {
  sendMessage: () => void;
  setValue: (value: string) => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  state: state.messagesPage,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  sendMessage: () => dispatch(addMessageAC()),
  setValue: (value: string) => dispatch(setMessageValueAC(value)),
});

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);
