import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Cryptocurrency</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/new_plan'>
              <Nav.Link>Add Trade plan</Nav.Link>
            </LinkContainer>
            <NavDropdown title='Trade' id='offcanvasNavbarDropdown'>
              <LinkContainer to='/history'>
                <Nav.Link>Trade History</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/futures '>
                <Nav.Link>Futures Trading</Nav.Link>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
