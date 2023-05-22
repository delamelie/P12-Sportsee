import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "./radialbarchart.css";
import { colors } from "../../utils/variables";

export default function RadialBarC({ scorePercentage, percentageArray }) {
  return (
    <div className="wrapper__radialbarchart">
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius={60}
          barSize={6}
          data={percentageArray}
          startAngle={90}
          endAngle={450}
        >
          <text
            className="graph__title"
            style={{ fontSize: 15 }}
            x="10%"
            y="20%"
          >
            Score
          </text>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="scorePercentage"
            cornerRadius={10}
            fill={colors.red}
          />
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
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
