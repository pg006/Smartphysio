import React from 'react'
import { Col, Form, Row, Button, FormControl, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Register.scss"

const Register = () => {
  return (
    <Row className='main-div'>
      <Col lg={6} sm={6} md={6} className='left-part d-flex justify-content-center align-items-center'>
        <h1>SMART PHYSIO</h1>
      </Col>
      <Col lg={6} sm={6} md={6} className='right-part  d-flex justify-content-center align-items-center'>
        <Container>
          <Form>
            <div className='header'>
              <h1>Register</h1>
            </div>
            <div className='register'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>Clinic Name</label>
                  <FormControl className='mt-2' type="text" placeholder="Clinic Name" />
                </Form.Group>
            

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>Doctor Name</label>
                  <FormControl  className='mt-2' type="text" placeholder="Doctor Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>Email address</label>
                  <FormControl className='mt-2'type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>Contact No</label>
                  <FormControl className='mt-2'placeholder="Contact No" />
                </Form.Group>

              <Row>
                <Col lg={6} sm={6} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <label>Password</label>
                    <FormControl className='mt-2' type="password" placeholder="Password" />
                  </Form.Group>
                </Col>

                <Col lg={6} sm={6} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <label>Confirm Password</label>
                    <FormControl className='mt-2' type="password" placeholder="Confirm Password" />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="dark" type="submit">
                Register
              </Button>
              <div className="d-flex justify-content-center">
                <span className='mt-3'>
                  Already have an account?<Link to="/"> Log in</Link>
                </span>
              </div>
            </div>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default Register