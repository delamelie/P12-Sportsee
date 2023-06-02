import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../style/variables";

/**
 * Render daily activities chart
 * @param { Array } activities
 * @returns { JSX }
 */

export default function DailyActivities({ activities }) {
  return (
    <BarchartWrapper>
      <BarchartTitle>Activité quotidienne</BarchartTitle>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={activities} barGap={10}>
          <XAxis
            // stroke="#DEDEDE"
            tickLine={false}
            tickFormatter={formatXAxis}
            tick={{ fill: "#9B9EAC", fontSize: "14" }}
            padding={{ left: -25, right: -25 }}
          />

          <YAxis
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: "14" }}
          />
          <Tooltip content={<CustomTooltip />} offset={35} />

          <CartesianGrid strokeDasharray="4" vertical={false} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              fontSize: "14px",
              marginTop: "-30px",
              marginRight: "20px",
            }}
            formatter={(value) => <LegendFormatter>{value}</LegendFormatter>}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            barSize={10}
            fill={colors.black}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            barSize={10}
            fill={colors.red}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </BarchartWrapper>
  );
}

/**
 * Set XAxis labels (starting from 1 instead of 0)
 * @param { Number } value
 * @return { Number }
 */

function formatXAxis(value) {
  return value + 1;
}

/**
 * Customise tooltip
 * @param { Bool } active
 * @param { Array } payload - Source data of the content to be displayed in tooltip
 * @returns { JSX }
 */

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <TooltipWrapper>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </TooltipWrapper>
    );
  }
  return null;
}

DailyActivities.propTypes = {
  activities: PropTypes.array,
};

formatXAxis.propTypes = {
  value: PropTypes.number.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const BarchartWrapper = styled.div`
  background-color: ${colors.white};
`;

const BarchartTitle = styled.h2`
  font-size: 15px;
`;

const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  color: ${colors.white};
  font-size: 10px;
  background-color: #e60000;
`;

const LegendFormatter = styled.span`
  margin-bottom: 50px;
  color: ${colors.light_grey};
`;
