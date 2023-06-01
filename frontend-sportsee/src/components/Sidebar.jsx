import styled from "styled-components";
import { colors } from "../style/variables";
import yogaIcon from "../assets/yoga.png";
import swimmingIcon from "../assets/swimming.png";
import cyclingIcon from "../assets/cycling.png";
import fitnessIcon from "../assets/fitness.png";

/**
 * Render sidebar
 * @returns { JSX }
 */

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarActivities>
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
      </SidebarActivities>
      <SidebarCopyright>Copyright, Sportsee 2020</SidebarCopyright>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  width: 120px;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.black};
`;

const SidebarActivities = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  margin-top: 60px;
`;

const SidebarCopyright = styled.span`
  width: 120%;
  transform: rotate(-90deg);
  font-size: 12px;
  color: ${colors.white};
`;
