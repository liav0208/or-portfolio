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
// import OrLottie from "./assets/OrLottie.json";
// import Lottie from "lottie-react";
// import { useState } from "react";

function App() {
  const { pathname } = useLocation();
  // const [lottieFinished, setLottieFinished] = useState(false);

  return (
    <div className={`App ${pathname.substring(1)}-route`}>
      {/* {!lottieFinished && (
        <Lottie
          animationData={OrLottie}
          autoplay={true}
          style={{ position: "absolute", top: 0, left: 0 }}
          loop={false}
          onComplete={() => setLottieFinished(true)}
        />
      )} */}
      {/* <div style={{ visibility: lottieFinished ? "visible" : "hidden" }}> */}
      <Header />
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/hakolav" element={<Hakolav />} />
        <Route path="/area-51" element={<Aria51 />} />
        <Route path="/vime" element={<Vime />} />
        <Route path="/bombshell" element={<Bombshell />} />
        <Route path="/own" element={<Own />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
