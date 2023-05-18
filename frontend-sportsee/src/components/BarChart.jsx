import { USER_ACTIVITY } from "../mocked-data/data";
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

const activites = USER_ACTIVITY[0].sessions;

export default function BarC() {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart data={activites} barGap={10}>
        <text className="graph__title" x="2%" y="10%" style={{ fontSize: 15 }}>
          Activité quotidienne
        </text>

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
          contentStyle={{ backgroundColor: "#E60000", fontSize: "7px" }}
          wrapperStyle={{ width: "40px" }}
        />
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ fontSize: "14px" }}
          // wrapperStyle={{ top: -50 }}
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

// const renderColorfulLegendText = (value: string, entry: any) => {
//   const { color } = entry;

//   return <span style={{ color }}>{value}</span>;
// };
