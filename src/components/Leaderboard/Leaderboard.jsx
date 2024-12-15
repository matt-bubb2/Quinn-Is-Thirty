import Table from "react-bootstrap/Table";
import "./Leaderboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

function Leaderboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("authed");
    console.log(cookie);
    if (cookie === "false") {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="leaderboard-div">
      <Table data-bs-theme="dark" bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Challenges Complete</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matt Bubb</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Cassidy Neuman</td>
            <td>5</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Leaderboard;
