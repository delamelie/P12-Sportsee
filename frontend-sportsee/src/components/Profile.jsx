import styled from "styled-components";
import { USER_MAIN_DATA } from "../mocked-data/data";

const firstName = USER_MAIN_DATA[0].userInfos.firstName;

export default function Profile() {
  return (
    <ProfileWrapper>
      <ProfileName>Bonjour {firstName}</ProfileName>
      <ProfileCongrats>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </ProfileCongrats>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  margin-top: 60px;
`;

const ProfileName = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ProfileCongrats = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
