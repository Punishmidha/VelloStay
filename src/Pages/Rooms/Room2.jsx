import "../../styles/Rooms.css"; // Updated path
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roomImg from "../../assets/room2.jpg"; // Updated path

const Room1 = () => {
  // ✅ Fixed component name
  // Hook to track when elements are in view
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="rooms-container">
      {/* Left Section - Room Image */}
      <div className="room-image">
        <img src={roomImg} alt="Room" />
      </div>

      {/* Right Section - Room Details */}
      <div className="room-details">
        <motion.div
          ref={ref1}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h3>✨ Luxury Comfort</h3>
          <p>
            Enjoy premium beds, elegant interiors, and world-class amenities.
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>📶 Free Wi-Fi</h3>
          <p>Stay connected with high-speed internet in all rooms.</p>
        </motion.div>

        <motion.div
          ref={ref3}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>🍽️ 24/7 Room Service</h3>
          <p>Order delicious meals anytime from our in-house restaurant.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Room1; 


