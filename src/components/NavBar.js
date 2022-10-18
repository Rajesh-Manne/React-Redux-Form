import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
const NavBar = () => {
  return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
            {/* <Link to="/"> */}
            <Link to="/">
              <Navbar.Brand >
       
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                
                React Redux
              </Navbar.Brand>
              </Link>
              {/* </Link> */}
          
            </Container>
          </Navbar>
        </>
      );
    }
    



export default NavBar