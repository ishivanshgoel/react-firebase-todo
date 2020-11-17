import React from 'react'
import { Navbar,
    Nav,
    NavDropdown } from 'react-bootstrap';
const userName="Shivansh";
function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Your Notes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link eventKey={2} href="#">
                        Welcome {userName}
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#">
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;