import "../../styles/Rooms.css"; // Updated path
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roomImg from "../../assets/room3.jpg"; // Updated path

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
          <h3>🛋️ Plush & Comfortable Seating</h3>
          <p>
            Sink into luxurious sofas designed for ultimate relaxation and
            style.
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>📺 Perfect Lounge Area</h3>
          <p>
            Enjoy your favorite shows with a cozy seating space & entertainment
            setup.
          </p>
        </motion.div>

        <motion.div
          ref={ref3}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>☕ Relax & Unwind</h3>
          <p>
            Sip your coffee while enjoying a warm and inviting ambiance in the
            sofa lounge.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Room1;
