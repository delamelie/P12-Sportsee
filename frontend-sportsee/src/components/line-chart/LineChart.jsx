import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./linechart.css";
import { colors } from "../../utils/variables";

export default function LineC({ sessions }) {
  return (
    <div className="wrapper__linechart">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={500}
          data={sessions}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            x="8%"
            y="20%"
            style={{ fontSize: 15, fill: "#ffffff", opacity: 0.5 }}
          >
            Durée moyenne des sessions
          </text>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={formatXAxis}
            tick={{ fill: "#ffffff", opacity: 0.5, fontSize: "12" }}
          />

          <YAxis axisLine={false} hide={true} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#020203",
              strokeWidth: 40,
              strokeOpacity: 0.1,
            }}
          />

          <Line
            type="monotone"
            // type="basis"
            dataKey="sessionLength"
            stroke={colors.white}
            strokeWidth={3}
            dot={false}
            activeDot={{
              strokeWidth: 15,
              r: 7,
              strokeOpacity: 0.3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

///// Set XAxis labels (displaying week days first letter instead os numbers)

const formatXAxis = (value) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (value >= 1 && value <= 7) {
    return days[value - 1];
  }
};

//// Custom tooltip

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip__linechart">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};
