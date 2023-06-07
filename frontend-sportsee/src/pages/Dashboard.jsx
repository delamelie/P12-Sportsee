import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  fetchUserMainData,
  fetchUserAverageSessions,
  fetchUserActivity,
  fetchUserPerformance,
} from "../api.jsx";

import styled from "styled-components";
import Profile from "../components/Profile";
import DailyActivities from "../components/DailyActivities";
import AverageSession from "../components/AverageSession";
import Performances from "../components/Performances";
import Score from "../components/Score";
import FigureCard from "../components/FigureCard";
import proteinsIcon from "../assets/protein-icon.png";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

/**
 * Render user's dashboard
 * @returns { JSX }
 */

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    async function getUserMainData() {
      try {
        const data = await fetchUserMainData(userId);
        setUserData(data);
      } catch (error) {
        setError(true);
      }
    }
    getUserMainData();
  }, []);

  useEffect(() => {
    async function getUserAverageSessions() {
      try {
        const data = await fetchUserAverageSessions(userId);
        setUserAverageSessions(data);
      } catch (error) {
        setError(true);
      }
    }
    getUserAverageSessions();
  }, []);

  useEffect(() => {
    async function getUserActivity() {
      try {
        const data = await fetchUserActivity(userId);
        setUserActivity(data);
      } catch (error) {
        setError(true);
      }
    }
    getUserActivity();
  }, []);

  useEffect(() => {
    async function getUserPerformance() {
      try {
        const userPerformance = await fetchUserPerformance(userId);

        //retrieve user's performances to display inside Performances component : create separate array for labels and translate names into French
        const perf = userPerformance && userPerformance.data.data;
        const labels = userPerformance && userPerformance.data.kind;

        const labelsArray = [];
        Object.keys(labels).forEach((key) => {
          labelsArray.push({
            kind: key,
            name: labels[key],
          });
        });

        labelsArray.forEach((item) => {
          switch (item.name) {
            case "cardio":
              item.name = "Cardio";
              break;
            case "energy":
              item.name = "Energie";
              break;
            case "endurance":
              item.name = "Endurance";
              break;
            case "intensity":
              item.name = "Intensité";
              break;
            case "speed":
              item.name = "Vitesse";
              break;
            default:
              break;
          }
        });

        // merge data from labelsArray and perf array
        const performances = perf.map((item, index) => {
          return Object.assign(item, labelsArray[index]);
        });

        setUserPerformance(performances);
      } catch (error) {
        setError(true);
      }
    }
    getUserPerformance();
  }, []);

  if (error) {
    return (
      <div>
        <Navigate to="/404" replace={true} />
      </div>
    );
  }

  //retrieve user's score and convert into % to display inside Score component
  const scorePercentage =
    (userData && userData.data.todayScore * 100) ||
    (userData && userData.data.score * 100);
  const percentageArray = [{ scorePercentage }];

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
            <Performances performances={userPerformance && userPerformance} />
            <Score
              scorePercentage={scorePercentage}
              percentageArray={percentageArray}
            />
          </SmallerGraphs>
        </UserGraphs>

        <FiguresOverview>
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
        </FiguresOverview>
      </UserDataWrapper>
    </div>
  );
}

const UserDataWrapper = styled.main`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1250px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserGraphs = styled.section`
  @media (min-width: 1250px) {
    width: 75%;
  }
`;

const SmallerGraphs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const FiguresOverview = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 1250px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
