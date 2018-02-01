import React from 'react';
import { Col, Row, Grid, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="main main-home-page">
        <section className="module home-page-header" id="home">
          <div className="container">
            <Grid>
              <Row>
                <Col md={6} mdOffset={3} sm={6} smOffset={3}>
                  <div className="artistic-title">ART GALLERY</div>
                  <h2 className="module-subtitle font-alt">ICO round finishes in</h2>
                  <CountdownTimer endDate={moment('06/12/2018')} />
                </Col>
              </Row>
              <Row className="home-title-box">
                <Col md={6} sm={6}>
                  <div className="home-title font-alt">THE DECENTRALIZED BLOCKCHAIN PLATFORM DISRUPTING ART WORK MARKETPLACE</div>
                </Col>
                <Col md={6} sm={6}>
                  <div className="callout-btn-box">
                    <a className="btn btn-warning btn-round black--text" href="https://ico.nexus.social/pdfs/legals/Nexus-White-Paper.pdf" >White Paper</a>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <section className="module">
          <div className="container">
            <h2 className="module-title font-alt">Decentralized Platform</h2>
            <Row>
              <Col sm={8} smOffset={2}>
                <hr className="divider-w mt-10 mb-20" />
                <Row className="multi-columns-row">
                  <Col sm={4} md={4} lg={4}>
                    <div className="features-item">
                      <i className="fa fa-paint-brush fa-5x" aria-hidden="true" />
                      <h3 className="features-title font-alt">Artist</h3>
                      <p>Creators of art are looking to showcase and sell their work. Thanks to the ART Gallery platform factors like size of artworks, space, location and time will no longer be an obstacle.</p>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="features-item">
                      <i className="fa fa-building fa-5x" aria-hidden="true" />
                      <h3 className="features-title font-alt">Gallery</h3>
                      <p>The digital world opens new possibilities where space and time are no longer an issue.</p>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="features-item">
                      <i className="fa fa-book fa-5x" aria-hidden="true" />
                      <h3 className="features-title font-alt">Curator</h3>
                      <p>Organizing and profiling of art is now accessible, creates value and brings profits with special curation-on-demand program.</p>
                    </div>
                  </Col>
                </Row>
                <Row className="multi-columns-row" />
                <Col sm={4} md={4} lg={4}>
                  <div className="features-item">
                    <i className="fa fa-list-alt fa-5x" aria-hidden="true" />
                    <h3 className="features-title font-alt">Collector</h3>
                    <p>Cross-border access to quality art is no longer a problem. Trading becomes a global investment opportunity.</p>
                  </div>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <div className="features-item">
                    <i className="fa fa-heart fa-5x" aria-hidden="true" />
                    <h3 className="features-title font-alt">Art Lover</h3>
                    <p>A visit to any exhibition is no longer bound to geographical or time limits.</p>
                  </div>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <div className="features-item">
                    <i className="fa fa-bank fa-5x" aria-hidden="true" />
                    <h3 className="features-title font-alt">Museum</h3>
                    <p>Creating virtual exhibitions opens new audiences and changes museums into global institutions.</p>
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
        </section>
        <hr />
        <section className="module" id="alt-features">
          <div className="container">
            <h2 className="module-title font-alt">Block Chain Technology</h2>
            <Row>
              <Col sm={6} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1} >
                <div className="features-item">
                  <i className="fa fa-certificate fa-5x" aria-hidden="true" />
                  <h3 className="features-title font-alt">Certification</h3>Preserving value of art needs traceability. Blockchain as a decentralised ledger enables certification, trust and security like never before..
                </div>
                <div className="features-item">
                  <i className="fa fa-exchange fa-5x" aria-hidden="true" />
                  <h3 className="features-title font-alt">Trading</h3>ArtCoins are used as a basic crypto currency in the trade of artworks in virtual galleries, on web sites as well as in brick and mortar galleries.
                </div>
              </Col>
              <Col smHidden md={2} lg={4}>
                <div className="services-image align-center"><Image src="img/home/crypto.jpg" responsive /></div>
              </Col>
              <Col sm={6} md={3} lg={3}>
                <div className="features-item">
                  <i className="fa fa-connectdevelop fa-5x" aria-hidden="true" />
                  <h3 className="features-title font-alt">Integration</h3>Any website or platform that trades art as well as every artist or gallery will all be able to apply ArtCoins to handle transactions - even on smartphones.
                </div>
                <div className="features-item">
                  <i className="fa fa-dollar fa-5x" aria-hidden="true" />
                  <h3 className="features-title font-alt">Valuation</h3>With the ArtCoins ecosystem we also introduce “ArtValue”, a unique valuation system that allows to asses the value of artworks independently of any currencies, tokens, market fluctuations and exchanges.
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
