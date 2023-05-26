// import { USER_MAIN_DATA } from "../mocked-data/data";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/variables";

/**
 * Render user's first name
 * @param { String } firstName
 * @return { JSX }
 */

export default function Profile({ firstName }) {
  return (
    <ProfileWrapper>
      <ProfileTitle>
        Bonjour <ProfileName>{firstName}</ProfileName>
      </ProfileTitle>
      <ProfileCongrats>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </ProfileCongrats>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

const ProfileWrapper = styled.div`
  margin: 60px 0 90px 0;
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
