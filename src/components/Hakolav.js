import HakolavIcon from "../images/HakolavIcon.svg";
import IllustratorStuff24 from "../images/hakolav/IllustratorStuff24.svg";
import IllustratorStuff25 from "../images/hakolav/IllustratorStuff25.svg";
import IllustratorStuff26 from "../images/hakolav/IllustratorStuff26.svg";
import LogoHakolav from "../images/hakolav/LogoHakolav.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Screen1 from "../images/hakolav/Screen1.png";
import Screen2 from "../images/hakolav/Screen2.png";
import Screen3 from "../images/hakolav/Screen3.png";
import Screen4 from "../images/hakolav/Screen4.png";
import Screen5 from "../images/hakolav/Screen5.png";
import Screen6 from "../images/hakolav/Screen6.png";
import Screen7 from "../images/hakolav/Screen7.png";
import Screen8 from "../images/hakolav/Screen8.png";
import Screen9 from "../images/hakolav/Screen9.png";
import Screen10 from "../images/hakolav/Screen10.png";
import Screen11 from "../images/hakolav/Screen11.png";
import Screen12 from "../images/hakolav/Screen12.png";
import Screen13 from "../images/hakolav/Screen13.png";
import HakolavLink from "../images/hakolav/HakolavLink.png";
import HakolavPopup from "../images/hakolav/HakolavPopup.jpg";
import { useState } from "react";

const Hakolav = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main id="hakolav" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={HakolavIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Hakolav <br />
            App Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Hakolav</h1>
          <h2 className="project__subtitle">App Design</h2>
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
          <img src={LogoHakolav} alt="Hakolav" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={HakolavIcon} alt="Hakolav" className="property__icon" />
        </div>
        <div className="pallete">
          <p className="property__text pallete">Pallete</p>
          <div className="hakolav pallete__boxes">
            <div className="box box__1"></div>
            <div className="box box__2"></div>
            <div className="box box__3"></div>
          </div>
        </div>
        <img src={IllustratorStuff24} alt="" className="property__image" />
        <img src={IllustratorStuff25} alt="" className="property__image" />
        <img src={IllustratorStuff26} alt="" className="property__image" />
      </div>
      <div className="swiper swiper__iphones">
        <Swiper
          loop={true}
          initialSlide={0}
          autoplay={true}
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
          <SwiperSlide>
            <img src={Screen13} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="link">
        <img
          src={HakolavLink}
          alt="Hakolav"
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
            <img
              src={HakolavPopup}
              alt="Area 51 Popup"
              className="popup__image"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Hakolav;
