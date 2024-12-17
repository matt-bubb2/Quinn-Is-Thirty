import Table from "react-bootstrap/Table";
import "./Leaderboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Spinner from "react-bootstrap/Spinner";

function Leaderboard() {
  const [leaderboardChallenges, setLeaderboardChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("authed");
    console.log(cookie);
    if (cookie === "false") {
      navigate("/auth");
    }
    getData();
  }, []);
  const getData = async () => {
    const rawResponse = await fetch(
      import.meta.env.VITE_REACT_API + "/users/completed-challenges",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Referer: "quinn-is-thirty.com",
          "auth-token": import.meta.env.VITE_REACT_TOKEN,
        },
        mode: "cors",
      }
    );
    const content = await rawResponse.json();
    console.log(content);
    setLeaderboardChallenges(content);
  };

  return leaderboardChallenges.length > 1 ? (
    <div className="leaderboard-div">
      <Table data-bs-theme="dark" bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Challenges Complete</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardChallenges.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.challenges_completed}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  ) : (
    <Spinner
      animation="border"
      className="spinner"
      variant="light"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Leaderboard;
