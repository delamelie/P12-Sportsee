import { USER_ACTIVITY } from "../mocked-data/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { colors } from "../utils/variables";

// export default function BarChart() {
//   return (
//     <div className="daily-activity">
//       <h2>Activité quotidienne</h2>
//     </div>
//   );
// }

const activites = USER_ACTIVITY[0].sessions;

export default function BarC() {
  return (
    <ResponsiveContainer width="90%" height="50%">
      <BarChart width={500} height={500} data={activites} barGap={10}>
        {/* <text>
          <tspan x="10" y="9" dy="0.71em">
            Activité quotidienne
          </tspan>
        </text> */}
        <XAxis tickLine={false} tickFormatter={formatXAxis} />

        <YAxis
          orientation="right"
          tickCount={3}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          offset={75}
          itemStyle={{ color: "#ffffff" }}
          contentStyle={{ backgroundColor: "#E60000" }}
          label={""}
        />
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={12}
          wrapperStyle={{ top: -50 }}
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
          fill="#E60000"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function formatXAxis(value) {
  // console.log(value);
  return value + 1;
}

const renderColorfulLegendText = (value: string, entry: any) => {
  const { color } = entry;

  return <span style={{ color }}>{value}</span>;
};
