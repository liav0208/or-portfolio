import OwnIconWhite from "../images/OwnIconWhite.svg";
import VimeIconWhite from "../images/VimeIconWhite.svg";
import HakolavIconWhite from "../images/HakolavIconWhite.svg";
import Aria51IconWhite from "../images/Aria51IconWhite.svg";
import BombshellIconWhite from "../images/BombshellIconWhite.svg";
import DoubleCouple from "../images/DoubleCouple/DoubleCouple.svg";
import EasyHome from "../images/EasyHome/EasyHome.svg";
import AIA from "../images/AIA/AIA_Works.svg";
import Fluf from "../images/Fluf/Fluf-White.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Works = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreRef = useRef();

  const onShowMore = () => {
    setShowMore(true);
    showMoreRef?.current?.focus();
  };

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
      <div className="works__see-more">
        <h3 className="see-more" onClick={onShowMore}>
          {!showMore && "See More"}
        </h3>
        {showMore && (
          <div className="works__section" ref={showMoreRef}>
            <div className="work" id="easy-home">
              <Link to="/easy-home" className="works__link">
                <img src={EasyHome} alt="Easy Home" className="work__image" />
                <h2 className="work__title">
                  Easy Home
                  <br />
                  app design
                </h2>
              </Link>
            </div>
            <div className="work" id="double-couple">
              <Link to="/double-couple" className="works__link">
                <img
                  src={DoubleCouple}
                  alt="Double Couple"
                  className="work__image dc"
                />
                <h2 className="work__title">
                  Double Couple
                  <br />
                  web design
                </h2>
              </Link>
            </div>
            <div className="work" id="double-couple">
              <Link to="/double-couple" className="works__link">
                <img src={AIA} alt="AIA" className="work__image aia" />
                <h2 className="work__title">
                  AIA
                  <br />
                  brand design
                </h2>
              </Link>
            </div>
            <div className="work" id="double-couple">
              <Link to="/double-couple" className="works__link">
                <img src={Fluf} alt="Fluf" className="work__image fluf" />
                <h2 className="work__title">
                  Fluf
                  <br />
                  brand design
                </h2>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Works;
