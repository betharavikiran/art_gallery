import React from 'react';
import { Grid, Row, Col, Tab, Tabs, Well } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import data from './data';
import CloudinaryImage from '../../components/CloudinaryImage/CloudinaryImage';

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
      <div className="member-detail-panel" >
        {experience.map(tm => (
          <div key={tm.role} className="member-detail-record">
            <div><strong>Role  </strong>{tm.role} </div>
            <div><strong>Company  </strong> {tm.company}</div>
            <div><strong>Period  </strong> {tm.duration}</div>
            <div><strong>Activities  </strong> {tm.activities}</div>
          </div>
      ))}
      </div>
    );
  }

  renderEducation(education) {
    return (
      <div className="member-detail-panel">
        {education.map(tm => (
          <div key={tm.level} className="member-detail-record">
            <div><strong>Level  </strong>{tm.level} </div>
            <div><strong>Institution  </strong> {tm.institution}</div>
            <div><strong>Year of Completion  </strong> {tm.year}</div>
          </div>
              ))}
      </div>
    );
  }

  renderSkills(skills) {
    return (
      <div className="member-detail-panel">
        {skills.map(tm => (
          <div key={tm.name} className="member-detail-record">
            <div><strong>Skill  </strong>{tm.name} </div>
            <div><strong>Years of experience  </strong>{tm.experience} </div>
          </div>
              ))}
      </div>
    );
  }

  render() {
    const profileData = getProfileData(this.state.profileSlug);

    return (
      <section className="member-detail-page">
        <section className="module bg-dark-30">
          <div className="container">
            <Grid>
              <Row>
                <Col sm={10} smOffset={1} >
                  <div className="col-sm-3 mb-sm-40">
                    <CloudinaryImage publicId={profileData.publicID} />
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
              <Row>
                <Col sm={8} smOffset={2} >
                  <h2 className="module-subtitle font-alt">Profile </h2>
                </Col>
              </Row>
              <Row>
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
              <br />
              <Row>
                <Col xs={2} md={2} sm={2} xsOffset={8} mdOffset={8} smOffset={8}>
                  <Link className="btn btn-round-30 btn-warning" to="/team">Back</Link>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
      </section>
    );
  }
}

MemberDetail.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default MemberDetail;
