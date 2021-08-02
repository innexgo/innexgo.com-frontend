import { Navbar, Nav } from 'react-bootstrap'
import InnexgoTransparentIcon from '../img/innexgo_transparent_icon.png';

function Footer() {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={InnexgoTransparentIcon}
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
            alt="Innexgo logo"
          />
          Innexgo
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">&copy; Innexgo LLC, 2021</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/terms_of_service#cookie_policy">Cookie Policy</Nav.Link>
          <Nav.Link href="/terms_of_service#privacy_policy">Privacy Policy</Nav.Link>
          <Nav.Link href="/terms_of_service">Terms of Service</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
