import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPlayer from "./players/AddPlayer";
import EditPlayer from "./players/EditPlayer";
import ViewPlayer from "./players/ViewPlayer";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/addplayer" element={<AddPlayer />} />
              <Route exact path="/editplayer/:id" element={<EditPlayer />} />
              <Route exact path="/viewplayer/:id" element={<ViewPlayer />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

