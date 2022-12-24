import DoubleCoupleIcon from "../images/DoubleCouple/DoubleCoupleIcon.svg";
import DoubleCoupleLogo from "../images/DoubleCouple/DoubleCoupleLogo.svg";
import Element1 from "../images/DoubleCouple/Element1.svg";
import Element2 from "../images/DoubleCouple/Element2.svg";
import Element3 from "../images/DoubleCouple/Element3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Screen1 from "../images/DoubleCouple/Screen1.png";
import Screen2 from "../images/DoubleCouple/Screen2.png";
import Screen3 from "../images/DoubleCouple/Screen3.png";
import Screen4 from "../images/DoubleCouple/Screen4.png";
import Screen5 from "../images/DoubleCouple/Screen5.png";
import BottomPic from "../images/DoubleCouple/BottomPic.png";
import EHPopup from "../images/DoubleCouple/DCPopup.png";
import { useState } from "react";

const DoubleCouple = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main id="doublecouple" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={DoubleCoupleIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Double Couple <br />
            Web Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Double Couple</h1>
          <h2 className="project__subtitle">Web Design</h2>
          <p className="project__paragraph">
            Application for delivery and sale of second-hand clothing items. The
            application designed by make it easier for the user, therefore I
            used filters to make it easier for the user and find the item he is
            looking for. In addition, it’s possible to see if there’r neighbors
            who sells items and by that createing a new social relationships.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img
            src={DoubleCoupleLogo}
            alt="Hakolav"
            className="property__logo"
          />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img
            src={DoubleCoupleIcon}
            alt="Hakolav"
            className="property__icon"
          />
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
      <div className="swiper swiper__macs">
        <Swiper
          autoplay
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
            1024: {
              width: 1024,
              slidesPerView: 1,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
            },
            1440: {
              width: 1440,
              slidesPerView: 3,
            },
            1536: {
              width: 1536,
              slidesPerView: 3,
            },
            1920: {
              width: 1920,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={Screen1} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen2} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen3} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen4} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen5} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="link">
        <img
          src={BottomPic}
          alt="Easy Home"
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
            <img src={EHPopup} alt="Easy Home Popup" className="popup__image" />
          </div>
        </div>
      )}
    </main>
  );
};

export default DoubleCouple;
