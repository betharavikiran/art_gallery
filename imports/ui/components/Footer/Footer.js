import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { year } from '../../../modules/dates';

import './Footer.scss';

const copyrightYear = () => {
  const currentYear = year();
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="Footer">
    <Grid>
      <hr />
      <p className="pull-left">&copy; {copyrightYear()} ART GALLERY</p>
    </Grid>
  </div>
);

Footer.propTypes = {};

export default Footer;
