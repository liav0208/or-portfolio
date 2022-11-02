import OwnIcon from "../images/OwnIcon.svg";
import VimeIcon from "../images/VimeIcon.svg";
import HakolavIcon from "../images/HakolavIcon.svg";
import Aria51Icon from "../images/Aria51Icon.svg";
import BombshellIcon from "../images/BombshellIcon.svg";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <main className="works">
      <div className="works__container">
        <h1 className="works__title">Works</h1>
        <div className="works__section">
          <div className="work">
            <Link to="/own" className="works__link">
              <img src={OwnIcon} alt="Own" className="work__image" />
              <h2 className="work__title">
                Own
                <br />
                brand design
              </h2>
            </Link>
          </div>
          <div className="work">
            <Link to="/vime" className="works__link">
              <img src={VimeIcon} alt="Vime" className="work__image" />
              <h2 className="work__title">
                VIME
                <br />
                app design
              </h2>
            </Link>
          </div>
          <div className="work">
            <Link to="/hakolav" className="works__link">
              <img src={HakolavIcon} alt="Hakolav" className="work__image" />
              <h2 className="work__title">
                Hakolav
                <br />
                app design
              </h2>
            </Link>
          </div>
          <div className="work">
            <Link to="/aria-51" className="works__link">
              <img src={Aria51Icon} alt="Aria 51" className="work__image" />
              <h2 className="work__title">
                Aria 51
                <br />
                web design
              </h2>
            </Link>
          </div>
          <div className="work">
            <Link to="/bombshell" className="works__link">
              <img
                src={BombshellIcon}
                alt="Bombshell"
                className="work__image"
              />
              <h2 className="work__title">
                Bombshell
                <br />
                brand design
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
