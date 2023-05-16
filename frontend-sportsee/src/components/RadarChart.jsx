// export default function RadarChart() {
//   return (
//     <div className="intensity">
//       <h2>Intensité</h2>
//     </div>
//   );
// }

import { USER_PERFORMANCE } from "../mocked-data/data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const performances = USER_PERFORMANCE[0].data;
const labels = USER_PERFORMANCE[0].kind;
const test = Object.values(labels);
console.log(test);

export default function RadarC() {
  return (
    <ResponsiveContainer width="50%" height="50%">
      <RadarChart outerRadius="80%" data={performances}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="test" />
        <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

const tableau = [
  {
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
    ],
  },
];

const test1 = tableau[0].kind;
console.log(test1);

const test2 = tableau[0].data;
console.log(test2);

const test3 = test2.map((item) => item.kind);
console.log(test3);
