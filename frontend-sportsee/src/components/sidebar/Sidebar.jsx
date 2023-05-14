import yogaIcon from "../../assets/yoga.png";
import swimmingIcon from "../../assets/swimming.png";
import cyclingIcon from "../../assets/cycling.png";
import fitnessIcon from "../../assets/fitness.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__activities">
        <li>
          <img src={yogaIcon} alt="" className="sidebar__activities__icon" />
        </li>

        <li>
          <img
            src={swimmingIcon}
            alt=""
            className="sidebar__activities__icon"
          />
        </li>

        <li>
          <img src={cyclingIcon} alt="" className="sidebar__activities__icon" />
        </li>

        <li>
          <img src={fitnessIcon} alt="" className="sidebar__activities__icon" />
        </li>
      </ul>
      <span className="sidebar__copyright">Copyright, Sportsee 2020</span>
    </div>
  );
}
