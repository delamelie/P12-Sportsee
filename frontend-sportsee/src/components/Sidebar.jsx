import styled from "styled-components";
import { colors } from "../style/variables";
import yogaIcon from "../assets/yoga.png";
import swimmingIcon from "../assets/swimming.png";
import cyclingIcon from "../assets/cycling.png";
import fitnessIcon from "../assets/fitness.png";

/**
 * Render sidebar
 * @return { JSX }
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
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 117px;
  height: 110vh;
  background-color: ${colors.black};
`;

const SidebarActivities = styled.ul`
border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-top: 60px;
  /*height: 55%;
`;

const SidebarCopyright = styled.span`
  border: 1px solid green;
  width: 120%;
  transform: rotate(-90deg);
  color: ${colors.white};
  font-size: 12px;
`;
