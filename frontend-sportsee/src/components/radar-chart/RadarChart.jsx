import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./radarchart.css";
import { colors } from "../../utils/variables";

export default function RadarC({ performances }) {
  return (
    <div className="wrapper__radarchart">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart outerRadius="80%" data={performances}>
          <PolarGrid radialLines={false} strokeWidth={2} />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: "#ffffff", fontSize: "12" }}
          />
          {/* <PolarRadiusAxis tickCount={6} /> */}
          <Radar dataKey="value" fill={colors.red} fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
