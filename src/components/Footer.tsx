import "./Footer.css";
import {
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT – LOGO & INFO */}
        <div className="footer-left">
          <img src={logo} alt="XRAPY logo featuring a modern design, representing a technology company based in Beirut, Lebanon" className="footer-logo" />
          <p>Beirut, Lebanon</p>

          <a href="mailto:info@xrapy.com" className="footer-email">
            <FaEnvelope /> info@xrapy.com
          </a>
        </div>

        {/* CENTER – SOCIAL ICONS */}
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* RIGHT – COPYRIGHT */}
        <div className="footer-right">
          <p>© 2026 XRAPY</p>
          <span>Powered by XRAPY</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
