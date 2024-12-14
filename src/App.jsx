import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Login from "./components/LogIn/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Leaderboard from "./components/Leaderboard/Leaderboard";
function App() {
  return (
    <Router>
      {window.location.pathname === "/" ? null : <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
