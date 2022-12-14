import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Connect from "./components/Connect";
import Hakolav from "./components/Hakolav";
import Aria51 from "./components/Aria51";
import Vime from "./components/Vime";
import Bombshell from "./components/Bombshell";
import Own from "./components/Own";

import { useLocation } from "react-router-dom";

import { useState } from "react";
import OrGif from "./assets/OrGif.gif";
import { useEffect, useLayoutEffect } from "react";
import EasyHome from "./components/EasyHome";
import DoubleCouple from "./components/DoubleCouple";
import Fluf from "./components/Fluf";
import AIA from "./components/AIA";
// fix
function App() {
  const { pathname } = useLocation();
  const [lottieFinished, setLottieFinished] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setLottieFinished(true);
    } else {
      setTimeout(() => {
        setLottieFinished(true);
      }, 3000);
    }
  }, []);

  return (
    <div className={`App ${pathname.substring(1)}-route`}>
      {!lottieFinished && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "100vw",
            maxHeight: "100vh",
            background: "#000",
            overflow: "hidden",
          }}
        >
          <img
            src={OrGif}
            alt=""
            style={{
              width: "100vw",
              height: "100vh",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: lottieFinished ? "block" : "none",
        }}
        className="body__container"
      >
        <Header />
        <Routes>
          <Route path="/works" element={<Works />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/hakolav" element={<Hakolav />} />
          <Route path="/area-51" element={<Aria51 />} />
          <Route path="/vime" element={<Vime />} />
          <Route path="/bombshell" element={<Bombshell />} />
          <Route path="/own" element={<Own />} />
          <Route path="/easy-home" element={<EasyHome />} />
          <Route path="/double-couple" element={<DoubleCouple />} />
          <Route path="/fluf" element={<Fluf />} />
          <Route path="/aia" element={<AIA />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
