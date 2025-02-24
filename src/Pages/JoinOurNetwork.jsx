import "../styles/JoinOurNetwork.css";
import Globe3D from "../components/Globe3D"; // Import the 3D globe


const JoinOurNetwork = () => {
  return (
    <div>
    <div className="join-container">
      <h1 className="join-heading">We Are Worldwide 🌍</h1>
      <div className="globe-wrapper">
        <Globe3D />
      </div>
    </div>
    </div>
  );
};

export default JoinOurNetwork;
