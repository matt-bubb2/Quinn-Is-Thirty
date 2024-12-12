import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Footer() {
    return (
        <>
            <Navbar expand="sm" fixed='bottom'  className="bg-body-tertiary justify-content-center">
                <Container>
                    <Navbar.Brand href="#home">Matt Bubb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">About Me</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}