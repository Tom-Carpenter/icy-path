import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { SocialIcon } from 'react-social-icons';
import '../css/footer.css';
class Footer extends Component {
  render() {   
    return (
    <Navbar fixed="bottom" bg="dark" variant="dark" >
    <Navbar.Toggle aria-controls="social-nav end-nav" />
    <Navbar.Collapse id="social-nav" className="justify-content-end">
    <Nav>
    <Nav.Item>
    <SocialIcon  url="https://mobile.twitter.com/Poggers69078986" target="__blank__"/>
    </Nav.Item>
    </Nav>
    </Navbar.Collapse>
  <Navbar.Collapse id="end-nav" className="justify-content-end">
    <Navbar.Text>
      ~ Icy Path
    </Navbar.Text>
  </Navbar.Collapse>
  
        </Navbar>
    );
  }
}
 
export default Footer;