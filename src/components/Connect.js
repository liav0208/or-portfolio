import Envelope from "../images/Envelope.svg";
import Instagram from "../images/Instagram.svg";
import Linkedin from "../images/Linkedin.svg";

const Connect = () => {
  return (
    <main className="connect">
      <div className="connect__container">
        <h1 className="connect__title">Connect me</h1>
        <h2 className="connect__subtitle">Let's work together</h2>
        <div className="connect__socials">
          <a
            href="https://www.linkedin.com/in/or-hasid"
            target={"_blank"}
            rel="noreferrer"
            className="connect__link instagram"
          >
            <img src={Instagram} alt="Instagram" className="connect__icon" />
          </a>
          <a
            href="mailto:orhasidd@gmail.com"
            className="connect__link envelope"
          >
            <img src={Envelope} alt="Mail" className="connect__icon" />
          </a>
          <a
            href="https://www.instagram.com/or_h.design/"
            target={"_blank"}
            rel="noreferrer"
            className="connect__link linkedin"
          >
            <img src={Linkedin} alt="Linkedin" className="connect__icon" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Connect;
