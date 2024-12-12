import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LockFill } from 'react-bootstrap-icons';
import './Login.css'
function Login() {
    return (
        <div className="login">
            <LockFill id='lock' />
            <Form id="form-label">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="outline-danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;