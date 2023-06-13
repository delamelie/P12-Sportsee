import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

import React from "react";

export default function DashboardContainer() {
  const { id } = useParams();
  return <Dashboard id={id} />;
}

// class UserData {
//   constructor(
//     id,
//     firstName,
//     lastName,
//     age,
//     todayScore,
//     calorieCount,
//     proteinCount,
//     carbohydrateCount,
//     lipidCount
//   ) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.todayScore = todayScore;
//     this.calorieCount = calorieCount;
//     this.proteinCount = proteinCount;
//     this.carbohydrateCount = carbohydrateCount;
//     this.lipidCount = lipidCount;
//   }
// }

// console.log(USER_MAIN_DATA);
