import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

// Todo check if nav item can still be used
const PublicNavigation = () => (
  <div>
    <Nav pullLeft>
      <LinkContainer to="/">
        <li><Link to="/">Home</Link></li>
      </LinkContainer>
      <LinkContainer to="/about">
        <li><Link to="/about">About</Link></li>
      </LinkContainer>
      <LinkContainer to="/team">
        <li><Link to="/team">Team</Link></li>
      </LinkContainer>
      <LinkContainer to="/contactus">
        <li><Link to="/contactus">Contact Us</Link></li>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/signup">
        <li><Link to="/signup">Sign Up</Link></li>
      </LinkContainer>
      <LinkContainer to="/login">
        <li><Link to="/login">Log In</Link></li>
      </LinkContainer>
    </Nav>
  </div>
);

export default PublicNavigation;

