import React from "react";
import { S } from "./Sidebar_Styles";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <S.Sidebar>
        <nav>
          <ul>
            <S.MenuItem>
              <NavLink to={"/profile"}>Profile</NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to={"/messages"}>Messages</NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to={"/news"}>News</NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to={"/music"}>Music</NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to={"/settings"}>Settings</NavLink>
            </S.MenuItem>
          </ul>
        </nav>
      </S.Sidebar>
      ;
    </div>
  );
};
