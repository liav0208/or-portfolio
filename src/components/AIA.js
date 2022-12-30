import AIAIcon from "../images/AIA/AIA_Icon.svg";
import AIALogo from "../images/AIA/AIA_Logo_Pink.svg";
import AIALogoBlack from "../images/AIA/AIA_Logo.svg";
import Element1 from "../images/AIA/Element1.svg";
import Element2 from "../images/AIA/Element2.svg";
import Element3 from "../images/AIA/Element3.svg";
import Pattern1 from "../images/AIA/Pattern1.svg";
import Pattern2 from "../images/AIA/Pattern2.svg";
import Pattern3 from "../images/AIA/Pattern3.svg";
import Square1 from "../images/AIA/Square1.svg";
import Square2 from "../images/AIA/Square2.svg";
import Square3 from "../images/AIA/Square3.svg";
import AIALogoMath from "../images/AIA/AIA_Logo_Math.svg";
import AIAMockup from "../images/AIA/AIAmockup1.png";

const AIA = () => {
  return (
    <main id="aia" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={AIAIcon} alt="AIA" className="project__logo" />
          <h3 className="project__detail">
            AIA
            <br />
            Brand design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">AIA</h1>
          <h2 className="project__subtitle">Brand design</h2>
          <p className="project__paragraph">
            Branding for a leading cosmetics brand specializing in body care
            products. Due to the products being made for girls who carry out a
            daily care routine, the design concept stands out, with fun and
            unconventional elements. Developing patterns in manual illustration
            while considering relevant target audiences, prominence, and recall
            at all times.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={AIALogo} alt="Hakolav" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={AIAIcon} alt="Hakolav" className="property__icon" />
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
      <div className="mockups">
        <img src={AIAMockup} alt="AIA Mockup" />
      </div>
      <div className="logos">
        <div className="logo">
          <h4 className="logo__title">Mathematical logo</h4>
          <img src={AIALogoMath} alt="" className="logo__img math" />
        </div>
        {/* <div className="logo">
          <h4 className="logo__title"></h4>
          <img src={FlufLogoMath2} alt="" className="logo__img" />
        </div> */}
        <div className="logo">
          <h4 className="logo__title">Final logo</h4>
          <img src={AIALogoBlack} alt="" className="logo__img" />
        </div>
      </div>
      <div className="trios">
        <div className="trios__left">
          <h4 className="trios__title">Pattern</h4>
          <div className="box">
            <img src={Pattern1} alt="Pattern" className="trios__left--img" />
            <img src={Pattern2} alt="Pattern" className="trios__left--img" />
            <img src={Pattern3} alt="Pattern" className="trios__left--img" />
          </div>
        </div>
        <div className="trios__right">
          <img src={Square1} alt="" className="trios__right--img" />
          <img src={Square2} alt="" className="trios__right--img" />
          <img src={Square3} alt="" className="trios__right--img" />
        </div>
      </div>
      <div className="link">
        <img src={AIALogo} alt="AIA" className="link__image" />
      </div>
    </main>
  );
};

export default AIA;
