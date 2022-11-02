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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/hakolav" element={<Hakolav />} />
        <Route path="/aria-51" element={<Aria51 />} />
        <Route path="/vime" element={<Vime />} />
        <Route path="/bombshell" element={<Bombshell />} />
        <Route path="/own" element={<Own />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
