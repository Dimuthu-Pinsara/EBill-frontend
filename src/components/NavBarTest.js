import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function NavBarTest() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><Link to="/" className='text-decoration-none text-black'>Electricty Bill Reading</Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <a className=''><Link to="/login">Login</Link></a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
