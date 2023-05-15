import styled from "styled-components";
import { colors } from "../utils/variables";

export default function FigureCard({ icon, figure, title }) {
  return (
    <CardWrapper>
      <img src={icon} alt="" className="icon" />
      <CardDescription>
        <CardFigure>{figure}</CardFigure>
        <CardTitle>{title}</CardTitle>
      </CardDescription>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 258px;
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

// .icon {
//   width: 60px;
//   height: 60px;
//   margin-left: 40px;
//   border-radius: 6px;
// }
