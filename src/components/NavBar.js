import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {FaHome} from 'react-icons/fa';
import '../App.css';
import penguin from './images/adult_penguin.png';

class NavBar extends Component {
  render() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home"> <FaHome /> </Navbar.Brand>
        <Nav.Link key="home" href="/home" className='nav-link'> About us
        </Nav.Link>
        <Nav.Link key="blog" href="/blogs" className='nav-link'> Blogs
        </Nav.Link>
        <Nav.Link key="blog" href="/contactus" className='nav-link'> Contact us
        </Nav.Link>
          <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Navbar.Brand href="#home">
      <img
        alt=""
        src={penguin}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Navbar.Text>
      Icy-Path
    </Navbar.Text>
  </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
 
export default NavBar;