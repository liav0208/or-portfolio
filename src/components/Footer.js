import Envelope from "../images/Envelope.svg";
import Instagram from "../images/Instagram.svg";
import Linkedin from "../images/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p className="footer__text">
          Or Hasid Portfolio <span className="copyright">&copy;</span>
          {new Date().getFullYear()}
        </p>
      </div>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/or-hasid"
          target={"_blank"}
          rel="noreferrer"
          className="footer__link"
        >
          <img src={Instagram} alt="Instagram" className="footer__icon" />
        </a>
        <a href="mailto:orhasidd@gmail.com" className="footer__link">
          <img src={Envelope} alt="Mail" className="footer__icon" />
        </a>
        <a
          href="https://www.instagram.com/or_h.design/"
          target={"_blank"}
          rel="noreferrer"
          className="footer__link"
        >
          <img src={Linkedin} alt="Linkedin" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
