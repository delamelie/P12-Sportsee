// export default function LineChart() {
//   return (
//     <div className="average-duration">
//       <h2>Durée moyenne des sessions</h2>
//     </div>
//   );
// }

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
    <ResponsiveContainer width="50%" height="50%">
      <LineChart
        width={500}
        height={500}
        data={averageSessions}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatXAxis}
        />

        <YAxis axisLine={false} hide={true} />
        <Tooltip />

        <Line
          type="monotone"
          // type="basis"
          dataKey="sessionLength"
          stroke="#8884d8"
          dot={false}
          // activeDot={{ strokeWidth: 2, r: 10 }}
          activeDot={{ stroke: "#ff0101", strokeWidth: 5, r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function formatXAxis(value) {
  console.log(value);
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (value >= 1 && value <= 7) {
    return days[value - 1];
  }
}
