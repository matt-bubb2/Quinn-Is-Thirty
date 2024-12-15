import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LockFill } from "react-bootstrap-icons";
import "./Authenticate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

function Authenticate() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (inputValue === "quinn3-0") {
      Cookies.set("authed", "true");
      navigate("/home");
    } else {
      Cookies.set("authed", "false");
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="login">
      <LockFill id="lock" />
      <Form id="form-label">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            data-bs-theme="dark"
            type="name"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Password"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button
          variant="outline-danger"
          type="submit"
          onClick={handleButtonClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Authenticate;
