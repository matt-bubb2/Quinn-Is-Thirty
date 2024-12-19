import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Login from "./components/LogIn/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Challenges from "./components/Challenges/Challenges";
import Authenticate from "./components/Authenticate/Authenticate";
import Cookies from "js-cookie";
import { useEffect } from "react";
import ImageUpload from "./components/ImageUpload/ImageUpload";

function App() {
  let cookie;
  useEffect(() => {
    cookie = Cookies.get("authed");
    console.log(cookie);
  }, []);
  return (
    <Router>
      {window.location.pathname === "/" ||
      window.location.pathname === "/auth" ||
      Cookies.get("authed") === "false" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" render element={<Login />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/pics" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
