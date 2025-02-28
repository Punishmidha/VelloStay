import "../../styles/Rooms.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roomImg from "../../assets/room2.jpg";

const Room2 = ({ reverse }) => {
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
    <div className={`rooms-container ${reverse ? "rooms-reverse" : ""}`}>
      {/* Room Image */}
      <div className="room-image">
        <img src={roomImg} alt="Room" />
      </div>

      {/* Room Details */}
      <div className="room-details">
        <motion.div
          ref={ref1}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h3>🌅 Balcony with Scenic View</h3>
          <p>
            Relax on your private balcony with breathtaking views of the Yamuna
            River.
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>🌊 Serene Yamuna View</h3>
          <p>
            Wake up to the calm and refreshing sights of the flowing Yamuna,
            right from your room.
          </p>
        </motion.div>

        <motion.div
          ref={ref3}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>🍃 Fresh Air & Tranquility</h3>
          <p>
            Enjoy peaceful mornings with fresh air, natural beauty, and a
            soothing atmosphere.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Room2;
