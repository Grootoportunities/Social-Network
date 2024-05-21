import {
  addMessageAC,
  MessagesPageType,
} from "../../redux/reducers/messagesReducer";
import { Messages } from "./Messages";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ComponentType } from "react";

type MapStateToPropsType = { state: MessagesPageType };
type MapDispatchToPropsType = {
  sendMessage: (messageValue: string) => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  state: state.messagesPage,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  sendMessage: (messageValue: string) => dispatch(addMessageAC(messageValue)),
});

export const MessagesContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Messages);
