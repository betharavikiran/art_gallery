import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import OAuthLoginButtons from '../../components/OAuthLoginButtons/OAuthLoginButtons';
import AccountPageFooter from '../../components/AccountPageFooter/AccountPageFooter';
import validate from '../../../modules/validate';

import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const component = this;

    validate(component.form, {
      rules: {
        emailAddress: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address correct?',
        },
        password: {
          required: 'Need a password here.',
        },
      },
      submitHandler() { component.handleSubmit(); },
    });
  }

  handleSubmit() {
    Meteor.loginWithPassword(this.emailAddress.value, this.password.value, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Welcome back!', 'success');
      }
    });
  }

  render() {
    return (
      <div className="main login blur" id="login">
        <section>
          <div className="inner">
            <div className="copy">
              <h1 className="artistic-title">Login</h1>
            </div>
          </div>
        </section>
        <section className="module">
          <hr className="divider-w mb-5" />
          <Grid>
            <Row>
              <Col sm={5} className="mb-sm-40">
                <OAuthLoginButtons
                  services={['facebook', 'github', 'google']}
                />
              </Col>
              <Col sm={5}>
                <form ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>
                  <FormGroup>
                    <ControlLabel>Email Address</ControlLabel>
                    <input
                      type="email"
                      name="emailAddress"
                      ref={emailAddress => (this.emailAddress = emailAddress)}
                      className="form-control"
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel className="clearfix">
                      <span className="pull-left">Password</span>
                      <Link className="pull-right" to="/recover-password">Forgot password?</Link>
                    </ControlLabel>
                    <input
                      type="password"
                      name="password"
                      ref={password => (this.password = password)}
                      className="form-control"
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-round btn-b">Log In</Button>
                  <AccountPageFooter>
                    <p>{'Don\'t have an account?'} <Link to="/signup">Sign Up</Link>.</p>
                  </AccountPageFooter>
                </form>
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Login;


/*
<div className="Login">
        <Row>
          <Col xs={12} sm={6} md={5} lg={4}>
            <h4 className="page-header">Log In</h4>
            <Row>
              <Col xs={12}>
                <OAuthLoginButtons
                  services={['facebook', 'github', 'google']}
                  emailMessage={{
                                    offset: 100,
                                    text: 'Log In with an Email Address',
                                }}
                />
              </Col>
            </Row>
            <form ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <input
                  type="email"
                  name="emailAddress"
                  ref={emailAddress => (this.emailAddress = emailAddress)}
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel className="clearfix">
                  <span className="pull-left">Password</span>
                  <Link className="pull-right" to="/recover-password">Forgot password?</Link>
                </ControlLabel>
                <input
                  type="password"
                  name="password"
                  ref={password => (this.password = password)}
                  className="form-control"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Log In</Button>
              <AccountPageFooter>
                <p>{'Don\'t have an account?'} <Link to="/signup">Sign Up</Link>.</p>
              </AccountPageFooter>
            </form>
          </Col>
        </Row>
      </div>
 */
