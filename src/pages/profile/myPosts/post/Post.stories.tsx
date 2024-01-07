import { Post } from "./Post";

export default {
  title: "Post",
  component: Post,
};

export const FirstPost = () => (
  <Post postMessage={"First Post"} likesCount={1} />
);

export const SecondPost = () => (
  <Post postMessage={"Second Post"} likesCount={2} />
);
