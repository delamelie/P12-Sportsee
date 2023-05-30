import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../style/variables";

/**
 * Render key figures (calories, proteins, carbohydrates, fat)
 * @param { String } icon
 * @param { String } figure
 * @param { String } title
 * @return { JSX }
 */

export default function FigureCard({ icon, figure, title }) {
  return (
    <CardWrapper>
      <Icon src={icon} alt="" />
      <CardDescription>
        <CardFigure>{figure}</CardFigure>
        <CardTitle>{title}</CardTitle>
      </CardDescription>
    </CardWrapper>
  );
}

FigureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 124px;
  background-color: ${colors.light_background};
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const CardFigure = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.dark_grey};
`;

const CardTitle = styled.span`
  font-size: 14px;
  color: ${colors.light_grey};
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 40px;
  border-radius: 6px;
`;
