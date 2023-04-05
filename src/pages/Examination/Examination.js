import React from 'react'
import { Fragment } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import CustomInput from '../../Common/CustomInput/CustomInput'
import './Examination.scss'
import MotorExamination from './MotorExamination/MotorExamination'
import GeneralExamination from './GeneralExamination/GeneralExamination'
import SensoryExamination from './SensoryExamination/SensoryExamination'
import NeurologycalExamination from './NeurologycalExamination/NeurologycalExamination'

const Examination = () => {
  return (
    <Fragment>

      <div className='form-div'>
        <div className='top-div'>
          <h3>Examination</h3>
        </div>
        <Row className='form-div'>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Date"
              name="mobilenumber"
              label="Date"
              className=""

            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Register Id"
              name="registerid"
              label="Register ID"
              className=""

            />


          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Treatment Id"
              name="treatmentid"
              label="Treatment ID"
              className=""

            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Name"
              name="name"
              label="Name"
              className=""

            />
          </Col>
        </Row>
      </div>

      <div className="panel panel-info pt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={3}>
              <Nav
                variant="pills"
                className="flex-column tab_wrapper second_tab right_side"
                defaultActiveKey="first"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">General Examination</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Motor Examination</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Sensory Examination</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Neurologycal Examination</Nav.Link>
                </Nav.Item>


              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content className="content_wrapper border pt-0">
                <Tab.Pane className="tab_content " eventKey="first">
                  <GeneralExamination />
                </Tab.Pane>

                <Tab.Pane className="tab_content" eventKey="second">
                  <MotorExamination />
                </Tab.Pane>

                <Tab.Pane className="tab_content" eventKey="third">
                  <SensoryExamination />
                </Tab.Pane>
                <Tab.Pane className="tab_content" eventKey="fourth">
                  <NeurologycalExamination />
                </Tab.Pane>


              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Fragment>
  )
}

export default Examination
