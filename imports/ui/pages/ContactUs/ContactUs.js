import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const ContactUs = () => (
  <div className="main">
    <section className="module bg-dark-30 contact-page-header" data-background="assets/images/contact_bg.jpg">
      <div className="container">
        <Grid>
          <Row>
            <Col sm={6} smOffset={3} >
              <h2 className="module-title font-alt">Contact Us</h2>
              <div className="module-subtitle font-serif">There is a possibility for every one to participate. Reach out to us to discuss.</div>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
    <section className="module">
      <div className="container">
        <Grid>
          <Row>
            <Col sm={6}>
              <h4 className="font-alt">Get in touch</h4><br />
              <form id="contactForm" role="form">
                <div className="form-group">
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input className="form-control" type="text" id="name" name="name" placeholder="Your Name*" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input className="form-control" type="email" id="email" name="email" placeholder="Your Email*" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="7" id="message" name="message" placeholder="Your Message*" required="required" data-validation-required-message="Please enter your message." />
                  <p className="help-block text-danger" />
                </div>
                <div className="text-center">
                  <button className="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">Submit</button>
                </div>
              </form>
              <div className="ajax-response font-alt" id="contactFormResponse" />
            </Col>
            <Col sm={6}>
              <h4 className="font-alt">Additional info</h4><br />
              <p>We will respond back to your enquiry with in 24 hours on a business day. Please be patient.</p>
              <hr />
              <h4 className="font-alt">Business Days</h4><br />
              <ul className="list-unstyled">
                <li>Monday - Friday</li>
                <li>Saturday - Sunday are holidays</li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  </div>
);

export default ContactUs;
