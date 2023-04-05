import React from 'react'
import './MotorExamination.scss'
import { Nav, Tab } from 'react-bootstrap'
import DeepTendonReflex from './DeepTendonReflex/DeepTendonReflex'
import SuperficialReflex from './SuperficialReflex/SuperficialReflex'
import RangeMotion from './RangeMotion/RangeMotion'
import { Fragment } from 'react'

const MotorExamination = () => {
    return (
        <Fragment>
            <div className="panel-2 panel-info ">
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="firstC"
                >
                    <Nav
                        variant="pills"
                        className="panel-tabs nav-tabs panel-info"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="firstC">
                                <i className="fe fe-user me-1"></i>Range Of Motion
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="secondC">
                                <i className="fe fe-calendar me-1"></i>Deep Tendon Reflexes
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="thirdC">
                                <i className="fe fe-settings me-1"></i>Superficial Reflex
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="firstC">
                            <RangeMotion />
                        </Tab.Pane>
                        <Tab.Pane eventKey="secondC">
                            <DeepTendonReflex />
                        </Tab.Pane>
                        <Tab.Pane eventKey="thirdC">
                            <SuperficialReflex />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>

            <div className='btns-div d-flex justify-content-start pt-4 mb-4'>
                <div className='d-flex'>
                    <button className='btns m-2' type='submit'>Save</button>
                    <button className='btns m-2'>Save/Next</button>
                    <button className='btns m-2'>Exit</button>
                </div>
            </div>
        </Fragment>
    )
}

export default MotorExamination