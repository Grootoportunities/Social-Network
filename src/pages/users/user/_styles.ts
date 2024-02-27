import styled from "styled-components";

const User = styled.li`
  background-color: #ffffff;

  margin-bottom: 20px;
  padding: 20px;

  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  border-radius: 20px;

  max-width: 800px;
  width: 100%;
`;
const UserAvatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;
const CitySpan = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const CountrySpan = styled.span`
  font-size: 16px;
`;

const StatusSpan = styled(CountrySpan)`
  max-width: 160px;
`;

const NameSpan = styled(CitySpan)`
  max-width: 150px;
`;

export const S = {
  User,
  UserAvatar,
  CitySpan,
  CountrySpan,
  StatusSpan,
  NameSpan,
};
