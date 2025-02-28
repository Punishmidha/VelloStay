import { useSearchParams } from "react-router-dom";
import "../styles/BookingForm.css";
import img1 from "../assets/ListingPics/noida.jpg";
import img2 from "../assets/ListingPics/jaipur.jpg";
import img3 from "../assets/ListingPics/delhi.jpg";
import img4 from "../assets/ListingPics/chandigarh.jpg";
import img5 from "../assets/ListingPics/banglore.jpg";
import img6 from "../assets/ListingPics/mumbai.jpg";

const listingImages = {
  Noida: img1,
  Jaipur: img2,
  Delhi: img3,
  Chandigarh: img4,
  Banglore: img5,
  Mumbai: img6,
};

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "Unknown";
  const area = searchParams.get("area") || "Unknown";
  const imgSrc = listingImages[city] || "";

  return (
    <div>
      <div className="booking-form-container">
        {/* Left Side - Image */}
        <div className="image-container">
          <h2 className="bookHead">Book Your Stay</h2>
          <img src={imgSrc} alt={city} className="listing-image" />
          <p className="location-text">
            <strong>Location:</strong> {city}, {area}
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="form-container">
          <form>
            <label>Your Name</label>
            <input className="FN"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label>Check-in Date</label>
            <input  className="FN" type="date" name="date" required />

            <label>Number of Guests</label>
            <input className="FN" type="number" name="guests" min="1" required />

            <button className="buttonBooked" type="submit">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
