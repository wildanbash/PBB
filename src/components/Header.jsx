import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        )
    }
}