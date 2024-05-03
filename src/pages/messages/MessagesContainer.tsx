import {
  addMessageAC,
  MessagesPageType,
  setMessageValueAC,
} from "../../redux/reducers/messagesReducer";
import { Messages } from "./Messages";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ComponentType } from "react";

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

export const MessagesContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Messages);
