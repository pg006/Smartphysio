import React from 'react'
import { Col, Form, Row, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomInput from '../../../Common/CustomInput/CustomInput'
import "./Register.scss"

const Register = () => {
  return (
    <Row className='register-main-div '>
      <Col lg={6} sm={0} md={0} className='left-part d-flex justify-content-center align-items-center'>
        <h1>SMART PHYSIO</h1>
      </Col>
      <Col lg={6} sm={12} md={12} className='right-part d-flex justify-content-center align-items-center'>
        <Container className='d-flex justify-content-center'>
          <Form>
            <div className='heading-div'>
              <h1>Register</h1>
            </div>

            <Row className='register-input d-flex justify-content-center'>
              <Col lg={6} sm={6} md={6}>
                <CustomInput
                  type="text"
                  placeholder="Clinic Name"
                  name="clinicname"
                  label="Clinic Name"
                  classNames="input_area"
                />

                <CustomInput
                  type="text"
                  placeholder="Doctor Name"
                  name="doctorname"
                  label="Doctor Name"
                  classNames="input_area"
                />
                <CustomInput
                  type="text"
                  placeholder="Email address"
                  name="email"
                  label="Email address"
                  classNames="input_area"
                />
              </Col>
              <Col lg={6} sm={6} md={6}>
                <CustomInput
                  type="number"
                  placeholder="Contact No"
                  name="contactno"
                  label="Contact No"
                  classNames="input_area"
                />
                <CustomInput
                  type="text"
                  placeholder="Password"
                  name="password"
                  label="Password"
                  classNames="input_area"
                />
                <CustomInput
                  type="text"
                  placeholder="Confirm Password"
                  name="cpassword"
                  label="Confirm Password"
                  classNames="input_area"
                />
              </Col>

              <div className='d-flex justify-content-center mb-3'>
                <div className="login-span">
                  Already have an account? <Link to="/">  Log in</Link>
                </div>
              </div>
              <Col lg={6} md={6} sm={6} className="d-grid">
                <button className="register-btn" variant="dark" type="submit">
                  Register
                </button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default Register