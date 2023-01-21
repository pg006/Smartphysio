import React from 'react'
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import './Login.scss'
const Login = () => {
  let navigate = useNavigate();
  const RouteChange = (path) => {
    navigate(path);
  };
  return (
    <React.Fragment>
      <Row className='login-page'>
        <Col lg={6} md={6} sm={12} className="img-col"></Col>
        <Col lg={6} md={6} sm={12} >
          <div className="login-col">
            <Container>
              <div className='login-title '>
                Log In
              </div>
              <Form>
                <Form.Group className="mt-2 mb-3" controlId="formBasicEmail">
                  <label>Email address</label>
                  <Form.Control type="email" placeholder="Enter email" className='mt-2' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <label>Password</label>
                  <Form.Control type="password" placeholder="Password" className='mt-2' />
                </Form.Group>
                <div className='f-pass'>
                  forgot password?
                </div>
                <Button variant="dark" type="submit" className='login-button'>
                  Login
                </Button>
                <Button variant="light" type="submit" className='register-button' onClick={() => RouteChange("/register")}>
                  Register
                </Button>
              </Form>
            </Container>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default Login