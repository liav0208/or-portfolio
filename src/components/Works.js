import OwnIconWhite from "../images/OwnIconWhite.svg";
import VimeIconWhite from "../images/VimeIconWhite.svg";
import HakolavIconWhite from "../images/HakolavIconWhite.svg";
import Aria51IconWhite from "../images/Aria51IconWhite.svg";
import BombshellIconWhite from "../images/BombshellIconWhite.svg";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <main className="works">
      <div className="works__container">
        <h1 className="works__title">Works</h1>
        <div className="works__section">
          <div className="work" id="own">
            <Link to="/own" className="works__link">
              <img src={OwnIconWhite} alt="Own" className="work__image" />
              <h2 className="work__title">
                Own
                <br />
                brand design
              </h2>
            </Link>
          </div>
          <div className="work" id="vime">
            <Link to="/vime" className="works__link">
              <img src={VimeIconWhite} alt="Vime" className="work__image" />
              <h2 className="work__title">
                VIME
                <br />
                app design
              </h2>
            </Link>
          </div>
          <div className="work" id="hakolav">
            <Link to="/hakolav" className="works__link">
              <img
                src={HakolavIconWhite}
                alt="Hakolav"
                className="work__image"
              />
              <h2 className="work__title">
                Hakolav
                <br />
                app design
              </h2>
            </Link>
          </div>
          <div className="work" id="area">
            <Link to="/area-51" className="works__link">
              <img
                src={Aria51IconWhite}
                alt="Area 51"
                className="work__image"
              />
              <h2 className="work__title">
                Area 51
                <br />
                web design
              </h2>
            </Link>
          </div>
          <div className="work" id="bombshell">
            <Link to="/bombshell" className="works__link">
              <img
                src={BombshellIconWhite}
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
