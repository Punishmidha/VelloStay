import "../../styles/Rooms.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roomImg from "../../assets/room4.jpg";

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
          <h3>🍳 A Culinary Haven</h3>
          <p>
            Designed for convenience, our kitchen lets you whip up quick meals
            or savor a slow morning breakfast with ease.
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>🔥 Warm Comforts at Your Fingertips</h3>
          <p>
            Brew a fresh cup of tea with the electric kettle or prepare a cozy
            homemade dish using the built-in oven.
          </p>
        </motion.div>

        <motion.div
          ref={ref3}
          className="room-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>🧊 Fresh & Chilled, Anytime</h3>
          <p>
            Keep your favorite snacks, beverages, and essentials perfectly
            chilled in the thoughtfully placed mini fridge.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Room2;
