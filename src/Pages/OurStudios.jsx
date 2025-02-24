import { useEffect } from "react";
import "../styles/OurStudios.css";
import Listings from "../components/Listings";
import studioBg from "../assets/OurStudios.jpg";

const OurStudios = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="studios-container"
        style={{ backgroundImage: `url(${studioBg})` }}
      >
        <h1 className="heading">
          <span className="word">Your</span>
          <span className="word">Stay,</span>
          <span className="word">Your</span>
          <span className="word">Choice</span>
        </h1>
      </div>

      {/* Listings Section */}
      <div className="listings-section">
        <Listings />
      </div>
    </div>
  );
};

export default OurStudios;
