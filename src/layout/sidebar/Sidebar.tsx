import React from "react";
import { S } from "./Sidebar_Styles";
import { NavLink } from "react-router-dom";
import { SidebarType } from "../../redux/State";
import onlineAva from "../../assets/png-transparent-computer-icons-online-chat-thought-avatar-emoticon-svg-miscellaneous-computer-wallpaper-smiley.png";
import { FlexWrapper } from "../../components/FlexWrapper";

type SidebarProps = { sidebarState: SidebarType };

export const Sidebar: React.FC<SidebarProps> = ({ sidebarState }) => {
  const mappedMenuItems = sidebarState.elements.map((el) => (
    <S.MenuItem key={el.id}>
      <NavLink to={el.link}>{el.title}</NavLink>
    </S.MenuItem>
  ));

  const mappedOnlineFriends = sidebarState.friendsOnline.map((fo) => (
    <FlexWrapper key={fo.id} direction={"column"} alignItems={"center"}>
      <S.OnlineAva src={onlineAva} />
      <span>{fo.name}</span>
    </FlexWrapper>
  ));

  return (
    <S.Sidebar>
      <nav>
        <S.PagesList>{mappedMenuItems}</S.PagesList>
      </nav>
      <FlexWrapper alignItems={"center"} direction={"column"} gap={"10px"}>
        <S.OnlineFriends>Friends Online: </S.OnlineFriends>
        <FlexWrapper gap={"10px"}>{mappedOnlineFriends}</FlexWrapper>
      </FlexWrapper>
    </S.Sidebar>
  );
};
