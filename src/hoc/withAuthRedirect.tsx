import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "../redux/redux-store";
import { ComponentType } from "react";
import { compose } from "redux";

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  isAuth: state.userAuth.isAuth,
});

export const withAuthRedirect = <T,>(Component: ComponentType<T>) => {
  const RedirectContainer = (props: MapStateToPropsType) => {
    const { isAuth, ...rest } = props;

    if (!isAuth) return <Redirect to={"/login"} />;

    return <Component {...(rest as T)} />;
  };

  return compose(connect(mapStateToProps))(RedirectContainer);
};
