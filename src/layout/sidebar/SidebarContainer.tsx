import { connect } from "react-redux";
import { Sidebar } from "./Sidebar";
import { RootStateType } from "../../redux/redux-store";
import { SidebarType } from "../../redux/Store";

type MapStateToPropsType = { state: SidebarType };

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  state: state.sidebar,
});

export const SidebarContainer = connect(mapStateToProps)(Sidebar);
