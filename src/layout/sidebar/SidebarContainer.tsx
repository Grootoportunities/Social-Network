import { connect } from "react-redux";
import { Sidebar } from "./Sidebar";
import { RootStateType } from "../../redux/redux-store";

const sidebarState = (state: RootStateType) => ({ state: state.sidebar });

export const SidebarContainer = connect(sidebarState)(Sidebar);
