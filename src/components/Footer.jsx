import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../utils/footer.css";
import { Link } from "react-router-dom";
import icon_hover from '../assets/icons_white.png'
import icon from '../assets/icons_fully_white.png';
const Footer = () => {
  return (
    <footer className="footer">
      <Link to={"/"} className="footer-logo">
        <img
          src={icon}
          alt="logo"
          onMouseOver={(e) =>
            (e.currentTarget.src=icon_hover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.src=icon)
          }
          
        />
      </Link>
      <div className="socials">
        <div>
          <a href="facebook.com/">
            <FontAwesomeIcon icon={faFacebook} className="contact" />
          </a>
        </div>
        <div>
          <a href="twitter.com/">
            <FontAwesomeIcon icon={faSquareTwitter} className="contact" />
          </a>
        </div>
        <div>
          <a href="/gmail">
            <FontAwesomeIcon icon={faEnvelope} className="contact" />
          </a>
        </div>
        <div>
          <a href="contact.html"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
