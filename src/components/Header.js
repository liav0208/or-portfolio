import HeaderLogo from "../images/HeaderLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={HeaderLogo} alt="Or Hasid" className="navbar__logo" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink className="navbar__link" end to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" end to="/works">
              Works
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" end to="/connect">
              Connect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
