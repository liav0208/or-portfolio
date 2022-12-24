import EasyHomeIcon from "../images/EasyHome/EasyHomeIcon.svg";
import EasyHomeLogo from "../images/EasyHome/EasyHomeLogo.svg";
import Element1 from "../images/EasyHome/Element1.svg";
import Element2 from "../images/EasyHome/Element2.svg";
import Element3 from "../images/EasyHome/Element3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Screen1 from "../images/EasyHome/Screen1.png";
import Screen2 from "../images/EasyHome/Screen2.png";
import Screen3 from "../images/EasyHome/Screen3.png";
import Screen4 from "../images/EasyHome/Screen4.png";
import Screen5 from "../images/EasyHome/Screen5.png";
import Screen6 from "../images/EasyHome/Screen6.png";
import Screen7 from "../images/EasyHome/Screen7.png";
import Screen8 from "../images/EasyHome/Screen8.png";
import Screen9 from "../images/EasyHome/Screen9.png";
import Screen10 from "../images/EasyHome/Screen10.png";
import Screen11 from "../images/EasyHome/Screen11.png";
import Screen12 from "../images/EasyHome/Screen12.png";
import BottomPic from "../images/EasyHome/BottomPic.svg";
import EHPopup from "../images/EasyHome/EHPopup.png";
import { useState } from "react";

const EasyHome = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main id="easyhome" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={EasyHomeIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Easy Home <br />
            App Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Easy Home</h1>
          <h2 className="project__subtitle">App Design</h2>
          <p className="project__paragraph">
            A mobile app designed for an Israeli startup to make mortgages more
            accessible to young people before they begin searching for
            apartments. With the mortgage calculator, you can figure out how
            much mortgage you can afford based on the amount of mortgage
            receipt.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={EasyHomeLogo} alt="Hakolav" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={EasyHomeIcon} alt="Hakolav" className="property__icon" />
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
          loop={true}
          initialSlide={0}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1440: {
              width: 1440,
              slidesPerView: 5,
            },
            1920: {
              width: 1920,
              slidesPerView: 5,
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
          <SwiperSlide>
            <img src={Screen6} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen7} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen8} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen9} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen10} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen11} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screen12} alt="mockeup" className="swiper__img" />
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

export default EasyHome;
