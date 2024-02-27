import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPlayer from "./players/AddPlayer";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/addplayer" element={<AddPlayer />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

