import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Profile from "../components/profile/Profile";
import BarChart from "../components/bar-chart/BarChart";
import LineChart from "../components/line-chart/LineChart";
import RadarChart from "../components/radar-chart/RadarChart";
import RadialBarChart from "../components/radial-bar-chart/RadialBarChart";
import FigureCard from "../components/figure-card/FigureCard";
import proteins from "../assets/protein-icon.png";
import calories from "../assets/calories-icon.png";
import carbs from "../assets/carbs-icon.png";
import fat from "../assets/fat-icon.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="container">
        <Profile />

        <main className="user-data">
          <section className="graphs">
            <BarChart />
            <div className="graph-line2">
              <LineChart />
              <RadarChart />
              <RadialBarChart />
            </div>
          </section>
          <section className="figures_overview">
            <FigureCard
              title={"Calories"}
              figure={"calories"}
              icon={calories}
            />
            <FigureCard
              title={"Protéines"}
              figure={"protéines"}
              icon={proteins}
            />
            <FigureCard title={"Glucides"} figure={"glucides"} icon={carbs} />
            <FigureCard title={"Lipides"} figure={"lipides"} icon={fat} />
          </section>
        </main>
      </div>
    </div>
  );
}
