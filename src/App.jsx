import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStudios from "./pages/OurStudios";
import JoinOurNetwork from "./pages/JoinOurNetwork";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStudios" element={<OurStudios />} />
        <Route path="/join-our-network" element={<JoinOurNetwork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
