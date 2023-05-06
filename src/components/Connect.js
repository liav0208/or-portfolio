import EnvelopeWhite from "../images/EnvelopeWhite.svg";
import InstagramWhite from "../images/InstagramWhite.svg";
import LinkedinWhite from "../images/LinkedinWhite.svg";

const Connect = () => {
  return (
    <main className="connect">
      <div className="connect__container">
        <h1 className="connect__title">Let's work together</h1>
        <h2 className="connect__subtitle">Connect me</h2>
        <div className="connect__socials">
          <a
            href="https://www.instagram.com/or.h.design/"
            target={"_blank"}
            rel="noreferrer"
            className="connect__link instagram"
          >
            <img
              src={InstagramWhite}
              alt="Instagram"
              className="connect__icon"
            />
          </a>
          <a
            href="mailto:orhasidd@gmail.com"
            className="connect__link envelope"
          >
            <img src={EnvelopeWhite} alt="Mail" className="connect__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/or-hasid"
            target={"_blank"}
            rel="noreferrer"
            className="connect__link linkedin"
          >
            <img src={LinkedinWhite} alt="Linkedin" className="connect__icon" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Connect;
