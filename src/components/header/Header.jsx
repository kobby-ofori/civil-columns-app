import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";
import "./Header.css";

function BasicExample() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary custom-nav">
      <Container>
        <Navbar.Brand>Columns</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="home" span={true} smooth={true}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="service" span={true} smooth={true}>
                Service
              </Link>
            </Nav.Link>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="reviews" span={true} smooth={true}>
                  Reviews
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="comments" span={true} smooth={true}>
                  Comments
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
