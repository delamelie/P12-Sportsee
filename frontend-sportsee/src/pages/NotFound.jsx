import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../style/variables";

export default function NotFound() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.red};
`;

const ErrorTitle = styled.h1`
  margin: 0;
  font-size: 66px;
  color: ${colors.red};
`;

const ErrorLink = styled(Link)`
  margin-top: 80px;
  color: ${colors.black};
`;
