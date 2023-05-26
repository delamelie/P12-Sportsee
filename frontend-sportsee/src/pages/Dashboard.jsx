import { USER_PERFORMANCE } from "../mocked-data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchUserMainData,
  fetchUserAverageSessions,
  fetchUserActivity,
  fetchUserPerformance,
} from "../api.jsx";

import styled from "styled-components";
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

//retrieve user's performances' values to display inside RadarChart component
const perf = USER_PERFORMANCE[0].data;
const labels = USER_PERFORMANCE[0].kind;

//create separate array for labels
const labelsArray = [];
Object.keys(labels).forEach((key) => {
  labelsArray.push({
    kind: key,
    name: labels[key],
  });
});
console.log(labelsArray);

//translate labels into French
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

//merge data from those 2 arrays
const labelsObject = labelsArray.reduce((accumulator, item) => {
  accumulator[item.kind] = item;
  return accumulator;
}, {});
console.log(labelsObject);

let performances = perf.map((item) =>
  Object.assign(item, labelsObject[item.kind])
);
console.log(performances);

/**
 * Render user's dashboard
 * @return { JSX }
 */

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(false);

  const { userId } = useParams();

  // useEffect(() => {
  //   const getUserMainData = async () => {
  //     const userData = await fetchUserMainData(userId);
  //     setUserData(userData);
  //   };

  //   getUserMainData();
  // }, []);

  useEffect(() => {
    async function getUserMainData() {
      try {
        const userData = await fetchUserMainData(userId);
        setUserData(userData);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getUserMainData();
  }, []);

  useEffect(() => {
    async function getUserAverageSessions() {
      try {
        const userAverageSessions = await fetchUserAverageSessions(userId);
        setUserAverageSessions(userAverageSessions);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getUserAverageSessions();
  }, []);

  useEffect(() => {
    async function getUserActivity() {
      try {
        const userActivity = await fetchUserActivity(userId);
        setUserActivity(userActivity);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getUserActivity();
  }, []);

  useEffect(() => {
    async function getUserPerformance() {
      try {
        const userPerformance = await fetchUserPerformance(userId);
        setUserPerformance(userPerformance);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getUserPerformance();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  console.log(userPerformance && userPerformance.data.data);

  //retrieve user's score and convert into % to display inside RadialBarChart component
  const scorePercentage =
    (userData && userData.data.todayScore * 100) ||
    (userData && userData.data.score * 100);
  const percentageArray = [{ scorePercentage }];

  //retrieve user's performances' values to display inside RadarChart component
  const perfo = userPerformance && userPerformance.data.data;
  console.log(perfo);
  const labelso = userPerformance && userPerformance.data.kind;
  console.log(labelso);

  // // create separate array for labels
  // const labelsArray = [];
  // Object.keys(labels).forEach((key) => {
  //   labelsArray.push({
  //     kind: key,
  //     name: labels[key],
  //   });
  // });

  // // translate labels into French
  // labelsArray.forEach((item) => {
  //   if (item.name === "cardio") {
  //     item.name = "Cardio";
  //   } else if (item.name === "energy") {
  //     item.name = "Energie";
  //   } else if (item.name === "endurance") {
  //     item.name = "Endurance";
  //   } else if (item.name === "intensity") {
  //     item.name = "Intensité";
  //   } else if (item.name === "strength") {
  //     item.name = "Force";
  //   } else if (item.name === "speed") {
  //     item.name = "Vitesse";
  //   }
  // });

  // // merge data from those 2 arrays
  // const labelsObject = labelsArray.reduce((accumulator, item) => {
  //   accumulator[item.kind] = item;
  //   return accumulator;
  // }, {});

  // let performances = perf.map((item) =>
  //   Object.assign(item, labelsObject[item.kind])
  // );

  // retrieve user's personal figures and format them to display inside FigureCard component
  const calories =
    userData && userData.data.keyData.calorieCount.toLocaleString("en-US");
  const proteins =
    userData && userData.data.keyData.proteinCount.toLocaleString("en-US");
  const carbohydrates =
    userData && userData.data.keyData.carbohydrateCount.toLocaleString("en-US");
  const lipids =
    userData && userData.data.keyData.lipidCount.toLocaleString("en-US");

  return (
    <div className="container">
      <Profile firstName={userData && userData.data.userInfos.firstName} />

      <UserDataWrapper>
        <UserGraphs>
          <DailyActivities
            activities={userActivity && userActivity.data.sessions}
          />
          <SmallerGraphs>
            <AverageSession
              averageSessions={
                userAverageSessions && userAverageSessions.data.sessions
              }
            />
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
          <FigureCard title={"Lipides"} figure={`${lipids}g`} icon={fatIcon} />
        </section>
      </UserDataWrapper>
    </div>
  );
}

const UserDataWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UserGraphs = styled.section`
  width: 70%;
`;

const SmallerGraphs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
