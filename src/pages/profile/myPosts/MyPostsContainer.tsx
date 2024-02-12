import {
  addPostAC,
  setPostValueAC,
} from "../../../redux/reducers/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { RootDispatchType, RootStateType } from "../../../redux/redux-store";

const profilePageState = (state: RootStateType) => ({
  posts: state.profilePage.posts,
  postValue: state.profilePage.postValue,
});
const profileDispatch = (dispatch: RootDispatchType) => ({
  onValueChange: (value: string) => dispatch(setPostValueAC(value)),
  addPost: () => {
    // if (state.profilePage.postValue.trim() !== "")
    dispatch(addPostAC());
  },
});

export const MyPostsContainer = connect(
  profilePageState,
  profileDispatch,
)(MyPosts);
