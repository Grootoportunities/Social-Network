import {
  addPostAC,
  PostType,
  setPostValueAC,
} from "../../../redux/reducers/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { RootStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = { posts: PostType[]; postValue: string };
type MapDispatchToPropsType = {
  onValueChange: (value: string) => void;
  addPost: () => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  posts: state.profilePage.posts,
  postValue: state.profilePage.postValue,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  onValueChange: (value: string) => dispatch(setPostValueAC(value)),
  addPost: () => dispatch(addPostAC()),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);
