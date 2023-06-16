import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

import {
  fetchUserMainData,
  fetchUserAverageSessions,
  fetchUserActivity,
  fetchUserPerformance,
} from "../api.jsx";

import User from "../models/User.js";
import Activity from "../models/Activity.js";
import AverageSessions from "../models/AverageSessions.js";
import Performance from "../models/Performance.js";

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

  const { id } = useParams();

  useEffect(() => {
    async function getUserMainData() {
      try {
        const { data } = await fetchUserMainData(id);
        const userModel = new User(data);
        setUserData(userModel);
      } catch (error) {
        setError(true);
      }
    }
    getUserMainData();
  }, []);

  useEffect(() => {
    async function getUserActivity() {
      try {
        const { data } = await fetchUserActivity(id);
        const activityModel = new Activity(data);
        setUserActivity(activityModel);
      } catch (error) {
        setError(true);
      }
    }
    getUserActivity();
  }, []);

  useEffect(() => {
    async function getUserAverageSessions() {
      try {
        const { data } = await fetchUserAverageSessions(id);
        const averageSessionsModel = new AverageSessions(data);
        setUserAverageSessions(averageSessionsModel);
      } catch (error) {
        setError(true);
      }
    }
    getUserAverageSessions();
  }, []);

  useEffect(() => {
    async function getUserPerformance() {
      try {
        const { data } = await fetchUserPerformance(id);
        const userPerformanceModel = new Performance(data);
        setUserPerformance(userPerformanceModel);
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

  return (
    userData &&
    userActivity &&
    userAverageSessions &&
    userPerformance && (
      <div className="container">
        <div>
          <Profile firstName={userData.firstName} />

          <UserDataWrapper>
            <UserGraphs>
              <DailyActivities activities={userActivity.sessions} />
              <SmallerGraphs>
                <AverageSession
                  averageSessions={userAverageSessions.sessions}
                />
                <Performances performances={userPerformance.getDataLabel()} />
                <Score
                  scorePercentage={userData.getScore()}
                  percentageArray={userData.getScoreArray()}
                />
              </SmallerGraphs>
            </UserGraphs>

            <FiguresOverview>
              <FigureCard
                title={"Calories"}
                figure={`${userData.getCalories()}kCal`}
                icon={caloriesIcon}
              />
              <FigureCard
                title={"Protéines"}
                figure={`${userData.getProteins()}g`}
                icon={proteinsIcon}
              />
              <FigureCard
                title={"Glucides"}
                figure={`${userData.getCarbohydrates()}g`}
                icon={carbsIcon}
              />
              <FigureCard
                title={"Lipides"}
                figure={`${userData.getLipids()}g`}
                icon={fatIcon}
              />
            </FiguresOverview>
          </UserDataWrapper>
        </div>
      </div>
    )
  );
}

const UserDataWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;

const UserGraphs = styled.section`
  width: 75%;
  @media (min-width: 1300px) {
    width: 70%;
  }
`;

const SmallerGraphs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const FiguresOverview = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
