import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout = () => {
  return (
    <div>
      <Navbar className="navbar fixed-top" expand="lg">
      <Container fluid>
        <Navbar.Brand><NavLink className="text-decoration-none navlink logo" to="/Landpage">CodeWithTech</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link><NavLink className="text-decoration-none navlink ancerTag" to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-decoration-none navlink ancerTag" to="/About">About</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-decoration-none navlink ancerTag" to="/Services">Services</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-decoration-none navlink ancerTag" to="/Contact">Contact</NavLink></Nav.Link>
          </Nav>
          <Nav.Link href="https://www.facebook.com/asiruddin.sk.96930" target="_blank"><i className="fa fa-facebook"></i></Nav.Link>
          <Nav.Link href="https://www.youtube.com/@codewithtech/featured" target="_blank"><i className="fa fa-youtube"></i></Nav.Link>
          <Nav.Link href="https://twitter.com/ASIRUDD50316338" target="_blank"><i className="fa fa-twitter"></i></Nav.Link>
          <Nav.Link href="#"> <NavLink className="text-decoration-none navlink ancerTag" to="/Login">Login</NavLink></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet />
    </div>
  )
};



export default Layout;