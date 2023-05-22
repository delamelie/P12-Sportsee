// import { USER_MAIN_DATA } from "../mocked-data/data";
import styled from "styled-components";
import { colors } from "../utils/variables";

// const firstName = USER_MAIN_DATA[0].userInfos.firstName;

export default function Profile({ name }) {
  return (
    <ProfileWrapper>
      <ProfileTitle>
        Bonjour <ProfileName>{name}</ProfileName>
      </ProfileTitle>
      <ProfileCongrats>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </ProfileCongrats>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  margin: 60px 0 180px 0;
`;

const ProfileTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ProfileName = styled.span`
  color: ${colors.red};
`;

const ProfileCongrats = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
