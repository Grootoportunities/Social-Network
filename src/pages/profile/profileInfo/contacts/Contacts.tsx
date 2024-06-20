import { FC } from "react";
import { ProfileContactsType } from "../../../../redux/reducers/profileReducer";
import github from "../../../../assets/social networks/github.png";
import vk from "../../../../assets/social networks/vk.png";
import facebook from "../../../../assets/social networks/facebook.png";
import instagram from "../../../../assets/social networks/instagram.png";
import twitter from "../../../../assets/social networks/twitter.png";
import website from "../../../../assets/social networks/website.png";
import youtube from "../../../../assets/social networks/youtube.png";
import mainLink from "../../../../assets/social networks/mainLink.png";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper/FlexWrapper";

export const Contacts: FC<{ contacts: ProfileContactsType }> = ({
  contacts,
}) => {
  const icons = {
    github,
    vk,
    facebook,
    instagram,
    twitter,
    website,
    youtube,
    mainLink,
  };

  const filteredContacts = Object.keys(contacts).filter(
    (contact) => !!contacts[contact as keyof ProfileContactsType],
  );

  const mappedContacts = filteredContacts.map((contact, index) => {
    const icon = icons[contact as keyof ProfileContactsType];

    return (
      <a
        key={index}
        href={contacts[contact as keyof ProfileContactsType]}
        target={"_blank"}
      >
        <Icon alt={contacts[contact as keyof ProfileContactsType]} src={icon} />
      </a>
    );
  });

  return <FlexWrapper gap={"10px"}>{mappedContacts}</FlexWrapper>;
};

const Icon = styled.img`
  width: 40px;
`;
