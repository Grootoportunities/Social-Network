import React from "react";
import { NavLink } from "react-router-dom";

type DialogsProps = { name: string; id: number };

export const Dialog: React.FC<DialogsProps> = (props) => {
  const { name, id } = props;

  return <NavLink to={"/messages/" + id}>{name}</NavLink>;
};
