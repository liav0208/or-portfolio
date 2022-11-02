import HTMLFlipBook from "react-pageflip";

import OwnIcon from "../images/OwnIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Logo from "../images/own/Logo.svg";
import Element1 from "../images/own/Element1.svg";
import Element2 from "../images/own/Element2.svg";
import Element3 from "../images/own/Element3.svg";
import Screen1 from "../images/own/Screen1.png";
import Screen2 from "../images/own/Screen2.png";
import Screen3 from "../images/own/Screen3.png";
import Screen4 from "../images/own/Screen4.png";
import Screen5 from "../images/own/Screen5.png";
import Screen6 from "../images/own/Screen6.png";
import Screen7 from "../images/own/Screen7.png";
import Screen8 from "../images/own/Screen8.png";
import Screen9 from "../images/own/Screen9.png";
import Poster1 from "../images/own/Poster1.jpg";
import Poster2 from "../images/own/Poster2.jpg";
import Poster3 from "../images/own/Poster3.jpg";
import Poster4 from "../images/own/Poster4.jpg";
import MacScreen4 from "../images/own/MacScreen4.png";
import MacScreen5 from "../images/own/MacScreen5.png";
import MacScreen6 from "../images/own/MacScreen6.png";
import MacScreen7 from "../images/own/MacScreen7.png";
import MacScreen8 from "../images/own/MacScreen8.png";
import MacScreen9 from "../images/own/MacScreen9.png";
import MacScreen10 from "../images/own/MacScreen10.png";
import MacScreen11 from "../images/own/MacScreen11.png";
import MacScreen12 from "../images/own/MacScreen12.png";
import MacScreen13 from "../images/own/MacScreen13.png";
import MacScreen14 from "../images/own/MacScreen14.png";
import MacScreen15 from "../images/own/MacScreen15.png";
import MacScreen16 from "../images/own/MacScreen16.png";
import MacScreen17 from "../images/own/MacScreen17.png";
import MacScreen18 from "../images/own/MacScreen18.png";
import MacScreen19 from "../images/own/MacScreen19.png";
import MacScreen20 from "../images/own/MacScreen20.png";
import MacScreen21 from "../images/own/MacScreen21.png";
import MacScreen22 from "../images/own/MacScreen22.png";
import MacScreen23 from "../images/own/MacScreen23.png";
import MacScreen24 from "../images/own/MacScreen24.png";
import MacScreen25 from "../images/own/MacScreen25.png";
import MacScreen26 from "../images/own/MacScreen26.png";
// import PAGES from "../images/own/PAGES.jpg";
import PAGES2 from "../images/own/PAGES2.jpg";
import PAGES3 from "../images/own/PAGES3.jpg";
import PAGES4 from "../images/own/PAGES4.jpg";
import PAGES5 from "../images/own/PAGES5.jpg";
import PAGES6 from "../images/own/PAGES6.jpg";
import PAGES7 from "../images/own/PAGES7.jpg";
import PAGES8 from "../images/own/PAGES8.jpg";
import PAGES9 from "../images/own/PAGES9.jpg";
import PAGES10 from "../images/own/PAGES10.jpg";
import PAGES11 from "../images/own/PAGES11.jpg";
import PAGES12 from "../images/own/PAGES12.jpg";
import PAGES13 from "../images/own/PAGES13.jpg";
import PAGES14 from "../images/own/PAGES14.jpg";
import PAGES15 from "../images/own/PAGES15.jpg";
import PAGES16 from "../images/own/PAGES16.jpg";
import PAGES17 from "../images/own/PAGES17.jpg";
import PAGES18 from "../images/own/PAGES18.jpg";
import PAGES19 from "../images/own/PAGES19.jpg";
import OwnBottom from "../images/own/OwnBottom.jpg";
import { useState } from "react";
// import PAGES20 from "../images/own/PAGES20.jpg";

const Own = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main id="own" className="project">
      <div className="project__top">
        <div className="project__top--left">
          <img src={OwnIcon} alt="Hakolav" className="project__logo" />
          <h3 className="project__detail">
            Own <br />
            Brand Design
          </h3>
        </div>
        <div className="project__top--right">
          <h1 className="project__title">Own</h1>
          <h2 className="project__subtitle">Brand Design</h2>
          <p className="project__paragraph">
            Own is a technology company that owns Ring A1. Ring A1 allows making
            screen gestures for digital screens when the user is the one who
            defines the gesture that he wants to perform. Own found a
            technological, innovative and immediate solution for an input
            product that also functions as an accessory and allows users
            absolute control over the product.
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
          <img src={OwnIcon} alt="BombShell" className="property__icon" />
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
          <SwiperSlide>
            <img src={Screen9} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper swiper__macs">
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={MacScreen4} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen5} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen6} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen7} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen8} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen9} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen10} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen11} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen12} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen13} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen14} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen15} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen16} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen17} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen18} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen19} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen20} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen21} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen22} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen23} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen24} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen25} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MacScreen26} alt="mockeup" className="swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="posters">
        <img src={Poster1} alt="Poster" className="posters__image" />
        <img src={Poster2} alt="Poster" className="posters__image" />
        <img src={Poster3} alt="Poster" className="posters__image" />
        <img src={Poster4} alt="Poster" className="posters__image" />
      </div>
      <div className="catalog__container">
        <HTMLFlipBook
          className="catalog"
          showCover={false}
          width={700}
          height={500}
          drawShadow={false}
        >
          {/* <img src={PAGES} alt="" /> */}
          <img src={PAGES2} alt="" className="catalog__image" />
          <img src={PAGES3} alt="" className="catalog__image" />
          <img src={PAGES4} alt="" className="catalog__image" />
          <img src={PAGES5} alt="" className="catalog__image" />
          <img src={PAGES6} alt="" className="catalog__image" />
          <img src={PAGES7} alt="" className="catalog__image" />
          <img src={PAGES8} alt="" className="catalog__image" />
          <img src={PAGES9} alt="" className="catalog__image" />
          <img src={PAGES10} alt="" className="catalog__image" />
          <img src={PAGES11} alt="" className="catalog__image" />
          <img src={PAGES12} alt="" className="catalog__image" />
          <img src={PAGES13} alt="" className="catalog__image" />
          <img src={PAGES14} alt="" className="catalog__image" />
          <img src={PAGES15} alt="" className="catalog__image" />
          <img src={PAGES16} alt="" className="catalog__image" />
          <img src={PAGES17} alt="" className="catalog__image" />
          <img src={PAGES18} alt="" className="catalog__image" />
          <img src={PAGES19} alt="" className="catalog__image" />
          {/* <img src={PAGES20} alt="" /> */}
        </HTMLFlipBook>
      </div>
      <div className="link">
        <img
          src={OwnBottom}
          alt="Hakolav"
          className="link__image"
          onClick={() => setShowPopup(true)}
        />
      </div>
    </main>
  );
};

export default Own;
