import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/variables";

export default function AverageSession({ averageSessions }) {
  return (
    <LinechartWrapper>
      <LinechartTitle>Durée moyenne des sessions</LinechartTitle>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart
          width={500}
          height={500}
          data={averageSessions}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={formatXAxis}
            tick={{ fill: "#ffffff", opacity: 0.5, fontSize: "12" }}
            dy={20}
          />
          <YAxis axisLine={false} hide={true} />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#020203",
              strokeWidth: 70,
              strokeOpacity: 0.1,
            }}
          />
          <Line
            type="monotone"
            //type="basis"
            dataKey="sessionLength"
            stroke={colors.white}
            strokeWidth={3}
            strokeOpacity={0.5}
            dot={false}
            activeDot={{
              strokeWidth: 12,
              r: 5,
              strokeOpacity: 0.3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </LinechartWrapper>
  );
}

///// Set XAxis labels (displaying week days first letter instead os numbers)

function formatXAxis(value) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (value >= 1 && value <= 7) {
    return days[value - 1];
  }
}

//// Custom tooltip

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipWrapper>{`${payload[0].value} min`}</TooltipWrapper>;
  }
  return null;
}

AverageSession.propTypes = {
  averageSessions: PropTypes.array.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

const LinechartWrapper = styled.div`
  width: 30%;
  background-color: #ff0000;
  border-radius: 5px;
`;

const LinechartTitle = styled.h2`
  width: 150px;
  margin: 20px 0 0 20px;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.white};
  opacity: 0.5;
  background-color: #ff0000;
  border-radius: 5px;
`;

const TooltipWrapper = styled.div`
  padding: 10px;
  font-size: 10px;
  background-color: ${colors.white};
`;
