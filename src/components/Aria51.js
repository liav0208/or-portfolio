import AriaIcon from "../images/Aria/AriaIcon.svg";
import AriaLogo from "../images/Aria/AriaLogo.svg";
import Aria51Icon from "../images/Aria51Icon.svg";
import Element1 from "../images/Aria/Element1.svg";
import Element2 from "../images/Aria/Element2.svg";
import Element3 from "../images/Aria/Element3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Screen1 from "../images/Aria/Screen1.png";
import Screen2 from "../images/Aria/Screen2.png";
import Screen3 from "../images/Aria/Screen3.png";
import Screen4 from "../images/Aria/Screen4.png";
// import TabletScreen1 from "../images/Aria/TabletScreen1.png";
// import TabletScreen2 from "../images/Aria/TabletScreen2.png";
// import TabletScreen3 from "../images/Aria/TabletScreen3.png";
// import TabletScreen4 from "../images/Aria/TabletScreen4.png";
import Weblink from "../images/Aria/Weblink.jpg";
import AreaPopup from "../images/Aria/AreaPopup.png";
import { useState } from "react";

const Aria51 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main id="aria" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={Aria51Icon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Aria 51 <br />
            Web Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Aria 51</h1>
          <h2 className="project__subtitle">Web Design</h2>
          <p className="project__paragraph">
            Inspired by Aliens and Area 51,
            <br />
            Illustrative design with pop and strong colors.
            <br />
            includes information for those who want to travel in Area 51.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={AriaLogo} alt="Area 51" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={AriaIcon} alt="Area 51" className="property__icon" />
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
      <div className="swiper swiper__iphones">
        <Swiper
          spaceBetween={50}
          autoplay
          centeredSlides
          loop
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1440: {
              width: 1440,
              slidesPerView: 1,
            },
            1920: {
              width: 1920,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={Screen1}
              alt="mockeup"
              className="swiper__img area__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Screen2}
              alt="mockeup"
              className="swiper__img area__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Screen3}
              alt="mockeup"
              className="swiper__img area__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Screen4}
              alt="mockeup"
              className="swiper__img area__image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="tablet__mockups">
        <img src={TabletScreen1} alt="" className="tablet__mockup" />
        <img src={TabletScreen2} alt="" className="tablet__mockup" />
        <img src={TabletScreen3} alt="" className="tablet__mockup" />
        <img src={TabletScreen4} alt="" className="tablet__mockup" />
      </div> */}
      <div className="link">
        <img
          src={Weblink}
          alt="Area 51"
          className="link__image"
          onClick={() => setShowPopup(true)}
        />
      </div>
      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <span className="popup__close" onClick={() => setShowPopup(false)}>
            X
          </span>
          <div className="popup__container">
            <img src={AreaPopup} alt="Area 51 Popup" className="popup__image" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Aria51;
