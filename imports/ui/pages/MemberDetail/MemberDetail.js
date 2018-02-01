import React from 'react';
import { Grid, Row, Col, Image, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import data from './data';

import './MemberDetail.scss';

function getProfileData(profileSlug) {
  return data.find(k => k.profileSlug === profileSlug);
}


class MemberDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    const profileSlug = props.match.params._id;

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key: 1,
      profileSlug,
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  renderExperience(experience) {
    return (
      <div>
        <Grid>
          <Row className="member-detail-header" >
            <Col md={2} sm={2} xs={2}>Role</Col>
            <Col md={2} sm={2} xs={2}>Company</Col>
            <Col md={3} sm={3} xs={3}>Duration</Col>
            <Col md={3} sm={3} xs={3}>Activities</Col>
          </Row>
          {experience.map(tm => (
            <Row key={tm.role + tm.duration} className="member-detail-record">
              <Col md={2} sm={2} xs={2}>{tm.role}</Col>
              <Col md={2} sm={2} xs={2}>{tm.company}</Col>
              <Col md={3} sm={3} xs={3}>{tm.duration}</Col>
              <Col md={3} sm={3} xs={3}>{tm.activities}</Col>
            </Row>

      ))}
        </Grid>
      </div>
    );
  }

  renderEducation(education) {
    return (
      <div>
        <Grid>
          <div className="member-detail-header">
            <Row>
              <Col md={2}>Level</Col>
              <Col md={2}>Institution</Col>
              <Col md={8}>Year of Completion</Col>
            </Row>
          </div>
          {education.map(tm => (
            <div key={tm.level} className="member-detail-record">
              <Row>
                <Col md={2}>{tm.level}</Col>
                <Col md={2}>{tm.institution}</Col>
                <Col md={8}> {tm.year}</Col>
              </Row>
            </div>
              ))}
        </Grid>
      </div>
    );
  }

  renderSkills(skills) {
    return (
      <div>
        <Grid>
          <div className="member-detail-header">
            <Row >
              <Col md={4}>Skill</Col>
              <Col md={8}>Years of experience</Col>
            </Row>
          </div>
          {skills.map(tm => (
            <div key={tm.name} className="member-detail-record">
              <Row>
                <Col md={4}>{tm.name}</Col>
                <Col md={8}>{tm.experience}</Col>
              </Row>
            </div>
              ))}
        </Grid>
      </div>
    );
  }

  render() {
    const profileData = getProfileData(this.state.profileSlug);

    return (
      <section className="member-detail-page">
        <div className="container">
          <div className="titan-caption">
            <div className="caption-content team-content">
              <Grid>
                <Row>
                  <Col sm={10} smOffset={1} >
                    <div className="col-sm-3 mb-sm-40">
                      <Image src={profileData.pictureUrl} responsive />
                    </div>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-12">
                          <h1 className="module-title font-alt">{profileData.displayName} <small>{profileData.role}</small></h1>
                          <div className="description">
                            <p>{profileData.introduction}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <h4>Profile </h4>
                  <Col sm={10} smOffset={1} >
                    <Tabs
                      activeKey={this.state.key}
                      onSelect={this.handleSelect}
                      id="member-details"
                      className="custom-tabs"
                    >
                      <Tab eventKey={1} title="Experience" className="custom-tab">
                        {this.renderExperience(profileData.experience)}
                      </Tab>
                      <Tab eventKey={2} title="Education">
                        {this.renderEducation(profileData.education)}
                      </Tab>
                      <Tab eventKey={3} title="Skills">
                        {this.renderSkills(profileData.skills)}
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs={2} md={2} sm={2} xsOffset={10} mdOffset={10} smOffset={10}>
                    <Link className="btn btn-round-30 btn-warning" to="/team">Back</Link>
                  </Col>
                </Row>
              </Grid>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

MemberDetail.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default MemberDetail;
