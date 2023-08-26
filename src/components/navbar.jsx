
import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./nav.css";
import Modal from "react-bootstrap/Modal";
import { map } from "./Map.js";
import Intro from "./homeIntro.jsx";
import Register from "./register.jsx";
import { Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import LogStudent from "./logstudent";
import LogAdmin from "./logadmin";
import LogSuperAdmin from "./logsuperadmin";
import CardImage from "./Card";
import RegisterStudent from "./registerStudent";
import RegisterAdmin from "./registerAdmin";
import RegisterSuper from "./registerSuper";
import StudentPage from "./studentPage";

function NavBar() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="" className="bg-body-secondary navbar">
        <Container>
          <img className="navimg" src={require("./bitsindrilogo.jpg")} />
          <Navbar.Brand id="brand">
            BIT Hostels
          </Navbar.Brand>
          {!localStorage.getItem("token") ? (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto nav">
                  {/* <Nav.Link className='btn btn-outline-dark navitem'><Link className='navitem' to ='/home'>Home</Link></Nav.Link> */}
                  {/* <Nav.Link className='btn btn-outline-dark navitem' ><Link className='navitem' to ='/register'>Register</Link></Nav.Link> */}
                  <Nav.Link className="btn btn-md btn-outline-dark  navitem">
                    <Link className="navitem" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn btn-md btn-outline-dark  navitem">
                    <Link className="navitem" to="/registerstudent">
                      Register as Student
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn btn-md btn-outline-dark  navitem">
                    <Link className="navitem" to="/registeradmin">
                      Register as Admin
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn btn-md btn-outline-dark  navitem">
                    <Link className="navitem" to="/registersuper">
                      Register as Super Admin
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn btn-md btn-outline-dark  navitem">
                    <Link className="navitem" to="/logstu">
                      Login as Student
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn  btn-outline-dark  navitem">
                    <Link className="navitem" to="/logadm">
                      Login as Admin
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="btn  btn-outline-dark  navitem">
                    <Link className="navitem" to="/logsupadm">
                      Login as Super Admin
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <div>
              <button
                onClick={handleLogout}
                className="btn bg-white text-success"
              >
                Logout
              </button>
            </div>
          )}
        </Container>
      </Navbar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/registerstudent" element={<RegisterStudent />} />
          <Route path="/registeradmin" element={<RegisterAdmin />} />
          <Route path="/registersuper" element={<RegisterSuper />} />
          <Route path="/logstu" element={<LogStudent />} />
          <Route path="/logadm" element={<LogAdmin />} />
          <Route path="/logsupadm" element={<LogSuperAdmin />} />
          <Route path="/studentpage" element={<StudentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;

// class NavBar extends Component {
// state = {  }

// map=()=>
// {

//       <div
//       className="modal show"
//       style={{ display: 'block', position: 'initial' }}
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>

// }

// render() {
//     return (
//       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">

//       <Container>
//       <img className='navimg' src={require("./bitsindrilogo.jpg")}/>
//        <Navbar.Brand href="#home" id='brand'>BIT Hostels</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto nav">
//             <Nav.Link className='btn btn-outline-dark navitem' onClick={this.map} href="#map">Map</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#register">Register</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logstu">Login as Student</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logadm">Logins as Admin</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logsupadm">Login as Super Admin</Nav.Link>

//           </Nav>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     );
// }
// }

// export default NavBar;
