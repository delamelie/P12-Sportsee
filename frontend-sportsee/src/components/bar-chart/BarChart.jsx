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
import "./barchart.css";
import { colors } from "../../utils/variables";
// import React, { PureComponent } from "react";

export default function BarC({ activities }) {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart data={activities} barGap={10}>
        <text className="graph__title" x="2%" y="10%" style={{ fontSize: 15 }}>
          Activité quotidienne
        </text>

        <XAxis
          // stroke="#DEDEDE"
          tickLine={false}
          tickFormatter={formatXAxis}
          tick={{ fill: "#9B9EAC", fontSize: "14" }}
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
          // className="barchart--legend"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ fontSize: "14px" }}
          // formatter={renderColorfulLegendText}
          // formatter={(value, entry, index) => (
          //   <span className="text-color-class">{value}</span>
          // )}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          barSize={12}
          fill={colors.black}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          barSize={12}
          fill={colors.red}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

///// Set XAxis labels (starting from 1 instead of 0)

function formatXAxis(value) {
  return value + 1;
}

//// Custom tooltip

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip__barchart">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
}

// function renderColorfulLegendText(value) {
//   const { color } = "#74798c";
//   return <span style={{ color }}>{value}</span>;
// }
