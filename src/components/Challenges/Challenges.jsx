import Table from "react-bootstrap/Table";
import "./Challenges.css";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import Cookies from "js-cookie";
import ImageUpload from "../ImageUpload/ImageUpload";
function Accordian() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [show, setShow] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);

  const handleClose = () => setShow(false);
  const handlePictureModalClose = () => setShowPictureModal(false);
  const fileInputRef = useRef(null);

  const handleClearInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Use the react-image-file-resizer to resize the image
      Resizer.imageFileResizer(
        file, // The file to resize
        800, // Max width (resize the image to this width)
        800, // Max height (resize the image to this height)
        "JPEG", // Image format (PNG/JPEG)
        80, // Quality (0-100)
        0, // Rotation (0-360)
        (uri) => {
          // The resized image is returned as a data URI
          setSelectedImage(uri);
        },
        "base64" // The type of response (base64, file, blob)
      );
    }
  };
  const [textDance, setTextDance] = useState(false);
  const [challengeDetails, setChallengeDetails] = useState({
    challengeId: "",
    challengeName: "",
    score: 0,
    details: "",
  });
  const handleAnimation = () => {
    setTimeout(() => {
      setTextDance(false);
    }, "2000");
  };
  const handleModalShow = (id, name, score, details, type = "generic") => {
    if (type === "picture") {
      setShowPictureModal(true);
    } else {
      setShow(true);
    }
    setChallengeDetails({
      challengeId: id,
      challengeName: name,
      details: details,
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
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const submitPicture = async () => {
    setIsSubmitting(true);
    // convertToBase64(selectedImage).then(async (base64String) => {
    //   // Do something with the base64 string
    //   const rawResponse = await fetch(
    //     import.meta.env.VITE_REACT_API + "/pictures",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Referer: "quinn-is-thirty.com",
    //         "auth-token": import.meta.env.VITE_REACT_TOKEN,
    //       },
    //       mode: "cors",
    //       body: JSON.stringify({
    //         picturePreview: base64String,
    //       }),
    //     }
    //   );
    //   const content = await rawResponse.json();
    //   console.log(content);
    //   const submit = await submitChallenge();
    //   setIsSubmitting(false);
    //   handlePictureModalClose();
    // });
    const rawResponse = await fetch(
      import.meta.env.VITE_REACT_API + "/pictures",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Referer: "quinn-is-thirty.com",
          "auth-token": import.meta.env.VITE_REACT_TOKEN,
        },
        mode: "cors",
        body: JSON.stringify({
          picturePreview: selectedImage,
        }),
      }
    );
    const content = await rawResponse.json();
    console.log(content);
    const submit = await submitChallenge();
    setIsSubmitting(false);
    handlePictureModalClose();
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
                      handleModalShow(
                        "01",
                        "Video-Message-Quinn",
                        "10",
                        "Please send to Cass: 484-942-4222"
                      );
                      handleAnimation();
                    }}
                  >
                    Send Cass a Video Message Wishing Quinn Happy Birthday
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "02",
                        "Submit-Picutre",
                        "5",
                        "",
                        "picture"
                      );
                      handleAnimation();
                    }}
                  >
                    Submit Your Favorite Picture with Quinn
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "02",
                        "Maill-Card-Quinn",
                        "5",
                        `Please send to Quinn: 326b 4th Ave, Phoenixville, PA 19460`
                      );
                      handleAnimation();
                    }}
                  >
                    Mail Quinn a Birthday Card
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("01", "Get-Book-Quinn", "5");
                      handleAnimation();
                    }}
                  >
                    Get one of Quinn's Favorite Books from Reads and Co. Books
                    Display
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "03",
                        "Buy-Drink-Quinn",
                        "5",
                        "Please Venmo @cassneuman"
                      );
                      handleAnimation();
                    }}
                  >
                    Sponsor a birthday drink For Quinn
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("04", "Movies-With-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Make Plans with Quinn To Go To the Movies
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("05", "Summer-Trip-With-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Make Plans with Quinn for a Summer Tube Trip
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("06", "Hike-With-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Make Plans with Quinn for a Hike in Valley Forge
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("07", "Picture-With-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Take a picture with Quinn
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("08", "Hug-Quinn", "5");
                      handleAnimation();
                    }}
                  >
                    Give Quinn a Hug
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "09",
                        "Favorite-Memory-Quinn",
                        "10",
                        "Text Cass your memory: 484-942-4222"
                      );
                      handleAnimation();
                    }}
                  >
                    Submit Your Favorite Memory of Quinn
                  </td>
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
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "11",
                        "Text-Quinn",
                        "5",
                        "Text Quinn: 484-942-4221"
                      );
                      handleAnimation();
                    }}
                  >
                    Text Quinn HBD!
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "12",
                        "Call-Quinn",
                        "5",
                        "Call Quinn: 484-942-4221"
                      );
                      handleAnimation();
                    }}
                  >
                    Call Quinn and say HBD!
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("13", "Balloon-Quinn", "20");
                      handleAnimation();
                    }}
                  >
                    Tie a balloon on Quinn's Car
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("14", "Cupcake-Quinn", "20");
                      handleAnimation();
                    }}
                  >
                    Bring Quinn cupcake
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "15",
                        "IG-Quinn",
                        "5",
                        "Quinn IG: @highlordquinn"
                      );
                      handleAnimation();
                    }}
                  >
                    Send Quinn an IG Birthday Wish
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "16",
                        "Wawa-Quinn",
                        "15",
                        `Please bring to Quinn: 326b 4th Ave, Phoenixville, PA 19460`
                      );
                      handleAnimation();
                    }}
                  >
                    Send/Bring Quinn a Wawa Birthday Lunch
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Send/Bring Quinn SokoBag Dinner</td>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "17",
                        "SOKO-Bag-Quinn",
                        "15",
                        `Please bring to Quinn: 326b 4th Ave, Phoenixville, PA 19460`
                      );
                      handleAnimation();
                    }}
                  >
                    15
                  </td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("18", "Karaoke-Quinn", "20");
                      handleAnimation();
                    }}
                  >
                    Sing Karaoke at Molly Maguires
                  </td>
                  <td>20</td>
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
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("19", "Tuxedo-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Wear a Quinn Tuxedo to P-Ville
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("20", "Say-HBD-Quinn", "5");
                      handleAnimation();
                    }}
                  >
                    Say HBD to Quinn
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("21", "Sig-Drink-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Join Quinn @ Bluebird at 7pm for a Signature Drink
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("22", "Cake-With-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Join Quinn for Cake at The Fungeon at 8:30
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("23", "Trivia-Quinn", "15");
                      handleAnimation();
                    }}
                  >
                    Join Quinn at Rebel Hill for Trivia at 10pm
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow("24", "Mollys-Quinn", "10");
                      handleAnimation();
                    }}
                  >
                    Joing Quinn at Molly Maguires at 11pm
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "25",
                        "Birthday-Challenger-Suprise-Quinn",
                        "10"
                      );
                      handleAnimation();
                    }}
                  >
                    Collect your 'Birthday Challenger' suprise
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "26",
                        "DD-Quinn",
                        "20",
                        "If Uber: Please Venmo @cassneuman"
                      );
                      handleAnimation();
                    }}
                  >
                    Sponsor Quinn's Late Night Ride home
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "27",
                        "Late-Food-Quinn",
                        "15",
                        "Please Venmo @cassneuman"
                      );
                      handleAnimation();
                    }}
                  >
                    Send/Get Quinn Late Night Bites
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "27",
                        "Saturday-Bfast-Quinn",
                        "15",
                        "Please Venmo @cassneuman"
                      );
                      handleAnimation();
                    }}
                  >
                    Sponsor Quinn's Saturday Morning Breakfast
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td
                    className="fit-content"
                    onClick={() => {
                      handleModalShow(
                        "18",
                        "Clean-Car-Quinn",
                        "10",
                        "Please Venmo @cassneuman"
                      );
                      handleAnimation();
                    }}
                  >
                    Sponsor Quinn's Car Cleaning
                  </td>
                  <td>10</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Modal
        className="generic-modal"
        data-bs-theme="light"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Challenge Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          "{challengeDetails.challengeName}" earns you {challengeDetails.score}{" "}
          points
          <p className="modal-body">{challengeDetails.details}</p>
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
      <Modal
        className="generic-modal"
        data-bs-theme="light"
        show={showPictureModal}
        onHide={handlePictureModalClose}
      >
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
          <div className="con">
            {/* Conditionally render the selected image if it exists */}
            {selectedImage && (
              <div className="con">
                {/* Display the selected image */}
                <img alt="not found" width={"250px"} src={selectedImage} />
                <br /> <br />
                {/* Button to remove the selected image */}
                <Button
                  variant="secondary"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </Button>
              </div>
            )}

            <br />
            <input
              ref={fileInputRef}
              className="input-pics"
              type="file"
              name="myImage"
              onChange={handleImageChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePictureModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={submitPicture}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp;Submitting...(Please be patient for this one)
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
