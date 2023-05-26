import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/variables";

/**
 * Render performances chart
 * @param { Array } performances
 * @return { JSX }
 */

export default function Performances({ performances }) {
  return (
    <RadarchartWrapper>
      <ResponsiveContainer width="100%">
        <RadarChart
          outerRadius="80%"
          data={performances}
          margin={{
            top: 35,
            right: 35,
            left: 35,
            bottom: 35,
          }}
        >
          <PolarGrid radialLines={false} strokeWidth={2} />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: "#ffffff", fontSize: "11" }}
          />
          {/* <PolarRadiusAxis tickCount={6} /> */}
          <Radar dataKey="value" fill={colors.red} fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </RadarchartWrapper>
  );
}

Performances.propTypes = {
  performances: PropTypes.array.isRequired,
};

const RadarchartWrapper = styled.div`
  width: 30%;
  background-color: ${colors.dark_grey};
  border-radius: 5px;
`;
