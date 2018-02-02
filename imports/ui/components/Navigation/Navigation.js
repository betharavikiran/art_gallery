import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';

import CloudinaryImage from '../CloudinaryImage/CloudinaryImage';

import './Navigation.scss';

const Navigation = props => (
  <Navbar className="navbar-custom navbar-fixed-top navbar-inverse" role="navigation">
    <div className="container">
      <Navbar.Header>
        <Navbar.Brand>
          <div>
            <Link to="/"><CloudinaryImage publicId="logo_avuglm" classNames="logo" /></Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse id="custom-collapse">
        {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
      </Navbar.Collapse>
    </div>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
