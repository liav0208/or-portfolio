import AiIcon from "../images/AiIcon.svg";
import PsIcon from "../images/PsIcon.svg";
import AeIcon from "../images/AeIcon.svg";
import PrIcon from "../images/PrIcon.svg";
import XdIcon from "../images/XdIcon.svg";

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="homepage__container">
        <h1 className="homepage__title">Wellcome</h1>
        <h2 className="homepage__subtitle">to my portfolio</h2>
        <p className="homepage__paragraph">
          Hi, I'm Or and I'm a Graphic Designer
        </p>
        <div className="split__text">
          <p className="homepage__detail">College: Shankar Handesaim</p>
          <p className="homepage__detail">Degree: Media Engineering</p>
        </div>
        <h3 className="homepage__experience">Experience & software</h3>
        <div className="homepage__softwares">
          <img src={AiIcon} alt="" className="software" />
          <img src={PsIcon} alt="" className="software" />
          <img src={AeIcon} alt="" className="software" />
          <img src={PrIcon} alt="" className="software" />
          <img src={XdIcon} alt="" className="software" />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
