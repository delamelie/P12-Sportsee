import { USER_AVERAGE_SESSIONS } from "../mocked-data/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const averageSessions = USER_AVERAGE_SESSIONS[0].sessions;

export default function LineC() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={500}
        data={averageSessions}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x="4%" y="10%" style={{ fontSize: 15 }}>
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatXAxis}
        />

        <YAxis axisLine={false} hide={true} />
        <Tooltip
          contentStyle={{ fontSize: "8px" }}
          wrapperStyle={{ width: "40px" }}
        />

        <Line
          type="monotone"
          // type="basis"
          dataKey="sessionLength"
          stroke="#8884d8"
          strokeWidth={3}
          dot={false}
          activeDot={{ stroke: "#ff0101", strokeWidth: 5, r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function formatXAxis(value) {
  // console.log(value);
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (value >= 1 && value <= 7) {
    return days[value - 1];
  }
}
