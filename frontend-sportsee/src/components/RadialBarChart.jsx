import { USER_MAIN_DATA } from "../mocked-data/data";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const scoreFigure = USER_MAIN_DATA[0].todayScore;
const scorePercentage = scoreFigure * 100;
const data = [{ scorePercentage }];

export default function RadialBarC() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart
        innerRadius={70}
        barSize={10}
        data={data}
        startAngle={180}
        endAngle={-180}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="scorePercentage" cornerRadius={10} fill="#E60000" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: 16, fill: "#74798C" }}
          className="progress-label"
        >
          {scorePercentage}% de votre objectif
        </text>
        <text className="graph__title" style={{ fontSize: 15 }} x="10%" y="20%">
          Score
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
