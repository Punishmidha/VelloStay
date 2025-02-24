import "../styles/Listings.css";
import img1 from "../assets/ListingPics/noida.jpg";
import img2 from "../assets/ListingPics/jaipur.jpg";
import img3 from "../assets/ListingPics/delhi.jpg";
import img4 from "../assets/ListingPics/chandigarh.jpg";
import img5 from "../assets/ListingPics/banglore.jpg";
import img6 from "../assets/ListingPics/mumbai.jpg";
import { useState } from "react"; // To handle like button state

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

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="listings-container">
      {listings.map(({ id, city, area, img }) => (
        <div key={id} className="listing-card">
          <img src={img} alt={city} />
          <h3>{city}</h3>
          <p>{area}</p>
          <div className="buttons">
            <button
              className={`like-btn ${liked[id] ? "liked" : ""}`}
              onClick={() => toggleLike(id)}
            >
              {liked[id] ? "❤️" : "🤍"}
            </button>
            <button className="visit-btn">🔗 Visit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
