import FlufIcon from "../images/Fluf/Fluf_Icon.svg";
import FlufLogo from "../images/Fluf/Fluf_Logo.svg";
import Element1 from "../images/Fluf/Element1.svg";
import Element2 from "../images/Fluf/Element2.svg";
import Element3 from "../images/Fluf/Element3.svg";
import Pattern1 from "../images/Fluf/Pattern1.svg";
import Pattern2 from "../images/Fluf/Pattern2.svg";
import Pattern3 from "../images/Fluf/Pattern3.svg";
import Square1 from "../images/Fluf/Square1.svg";
import Square2 from "../images/Fluf/Square2.svg";
import Square3 from "../images/Fluf/Square3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide1 from "../images/Fluf/Slide1.png";
import Slide2 from "../images/Fluf/Slide2.png";
import Slide3 from "../images/Fluf/Slide3.png";
import Slide4 from "../images/Fluf/Slide4.png";
import Slide5 from "../images/Fluf/Slide5.png";
import Slide6 from "../images/Fluf/Slide6.png";
import FlufLogoMath from "../images/Fluf/Fluf_Logo_math.svg";
import FlufLogoMath2 from "../images/Fluf/Fluf_math_2.svg";
import Sticker1 from "../images/Fluf/sticker_1.svg";
import Sticker2 from "../images/Fluf/sticker_2.svg";
import Sticker3 from "../images/Fluf/sticker_3.svg";

const Fluf = () => {
  return (
    <main id="fluf" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={FlufIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Fluf
            <br />
            Brand design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Fluf</h1>
          <h2 className="project__subtitle">Brand design</h2>
          <p className="project__paragraph">
            Pet boutique for all types and species of pets. Using modern
            conceptual thinking while not defining the species or type of
            animal, maintaining a clean design with two primary colors, and
            creating graphic elements that serve both as patterns and stickers.
          </p>
        </div>
      </div>
      <div className="project__properties">
        <div className="logo">
          <p className="property__text logo">Logo</p>
          <img src={FlufLogo} alt="Hakolav" className="property__logo" />
        </div>
        <div className="icon">
          <p className="property__text icon">Icon</p>
          <img src={FlufIcon} alt="Hakolav" className="property__icon" />
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
          // centeredSlides
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
            <img src={Slide3} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide4} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide5} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide6} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Slide1} alt="mockeup" className="swiper__img" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={Slide2} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="logos">
        <div className="logo">
          <h4 className="logo__title">Mathematical logo</h4>
          <img src={FlufLogoMath} alt="" className="logo__img math" />
        </div>
        {/* <div className="logo">
          <h4 className="logo__title"></h4>
          <img src={FlufLogoMath2} alt="" className="logo__img" />
        </div> */}
        <div className="logo">
          <h4 className="logo__title">Final logo</h4>
          <img src={FlufLogo} alt="" className="logo__img" />
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
      <div className="stickers">
        <h4 className="stickers__title">Stickers</h4>
        <div className="box">
          <img src={Sticker1} alt="" className="stickers__img" />
          <img src={Sticker2} alt="" className="stickers__img" />
          <img src={Sticker3} alt="" className="stickers__img" />
        </div>
      </div>
    </main>
  );
};

export default Fluf;
