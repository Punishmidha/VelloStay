import { useEffect } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Rooms.css";
import { motion } from "framer-motion";
import homeBg from "../assets/HomeHotel.jpg";
import Room1 from "./Rooms/Room1.jsx";
import Room2 from "./Rooms/Room2.jsx";
import Room3 from "./Rooms/Room3.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll Animation Effect
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <h1>Welcome to Vello Stay</h1>
        </motion.div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h2 className="fade-in">About Vello Stay</h2>
        <p className="fade-in">
          Vello Stay offers premium townhouses in multiple cities with top-class
          comfort and services. Whether it's a business trip, vacation, or
          special occasion, we ensure a luxurious experience. Our properties
          provide a blend of elegance and convenience, making every stay
          unforgettable.
        </p>
      </div>

      <Room1 />
      <Room2 />
      <Room3 />
    </div>
  );
};

export default Home;
