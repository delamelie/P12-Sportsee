import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import BarC from "../components/BarChart";
import LineC from "../components/LineChart";
import RadarC from "../components/RadarChart";
import RadialBarC from "../components/RadialBarChart";
import FigureCard from "../components/FigureCard";
import proteinsIcon from "../assets/protein-icon.png";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

import { USER_MAIN_DATA } from "../mocked-data/data";

const calories = USER_MAIN_DATA[0].keyData.calorieCount.toLocaleString("en-US");
const proteins = USER_MAIN_DATA[0].keyData.proteinCount.toLocaleString("en-US");
const carbohydrates =
  USER_MAIN_DATA[0].keyData.carbohydrateCount.toLocaleString("en-US");
const lipids = USER_MAIN_DATA[0].keyData.lipidCount.toLocaleString("en-US");

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="container">
        <Profile />

        <UserDataWrapper>
          <UserGraphs>
            <BarC />
            <SmallerGraphs>
              <LineC />
              <RadarC />
              <RadialBarC />
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
  margin-top: 50px;
  // border: 3px solid blue;
`;
