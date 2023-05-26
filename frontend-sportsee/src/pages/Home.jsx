import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/variables";

export default function Home() {
  return (
    <div className="container">
      <Buttons>
        <Link to={`/user/${12}`}>
          <UserButton>User 12</UserButton>
        </Link>
        <Link to={`/user/${18}`}>
          <UserButton>User 18</UserButton>
        </Link>
      </Buttons>
    </div>
  );
}

const Buttons = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserButton = styled.button`
  width: 100px;
  height: 40px;
  margin-bottom: 50px;
  font-size: 18px;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${colors.red};
  border: none;
  border-radius: 5px;
`;
