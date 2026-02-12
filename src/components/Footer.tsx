import "./Footer.css";
import {
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-left">
          <img
            src={logo2}
            alt="XRAPY logo featuring a modern design, representing a technology company based in Beirut, Lebanon"
            className="footer-logo"
          />
          <p>Beirut, Lebanon</p>

          <a href="mailto:info@xrapy.com" className="footer-email">
            <FaEnvelope /> info@xrapy.com
          </a>
        </div>

        
        <div></div>

     
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>

       
        <div className="footer-right">
          © 2026 XRAPY — Powered by XRAPY
        </div>

      </div>
    </footer>
  );
};

export default Footer;
