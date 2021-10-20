import React from 'react';
import { NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import Navbar from 'react-bootstrap/Navbar';
import  "./style.css";

export default function Header(props) {

  return (
    <div>
<Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    { props.Searchbarr? <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>: "No Search bar"}
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

Header.defaultProps={
    title: "This is Your Main Title",
    Searchbarr: true
}

Header.prototypes={
    title: propTypes.string,
    Searchbarr: propTypes.bool
}