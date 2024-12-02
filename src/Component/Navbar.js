import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mainlayout from "./Layout/Mainlayout";

function BasicExample() {
  return (
    <Mainlayout>
      <Navbar expand="lg" className="bg-dark fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="text-white fs-3 fw-bold">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio" className="text-white back active">PORTFOLIO</Nav.Link>
              <Nav.Link href="#about" className="text-white back">ABOUT</Nav.Link>
              <Nav.Link href="#contac" className="text-white back">CONTACT</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Mainlayout>
    // <>
    //   <div className="">
    //     <nav id="navbar-example2" className="navbar navbar-light bg-dark ">
    //       <Container>
    //         <a className="navbar-brand text-white fw-bold fs-1" href="#">BOOTSTRAP</a>
    //         <ul className="nav nav-pills ms-auto ">
    //           <li className="nav-item">
    //             <a className="nav-link" href="#fat">PORTFOLIO</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#mdo">ABOUT</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#mdo">CONTACT</a>
    //           </li>

    //         </ul>
    //       </Container>
    //     </nav>
    //   </div>
    //   <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
    //     <h4 id="fat"></h4>

    //     <h4 id="mdo"></h4>

    //     <h4 id="one"></h4>

    //     <h4 id="two"></h4>

    //     <h4 id="three"></h4>

    //   </div>
    // </>
  );
}

export default BasicExample;