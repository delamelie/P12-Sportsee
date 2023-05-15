import styled from "styled-components";
import { colors } from "../utils/variables";

// export default function BarChart() {
//   return (
//     <div className="daily-activity">
//       <h2>Activité quotidienne</h2>
//     </div>
//   );
// }

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";

const data = [
  {
    day: "2020-07-01",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "2020-07-05",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 76,
    calories: 390,
  },
];

export default function BarC() {
  return (
    <ResponsiveContainer width="90%" height="50%">
      <BarChart width={500} height={300} data={data} barGap={10}>
        <XAxis tickLine={false} />
        <YAxis
          orientation="right"
          tickCount={3}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip offset={75} />
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={12}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          barSize={12}
          fill="#000000"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          barSize={12}
          fill="#ff0101"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
