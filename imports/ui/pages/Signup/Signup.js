import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import OAuthLoginButtons from '../../components/OAuthLoginButtons/OAuthLoginButtons';
import AccountPageFooter from '../../components/AccountPageFooter/AccountPageFooter';
import validate from '../../../modules/validate';

import './Signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const component = this;

    validate(component.form, {
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        emailAddress: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        firstName: {
          required: 'What\'s your first name?',
        },
        lastName: {
          required: 'What\'s your last name?',
        },
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address correct?',
        },
        password: {
          required: 'Need a password here.',
          minlength: 'Please use at least six characters.',
        },
      },
      submitHandler() { component.handleSubmit(); },
    });
  }

  handleSubmit() {
    const { history } = this.props;

    Accounts.createUser({
      email: this.emailAddress.value,
      password: this.password.value,
      profile: {
        name: {
          first: this.firstName.value,
          last: this.lastName.value,
        },
      },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Meteor.call('users.sendVerificationEmail');
        Bert.alert('Welcome!', 'success');
        history.push('/documents');
      }
    });
  }

  render() {
    return (
      <div className="main">
        <section id="signup" className="signup">
          <div className="inner">
            <div className="copy">
              <h1>Sign up</h1>
            </div>
          </div>
        </section>
        <section className="module">
          <div className="container">
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
                    <Row>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>First Name</ControlLabel>
                          <input
                            type="text"
                            name="firstName"
                            ref={firstName => (this.firstName = firstName)}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>Last Name</ControlLabel>
                          <input
                            type="text"
                            name="lastName"
                            ref={lastName => (this.lastName = lastName)}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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
                    <Button type="submit" className="btn btn-round btn-b">Sign Up</Button>
                    <AccountPageFooter>
                      <p>Already have an account? <Link to="/login">Log In</Link>.</p>
                    </AccountPageFooter>
                  </form>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Signup;


/*

<div className="Signup">
        <Row>
          <Col xs={12} sm={6} md={5} lg={4}>
            <h4 className="page-header">Sign Up</h4>
            <Row>
              <Col xs={12}>
                <OAuthLoginButtons
                  services={['facebook', 'github', 'google']}
                  emailMessage={{
                    offset: 97,
                    text: 'Sign Up with an Email Address',
                  }}
                />
              </Col>
            </Row>
            <form ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <input
                      type="text"
                      name="firstName"
                      ref={firstName => (this.firstName = firstName)}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <input
                      type="text"
                      name="lastName"
                      ref={lastName => (this.lastName = lastName)}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
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
                <ControlLabel>Password</ControlLabel>
                <input
                  type="password"
                  name="password"
                  ref={password => (this.password = password)}
                  className="form-control"
                />
                <InputHint>Use at least six characters.</InputHint>
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
              <AccountPageFooter>
                <p>Already have an account? <Link to="/login">Log In</Link>.</p>
              </AccountPageFooter>
            </form>
          </Col>
        </Row>
      </div>
 */
