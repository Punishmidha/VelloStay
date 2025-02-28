import { FaAirbnb, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "../styles/JoinOurNetwork.css";
import Globe3D from "../components/Globe3D";

const JoinOurNetwork = () => {
  return (
    <div>
      <div className="join-container">
        <h1 className="join-heading">We Are Worldwide 🌍</h1>
        <div className="globe-wrapper">
          <Globe3D />
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <a
            href="https://www.airbnb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaAirbnb className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/supernova.vellostay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinOurNetwork;
