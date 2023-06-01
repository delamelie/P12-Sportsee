import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../style/variables";

/**
 * Render performances chart
 * @param { Array } performances
 * @returns { JSX }
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
            tickSize={10}
            tick={{ fill: "#ffffff", fontSize: "11" }}
            dy={4}
          />
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
