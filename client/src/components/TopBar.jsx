import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const TopBar = () => {
  return (
    <>
        <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
            <Container fluid>
                <h6 className='text-light'><span className="text-warning">Santanu</span>Saikia</h6>
                <Nav className='ms-auto'>
                    <LinkContainer to='/' activeClassName>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/about' activeClassName>
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact' activeClassName>
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/policy' activeClassName>
                        <Nav.Link>T&C</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default TopBar