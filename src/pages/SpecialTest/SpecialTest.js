import React, { Fragment, useState } from 'react'
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import CustomInput from '../../Common/CustomInput/CustomInput'
import "./SpecialTest.scss"
const SpecialTest = () => {

  const [tab, SetTab] = useState([]);
  const [key, setKey] = useState("one");
  return (

    <Fragment>
      <h3>Special Test</h3>
      <div className='mt-5'>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="number"
              placeholder="Enter Treatment Id"
              name="mobilenumber"
              label="Treatment Id"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>

          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="number"
              placeholder="Enter Register Id"
              name="mobilenumber"
              label="Register Id"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>

          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              name="name"
              label="Name"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>

          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="date"
              placeholder="Enter Date"
              name="date"
              label="Date"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>

        </Row>
        <Row>
          <Col xl={12}>
            <Card className='card h-5'>
              <Card.Body>
                <Tab.Container
                  id="left-tabs-example"
                  onSelect={(k) => setKey(k)}
                  activeKey={key}
                >
                  <div className="tab-name mt-3">
                    <Nav
                      variant="pills"
                      className="panel-tabs nav-tabs panel-secondary"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="one">
                          Carical Spine
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="two">
                          Shoulder
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="three">
                          Elbow
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          Forearm, Wrist & Hand
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="five">
                          Thoracic & Lumbar
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="six">
                          Pelvis
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="saven">
                          Hip
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="eight">
                          Knee
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="nine">
                          Ankle & Foot
                        </Nav.Link>
                      </Nav.Item>


                    </Nav>
                  </div>

                  <div className='Tbl-data'>
                    <Tab.Content>

                      <Tab.Pane eventKey="one">
                        
                      </Tab.Pane>

                      <Tab.Pane eventKey="two">
                       
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="three">
                        
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="four">
                        
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="five">
                        
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="six">
                        
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="saven">
                       
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="eight">
                        
                      </Tab.Pane>
                  
                      <Tab.Pane eventKey="nine">
                     
                      </Tab.Pane>


                    </Tab.Content>
                  </div>

                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </Fragment>

  )
}

export default SpecialTest
