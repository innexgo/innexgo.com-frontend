import React from 'react';

import { Navbar, Nav } from 'react-bootstrap'

function Footer() {

  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Nav.Link href="/#home">&copy; Innexgo LLC, 2021</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/terms_of_service#cookie_policy">Cookie Policy</Nav.Link>
        <Nav.Link href="/terms_of_service#privacy_policy">Privacy Policy</Nav.Link>
        <Nav.Link href="/terms_of_service">Terms of Service</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;