import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LockFill } from "react-bootstrap-icons";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Login.css";
function Login() {
  const targetDate = new Date("December 19, 2024 00:00:00");
  return (
    <div className="login">
      <CountdownTimer milliseconds={targetDate} />
      <LockFill id="lock" />
      <Form id="form-label">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            data-bs-theme="dark"
            type="name"
            placeholder="Enter Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="outline-danger" type="submit" href="/home">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
