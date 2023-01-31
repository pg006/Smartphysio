import React from 'react'
import { Col, Form, Row, Button, FormControl, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomInput from '../../../Common/CustomInput/CustomInput'
import "./Register.scss"

const Register = () => {
  return (
    <Row className='register-main-div '>
      <Col lg={6} sm={6} md={6} className='left-part d-flex justify-content-center align-items-center'>
        <h1>SMART PHYSIO</h1>
      </Col>
      <Col lg={6} sm={6} md={6} className='right-part d-flex justify-content-center align-items-center'>
        <Container>
          <Form>
            <div className='heading-div'>
              <h1>Register</h1>
            </div>
            
            <div className='register-input'>

              <CustomInput
                type="text"
                placeholder="Clinic Name"
                name="clinicname"
                label="Clinic Name"
                className="label"
              />

              <CustomInput
                type="text"
                placeholder="Doctor Name"
                name="doctorname"
                label="Doctor Name"
                className="label"
              />
              <CustomInput
                type="text"
                placeholder="Email address"
                name="email"
                label="Email address"
                className="label"
              />
              <CustomInput
                type="number"
                placeholder="Contact No"
                name="contactno"
                label="Contact No"
                className="label"
              />

              <CustomInput
                type="text"
                placeholder="Password"
                name="password"
                label="Password"
                className="label"
              />


              <CustomInput
                type="text"
                placeholder="Confirm Password"
                name="cpassword"
                label="Confirm Password"
                className="label"
              />


                <Button className="reister-btn" variant="dark" type="submit">
                  Register
                </Button>

                <div className="login-span mt-3 d-flex justify-content-end">
                    Already have an account?<Link to="/"> Log in</Link>
                </div>


            </div>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default Register