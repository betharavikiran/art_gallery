import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from './data';

import './Team.scss';
import PropTypes from 'prop-types';


const Team = () => (
  <section className="team-page">
    <div className="container">
      <div className="titan-caption">
        <div className="caption-content team-content">
          <Grid>
            <Row>
              <Col sm={6} smOffset={3} >
                <h2 className="artistic-title">Meet Our Team</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </Col>
            </Row>
            <Row>
              <h4 className="module-subtitle font-alt team-group">Advisors</h4>
            </Row>
            <Row>
              <div className="team-members">
                {data.advisors.map(tm => (
                  <TeamMemberEntry key={tm.profileSlug} {...tm} />
                    ))}
              </div>
            </Row>
            <Row>
              <h4 className="module-subtitle font-alt team-group">Core Team</h4>
            </Row>
            <Row>
              <div className="team-members">
                {data.artists.map(tm => (
                  <TeamMemberEntry key={tm.profileSlug} {...tm} />
                ))}
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  </section>
);

function getUrlForSlug(profileSlug) {
  return `/member-detail/${profileSlug}`;
}

const TeamMemberEntry = ({
  profileSlug, displayName, jobDescription, pictureUrl, salutation, message, facebookUsername, twitterUserName, linkedinUserName,
}) => (
  <div className="mb-sm-20 col-sm-6 col-md-3">
    <div className="team-item1">
      <div className="team-image"><Image src={pictureUrl} circle responsive className="img-center" />
      </div>
      <div className="team-descr font-alt">
        <div className="team-name">{displayName}</div>
        <div className="team-role">{jobDescription}</div>
      </div>
      <Link className="btn btn-round-30 btn-warning" to={getUrlForSlug(profileSlug)}>Profile</Link>
    </div>
  </div>
);


TeamMemberEntry.propTypes = {
  displayName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string,
  pictureUrl: PropTypes.string.isRequired,
  salutation: PropTypes.string,
  message: PropTypes.string,
  profileSlug: PropTypes.string.isRequired,
  facebookUsername: PropTypes.string,
  twitterUserName: PropTypes.string,
  linkedinUserName: PropTypes.string,
};

TeamMemberEntry.defaultProps = {
  jobDescription: '',
  salutation: 'Hi Every One',
  message: 'Very nice to meet you',
  facebookUsername: '',
  twitterUserName: '',
  linkedinUserName: '',
};

export default Team;
