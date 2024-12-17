import Table from "react-bootstrap/Table";
import "./Challenges.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Accordian() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [textDance, setTextDance] = useState(true);
  const [challengeDetails, setChallengeDetails] = useState({
    challengeId: "",
    challengeName: "",
    score: 0,
  });
  const handleAnimation = () => {
    setTimeout(() => {
      setTextDance(false);
    }, "2000");
  };
  const handleModalShow = (id, name, score) => {
    setShow(true);
    setChallengeDetails({
      challengeId: id,
      challengeName: name,
      score: score,
    });
  };
  const submitChallenge = async () => {
    setIsSubmitting(true);
    const rawResponse = await fetch(
      import.meta.env.VITE_REACT_API + "/users/challenge",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: "quinn-is-thirty.com",
          "auth-token": import.meta.env.VITE_REACT_TOKEN,
        },
        mode: "cors",
        body: JSON.stringify({
          name: window.localStorage.getItem("userName"),
          challengeId: challengeDetails.challengeId,
          challengeName: challengeDetails.challengeName,
          score: challengeDetails.score,
        }),
      }
    );
    const content = await rawResponse.json();
    console.log(content);
    setIsSubmitting(false);
    handleClose();
  };

  return (
    <>
      <Accordion data-bs-theme="dark" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Anytime Challenges</Accordion.Header>
          <Accordion.Body>
            <Table data-bs-theme="dark" bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("01", "Video-Message-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Video Message Wishing Quinn Happy Birthday
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("02", "Submit-Picutre", "10");
                      handleAnimation();
                    }}
                  >
                    Submit Your Favorite Picture with Quinn
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Mail Quinn a Birthday Card</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    Get one of Quinn's Favorite Books from Reads and Co. Books
                    Display
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Sponsor a birthday Drink For Quinn</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Make Plans with Quinn To Go To the Movies</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Make Plans with Quinn for a Summer Tube Trip</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Make Plans with Quinn for a Hike in Valley Forge</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Take a picture with Quinn</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Give Quinn a Hug</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Submit Your Favorite Memory of Quinn</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Code a Website For Quinn</td>
                  <td>10000</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Thursday Challenges</Accordion.Header>
          <Accordion.Body>
            <Table data-bs-theme="dark" bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Text Quinn HBD!</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Call Quinn and say HBD!</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Tie a balloon on Quinn's Car</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Bring Quinn cupcake</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Send Quinn an IG Birthday Wish</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Send/Bring Quinn a Wawa Birthday Lunch</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Send/Bring Quinn SokoBag Dinner</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Sing Karaoke at Molly Maguires</td>
                  <td>10</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Friday Challenges</Accordion.Header>
          <Accordion.Body>
            <Table data-bs-theme="dark" bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wear a Quinn Tuxedo to P-Ville</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Say HBD to Quinn</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Join Quinn @ Bluebird at 7pm for a Signature Drink</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Join Quinn for Cake at The Fungeon at 8:30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Join Quinn at Rebel Hill for Trivia at 10pm</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Joing Quinn at Molly Maguires at 11pm</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Collect your 'Birthday Challenger' suprise</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Sponsor Quinn's Late Night Ride home</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Send/Get Quinn Late Night Bites</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Sponsor Quinn's Saturday Morning Breakfast</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Sponsor Quinn's Car Cleaning</td>
                  <td>10</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Modal data-bs-theme="light" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Challenge Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          "{challengeDetails.challengeName}" earns you{" "}
          {textDance ? (
            <p className="dancing-text"> {challengeDetails.score} </p>
          ) : (
            challengeDetails.score
          )}{" "}
          points
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={submitChallenge}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp;Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Challenges() {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("authed");
    console.log(cookie);
    if (cookie === "false") {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="leaderboard-div ">
      <h1 className="align-self font-color">Challenges</h1>
      <div className="font-color challegne-desc">
        <div className="p">
          These are the list of Challenges. Once complete, tap on the challenge
          row to submit your challenge
        </div>
      </div>
      <Accordian />
    </div>
  );
}

export default Challenges;
