import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar.css";
import logo from "../Assets/logo.png";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";

function Navbar1() {
  const [showDropdown, setShowDropdown] = useState(null);
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 ">
            <Nav.Link href="#home" className="nav-text fs-6">
              Welcome
            </Nav.Link>
            <NavDropdown
              href="#link"
              className="nav-text"
              title="Stores"
              id="basic-nav-dropdown"
              show={showDropdown === "stores"}
              onMouseEnter={() => setShowDropdown("stores")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="nav-text"
              show={showDropdown === "categories"}
              onMouseEnter={() => setShowDropdown("categories")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="ms-auto">
            <div className="position-relative me-auto">
              <Form.Control
                type="text"
                placeholder="Search for stores"
                className=" mr-sm-2"
              />
              <IoSearchOutline className="position-absolute" style={{right:"20px", top:"50%", transform: "translateY(-50%)", fontWeight:"800", fontSize:"20px"}} />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
