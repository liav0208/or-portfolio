import HeaderLogo from "../images/HeaderLogo.svg";
import HeaderLogoWhite from "../images/HeaderLogoWhite.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to={"/"}>
          <img src={HeaderLogo} alt="Or Hasid" className="navbar__logo" />
          <img
            src={HeaderLogoWhite}
            alt="Or Hasid"
            className="navbar__logo navbar__logo--white"
          />
        </Link>
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
