import React from 'react'
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../../Common/CustomInput/CustomInput';
import './Login.scss'


const Login = () => {
  let navigate = useNavigate();
  const RouteChange = (path) => {
    navigate(path);
  };
  return (
    <React.Fragment>
      <Row className='login-main-div'>
        <Col lg={6} sm={6} md={6} className="left-part d-flex justify-content-center align-items-center">
          <h1>SMART PHYSIO</h1>
        </Col>

        <Col lg={6} md={6} sm={6} className="right-part  d-flex justify-content-center align-items-center">

          <Container>
            <Form>

              <div className='heading-div'>
                <h1>Login</h1>
              </div>

              <div className='login-input'>
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

                <div className='f-pass'>
                  Forgot Password?
                </div>

                <Button variant="dark" type="submit" className='lgn-btn mb-3 mt-2'>
                  Login
                </Button>
                <Button variant='light' type="submit" className='rgi-btn' onClick={() => RouteChange("/register")}>
                  Register
                </Button>

              </div>

            </Form>
          </Container>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default Login