import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { colors } from "../utils/variables";

export default function Header() {
  return (
    <HeaderWrapper role="navigation" aria-label="Navigation générale">
      <HeaderLogo src={logo} alt="Logo" className="header__logo" />
      <HeaderNav>
        <HeaderNavLinks>
          <HeaderLink to="home">
            <li className="header__navigation__item">Accueil</li>
          </HeaderLink>

          <HeaderLink to="profile">
            <li className="header__navigation__item">Profil</li>
          </HeaderLink>

          <HeaderLink to="settings">
            <li className="header__navigation__item">Réglages</li>
          </HeaderLink>

          <HeaderLink to="community">
            <li className="header__navigation__item">Communauté</li>
          </HeaderLink>
        </HeaderNavLinks>
      </HeaderNav>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 91px;
  background-color: ${colors.black};
`;

const HeaderLogo = styled.img`
  height: 60px;
  width: 178px;
  margin-left: 30px;
`;

const HeaderNav = styled.nav`
  width: 100%;
  margin: 0 110px;
`;

const HeaderNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

const HeaderLink = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;
`;
