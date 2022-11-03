import VimeIcon from "../images/VimeIcon.svg";
import VimeLogo from "../images/Vime/VimeLogo.svg";
import Element1 from "../images/Vime/Element1.svg";
import Element2 from "../images/Vime/Element2.svg";
import Element3 from "../images/Vime/Element3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Screen1 from "../images/Vime/Screen1.png";
import Screen2 from "../images/Vime/Screen2.png";
import Screen3 from "../images/Vime/Screen3.png";
import Screen4 from "../images/Vime/Screen4.png";
import Screen5 from "../images/Vime/Screen5.png";
import Screen6 from "../images/Vime/Screen6.png";
import Screen7 from "../images/Vime/Screen7.png";
import Screen8 from "../images/Vime/Screen8.png";
import Icon1 from "../images/Vime/Icon1.svg";
import Icon2 from "../images/Vime/Icon2.svg";
import Icon3 from "../images/Vime/Icon3.svg";
import Icon4 from "../images/Vime/Icon4.svg";
import Icon5 from "../images/Vime/Icon5.svg";
import Icon6 from "../images/Vime/Icon6.svg";
import Icon7 from "../images/Vime/Icon7.svg";
import Icon8 from "../images/Vime/Icon8.svg";
import Icon9 from "../images/Vime/Icon9.svg";
import Icon10 from "../images/Vime/Icon10.svg";

const Vime = () => {
  return (
    <main id="vime" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={VimeIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            ViME <br />
            App Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">ViME</h1>
          <h2 className="project__subtitle">App Design</h2>
          <p className="project__paragraph">
            an health application that provides information and a solution to
            common problems among the population that suffers from common pains
            during the day, making healthy solutions quickly accessible and
            creating a change of mind about body health.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={VimeLogo} alt="Hakolav" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={VimeIcon} alt="Hakolav" className="property__icon" />
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
        </Swiper>
      </div>
      <div className="icons">
        <h4 className="icons__title">Icons</h4>
        <div className="icons__container">
          <img src={Icon1} alt="" className="icons__icon" />
          <img src={Icon2} alt="" className="icons__icon" />
          <img src={Icon3} alt="" className="icons__icon" />
          <img src={Icon4} alt="" className="icons__icon" />
          <img src={Icon5} alt="" className="icons__icon" />
          <img src={Icon6} alt="" className="icons__icon" />
          <img src={Icon7} alt="" className="icons__icon" />
          <img src={Icon8} alt="" className="icons__icon" />
          <img src={Icon9} alt="" className="icons__icon" />
          <img src={Icon10} alt="" className="icons__icon" />
        </div>
      </div>
    </main>
  );
};

export default Vime;
