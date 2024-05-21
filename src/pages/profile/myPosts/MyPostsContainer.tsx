import { addPostAC, PostType } from "../../../redux/reducers/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { RootStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = { posts: PostType[] };
type MapDispatchToPropsType = {
  addPost: (postValue: string) => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  posts: state.profilePage.posts,
});
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  addPost: (postValue: string) => dispatch(addPostAC(postValue)),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);
