import { USER_MAIN_DATA } from "../mocked-data/data";
import { USER_ACTIVITY } from "../mocked-data/data";
import { USER_PERFORMANCE } from "../mocked-data/data";
import { USER_AVERAGE_SESSIONS } from "../mocked-data/data";

import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import DailyActivities from "../components/BarChart";
import AverageSession from "../components/LineChart";
import Performances from "../components/RadarChart";
import Score from "../components/RadialBarChart";
import FigureCard from "../components/FigureCard";
import proteinsIcon from "../assets/protein-icon.png";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

// Retrieve user's first name to display inside Profile component
const firstName = USER_MAIN_DATA[0].userInfos.firstName;

// Retrieve user's kilograms and calories to display inside BarChart component
const activities = USER_ACTIVITY[0].sessions;

// Retrieve user's average session value to display inside LineChart component
const averageSessions = USER_AVERAGE_SESSIONS[0].sessions;

// Retrieve user's performances' values to display inside RadarChart component
const perf = USER_PERFORMANCE[0].data;
const labels = USER_PERFORMANCE[0].kind;

// Create separate array for labels
const labelsArray = [];
Object.keys(labels).forEach((key) => {
  labelsArray.push({
    kind: key,
    name: labels[key],
  });
});

///Translate labels
labelsArray.forEach((item) => {
  if (item.name === "cardio") {
    item.name = "Cardio";
  } else if (item.name === "energy") {
    item.name = "Energie";
  } else if (item.name === "endurance") {
    item.name = "Endurance";
  } else if (item.name === "intensity") {
    item.name = "Intensité";
  } else if (item.name === "strength") {
    item.name = "Force";
  } else if (item.name === "speed") {
    item.name = "Vitesse";
  }
});

/// Merge data from those 2 arrays
const labelsObject = labelsArray.reduce((accumulator, item) => {
  accumulator[item.kind] = item;
  return accumulator;
}, {});

let performances = perf.map((item) =>
  Object.assign(item, labelsObject[item.kind])
);

// Retrieve user's score and convert into % to display inside RadialBarChart component
const scoreFigure = USER_MAIN_DATA[0].todayScore;
const scorePercentage = scoreFigure * 100;
const percentageArray = [{ scorePercentage }];
console.log(scorePercentage);
console.log(percentageArray);

// Retrieve user's personal figures and format them to display inside FigureCard component
const calories = USER_MAIN_DATA[0].keyData.calorieCount.toLocaleString("en-US");
const proteins = USER_MAIN_DATA[0].keyData.proteinCount.toLocaleString("en-US");
const carbohydrates =
  USER_MAIN_DATA[0].keyData.carbohydrateCount.toLocaleString("en-US");
const lipids = USER_MAIN_DATA[0].keyData.lipidCount.toLocaleString("en-US");

/////Test

// const tableau = USER_MAIN_DATA.map(({ id, keyData }) => ({ id, keyData }));
// console.log(tableau);

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="container">
        <Profile name={firstName} />

        <UserDataWrapper>
          <UserGraphs>
            <DailyActivities activities={activities} />
            <SmallerGraphs>
              <AverageSession averageSessions={averageSessions} />
              <Performances performances={performances} />
              <Score
                scorePercentage={scorePercentage}
                percentageArray={percentageArray}
              />
            </SmallerGraphs>
          </UserGraphs>

          <section className="figures_overview">
            <FigureCard
              title={"Calories"}
              figure={`${calories}kCal`}
              icon={caloriesIcon}
            />
            <FigureCard
              title={"Protéines"}
              figure={`${proteins}g`}
              icon={proteinsIcon}
            />
            <FigureCard
              title={"Glucides"}
              figure={`${carbohydrates}g`}
              icon={carbsIcon}
            />
            <FigureCard
              title={"Lipides"}
              figure={`${lipids}g`}
              icon={fatIcon}
            />
          </section>
        </UserDataWrapper>
      </div>
    </div>
  );
}

const UserDataWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  // border: 3px solid green;
`;

const UserGraphs = styled.section`
  width: 70%;
  // border: 3px solid pink;
`;

const SmallerGraphs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  // border: 3px solid blue;
`;
