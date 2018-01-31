import React from 'react';
import { Col, Row, Grid, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="main main-home-page">
        <section className="module home-page-header" id="home">
          <div className="container">
            <Grid>
              <Row className="home-title-box">
                <Col md={2} mdOffset={1} sm={6}>
                  <Image src="img/home/network.png" responsive className="img-center" />
                </Col>
                <Col md={8} sm={6}>
                  <div className="home-title font-alt">A PEER-TO-PEER LENDING COMMUNITY,<br />EMPOWERING BORROWERS AND<br />REWARDING LENDERS</div>
                </Col>
              </Row>
              <Row>
                <div className="layout">
                  <div className="centre">
                    <Image src="img/logo.png" className="img-center" responsive />
                  </div>
                </div>
              </Row>
              <Row>
                <Col sm={2} smOffset={2}>
                  <div className="callout-btn-box">
                    <li>
                      <Link className="btn btn-round-30 btn-warning" to="/karma">
                        <h4>Karma</h4>
                        <p className="NoTransform">for Borrowers</p>
                      </Link>
                    </li>
                  </div>
                </Col>
                <Col sm={2} smOffset={4}>
                  <div className="callout-btn-box">
                    <li>
                      <Link className="btn btn-round-30 btn-warning" to="/dharma">
                        <h4>Dharma</h4>
                        <p className="NoTransform">for Lenders</p>
                      </Link>
                    </li>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <Grid>
              <Row>
                <h2 className="home-box-text">Why become part of the KARMA community ?</h2>
              </Row>
              <Row className="multi-columns-row">
                <Col md={4} sm={6} xs={12}>
                  <div className="home-features">
                    <div className="features-icon"><span className="icon-lightbulb" /></div>
                    <h3 className="home-features-title font-alt">No Hidden Fees</h3>
                    <hr />
                    <p className="para">Transperency is our policy. What you see is what you get.</p>
                    <br />
                    <br />
                    <Image src="img/home/search.png" className="img-center icon-big" responsive />
                  </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <div className="home-features">
                    <div className="features-icon"><span className="icon-bike" /></div>
                    <h3 className="home-features-title font-alt">Simple and Safe</h3>
                    <hr />
                    <p className="para">Life is complicated enough,<br />Paying bills shouldn't be.<br />Our system is simple to use and host military grade encryption is as safe as it can get.</p>
                    <Image src="img/home/safe.png" className="img-center icon-big" responsive />
                  </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <div className="home-features">
                    <div className="features-icon"><span className="icon-tools" /></div>
                    <h3 className="home-features-title font-alt">Be part of something Big</h3>
                    <hr />
                    <p className="para">The KARMA Community is revolutionizing the way we see and use finance, you can be a member and help others while getting rewarded for it.</p>
                    <Image src="img/home/group.png" className="img-center icon-big" responsive />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <hr />
        <section className="module" id="team">
          <div className="container">
            <Grid>
              <Row>
                <Col sm={12}>
                  <h3 className="home-box-text">The KARMA community, connecting borrowers & lenders</h3>
                </Col>
              </Row>
              <Row>
                <div className="layout">
                  <div className="centre">
                    <Image src="img/logo.png" className="img-center" responsive />
                  </div>
                  <p className="logo--para">K A R M A</p>
                  <br />
                  <br />
                </div>
              </Row>
              <Row>
                <div className="layout">
                  <Image src="img/home/visual-network.png" className="img-center" responsive />
                </div>
              </Row>
              <Row>
                <Col sm={12}>
                  <br />
                  <h5 className="home-box-text">KARMA empowers borrowers to take control of their future, <br />based on their actions in the KARMA community.</h5>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default Home;


/*
<Row className="home-title-box">
                <Col md={2} mdOffset={1} sm={6}>
                  <Image src="img/home/network.png" responsive />
                </Col>
                <Col md={8} sm={6}>
                  <div className="home-title font-alt">A PEER-TO-PEER LENDING COMMUNITY,<br />EMPOWERING BORROWERS AND<br />REWARDING LENDERS</div>
                </Col>
              </Row>
 */
