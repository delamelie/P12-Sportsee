import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header
      className="header"
      role="navigation"
      aria-label="Navigation générale"
    >
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__navigation">
        <ul className="header__navigation__links">
          <NavLink to="home">
            <li className="header__navigation__item">Accueil</li>
          </NavLink>

          <NavLink to="profile">
            <li className="header__navigation__item">Profil</li>
          </NavLink>

          <NavLink to="settings">
            <li className="header__navigation__item">Réglages</li>
          </NavLink>

          <NavLink to="community">
            <li className="header__navigation__item">Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
