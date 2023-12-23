import React from "react";
import { S } from "./Sidebar_Styles";

export const Sidebar = () => {
  return (
    <div>
      <S.Sidebar>
        <nav>
          <ul>
            <S.MenuItem>
              <a>Profile</a>
            </S.MenuItem>
            <S.MenuItem>
              <a>Messages</a>
            </S.MenuItem>
            <S.MenuItem>
              <a>News</a>
            </S.MenuItem>
            <S.MenuItem>
              <a>Music</a>
            </S.MenuItem>
            <S.MenuItem>
              <a>Settings</a>
            </S.MenuItem>
          </ul>
        </nav>
      </S.Sidebar>
      ;
    </div>
  );
};
