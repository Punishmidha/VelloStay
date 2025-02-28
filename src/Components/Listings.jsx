import "../styles/Listings.css";
import img1 from "../assets/ListingPics/noida.jpg";
import img2 from "../assets/ListingPics/jaipur.jpg";
import img3 from "../assets/ListingPics/delhi.jpg";
import img4 from "../assets/ListingPics/chandigarh.jpg";
import img5 from "../assets/ListingPics/banglore.jpg";
import img6 from "../assets/ListingPics/mumbai.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const listings = [
  { id: 1, city: "Noida", area: "SuperNova Noida", img: img1 },
  { id: 2, city: "Jaipur", area: "Malviya Nagar", img: img2 },
  { id: 3, city: "Delhi", area: "Connaught Place", img: img3 },
  { id: 4, city: "Chandigarh", area: "SuperNova Noida", img: img4 },
  { id: 5, city: "Banglore", area: "Malviya Nagar", img: img5 },
  { id: 6, city: "Mumbai", area: "Connaught Place", img: img6 },
];

const Listings = () => {
  const [liked, setLiked] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to navigate to the booking page
  const openBookingForm = (listing) => {
    navigate(`/book?city=${listing.city}&area=${listing.area}`);
  };

  return (
    <div className="listings-container">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-card">
          <img src={listing.img} alt={listing.city} />
          <h3>{listing.city}</h3>
          <p>{listing.area}</p>
          <div className="buttons">
            <button
              className={`like-btn ${liked[listing.id] ? "liked" : ""}`}
              onClick={() => toggleLike(listing.id)}
            >
              {liked[listing.id] ? "❤️" : "🤍"}
            </button>
            <button className="visit-btn" onClick={() => openBookingForm(listing)}>
              🔗 Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
