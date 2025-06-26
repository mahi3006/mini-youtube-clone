import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </Router>
  );
}

export default App;






