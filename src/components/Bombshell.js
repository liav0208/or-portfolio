import BombshellIcon from "../images/BombshellIcon.svg";
import Logo from "../images/bombshell/Logo.svg";
import Icon from "../images/bombshell/Icon.svg";
import Element1 from "../images/bombshell/Element1.svg";
import Element2 from "../images/bombshell/Element2.svg";
import Element3 from "../images/bombshell/Element3.svg";
import Poster1 from "../images/bombshell/Poster1.jpg";
import Poster2 from "../images/bombshell/Poster2.jpg";
import Poster3 from "../images/bombshell/Poster3.jpg";
import Icon1 from "../images/bombshell/Icon1.svg";
import Icon2 from "../images/bombshell/Icon2.svg";
import Icon3 from "../images/bombshell/Icon3.svg";
import Icon4 from "../images/bombshell/Icon4.svg";
import Icon5 from "../images/bombshell/Icon5.svg";
import Icon6 from "../images/bombshell/Icon6.svg";
import Icon7 from "../images/bombshell/Icon7.svg";
import Icon8 from "../images/bombshell/Icon8.svg";
import Icon9 from "../images/bombshell/Icon9.svg";
import Icon10 from "../images/bombshell/Icon10.svg";
import Under1 from "../images/bombshell/Under1.svg";
import Under2 from "../images/bombshell/Under2.svg";
import Under3 from "../images/bombshell/Under3.svg";
import Under4 from "../images/bombshell/Under4.svg";
import Under5 from "../images/bombshell/Under5.svg";
import Pattern1 from "../images/bombshell/Pattern1.png";
import Pattern2 from "../images/bombshell/Pattern2.png";
import Pattern3 from "../images/bombshell/Pattern3.png";
import Pattern4 from "../images/bombshell/Pattern4.png";
import Pattern5 from "../images/bombshell/Pattern5.png";

const Bombshell = () => {
  return (
    <main id="bombshell" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={BombshellIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Bombshell <br />
            brand design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Bombshell</h1>
          <h2 className="project__subtitle">Brand Design</h2>
          <p className="project__paragraph">
            a boutique shop for stuffed marshmallows with special and
            unconventional flavors. Creating a unique series of icons,
            advertising posters,patterns and designing coasters.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={Logo} alt="BombShell" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={Icon} alt="BombShell" className="property__icon" />
        </div>
        <div className="pallete">
          <p className="property__text pallete">Pallete</p>
          <div className="hakolav pallete__boxes">
            <div className="box box__1"></div>
            <div className="box box__2"></div>
            <div className="box box__3"></div>
          </div>
        </div>
        <img src={Element1} alt="" className="property__image" />
        <img src={Element2} alt="" className="property__image" />
        <img src={Element3} alt="" className="property__image" />
      </div>
      <div className="posters">
        <img src={Poster1} alt="Poster" className="posters__image" />
        <img src={Poster2} alt="Poster" className="posters__image" />
        <img src={Poster3} alt="Poster" className="posters__image" />
      </div>
      <div className="icons">
        <div className="taste">
          <p className="taste__text">Chill Out</p>
          <img src={Icon1} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Spicy</p>
          <img src={Icon2} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Alcoholic</p>
          <img src={Icon3} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Sweet</p>
          <img src={Icon4} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Explode</p>
          <img src={Icon5} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Double</p>
          <img src={Icon6} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Gift</p>
          <img src={Icon7} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Hot Drink</p>
          <img src={Icon8} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Surprise</p>
          <img src={Icon9} alt="" className="icons__icon" />
        </div>
        <div className="taste">
          <p className="taste__text">Fill</p>
          <img src={Icon10} alt="" className="icons__icon" />
        </div>
      </div>
      <div className="bottom-part">
        <div className="patterns">
          <img src={Pattern1} alt="Pattern" className="patterns__image" />
          <img src={Pattern2} alt="Pattern" className="patterns__image" />
          <img src={Pattern3} alt="Pattern" className="patterns__image" />
          <img src={Pattern4} alt="Pattern" className="patterns__image" />
          <img src={Pattern5} alt="Pattern" className="patterns__image" />
        </div>
        <div className="unders">
          <img src={Under1} alt="Under" className="unders__icon" />
          <img src={Under2} alt="Under" className="unders__icon" />
          <img src={Under3} alt="Under" className="unders__icon" />
          <img src={Under4} alt="Under" className="unders__icon" />
          <img src={Under5} alt="Under" className="unders__icon" />
        </div>
      </div>
    </main>
  );
};

export default Bombshell;
