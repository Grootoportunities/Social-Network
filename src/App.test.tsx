import ReactDOM from "react-dom";
import { SocialNetwork } from "./App";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
