import Button from "react-bootstrap/esm/Button";
import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("authed");
    console.log(cookie);
    if (cookie === "false") {
      navigate("/auth");
    }
  }, []);
  const NAME = "API NAME";
  return (
    <div className="ps">
      <div className="p font-color">
        For Quinn's 30th birthday we are doing 30 things for Quinn's 30th. Each
        person can earn points by completing some or all of the 30 challenges.
      </div>
      <div className="p font-color">
        Challenges start on Quinn's birthday 12/19. Some challenges are in
        person, some are challenges that can be completed from afar and some are
        birthday gestures.
      </div>
      <div className="p font-color">
        You can navigate to the challenges tab to view and complete challenges.
        The leaderboard will track our leaders and our photo gallery will be a
        celebration of Quinn!
      </div>
      <div className="p bottom-p font-color">
        Tune in 12/19 to start challenges! &emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
    </div>
  );
}

export default Home;
