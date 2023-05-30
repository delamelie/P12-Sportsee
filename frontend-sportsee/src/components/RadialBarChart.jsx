import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../style/variables";

/**
 * Render daily activities chart
 * @param { Number } scorePercentage
 * @param { Array } percentageArray
 * @return { JSX }
 */

export default function Score({ scorePercentage, percentageArray }) {
  return (
    <RadialbarchartWrapper>
      <RadialbarchartTitle>Score</RadialbarchartTitle>
      <ResponsiveContainer width="100%" height={180}>
        <RadialBarChart
          innerRadius={80}
          barSize={10}
          data={percentageArray}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="scorePercentage"
            cornerRadius={20}
            fill={colors.red}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <RadialbarchartGoal>
        <RadialbarchartGoalFigure>{scorePercentage}%</RadialbarchartGoalFigure>
        de votre objectif
      </RadialbarchartGoal>
    </RadialbarchartWrapper>
  );
}

Score.propTypes = {
  scorePercentage: PropTypes.number.isRequired,
  percentageArray: PropTypes.array.isRequired,
};

const RadialbarchartWrapper = styled.div`
  position: relative;
  width: 30%;
  height: auto;
  background-color: #fbfbfb;
  border-radius: 5px;
`;

const RadialbarchartTitle = styled.h2`
  margin: 30px 0 0 20px;
  font-size: 15px;
  color: #20253a;
`;

const RadialbarchartGoal = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 60px;
  text-align: center;
  font-size: 16px;
  color: #74798c;
`;

const RadialbarchartGoalFigure = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #282d30;
`;
