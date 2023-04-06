import React, { Fragment } from 'react'
import './NeurologycalExamination.scss'
import { Nav, Tab } from 'react-bootstrap'
import HigherFunctions from './HigherFunctions/HigherFunctions'
import CramicalExam from './CramicalExam/CramicalExam'
import CoOrinationExam from './CoOrinationExam/CoOrinationExam'

const NeurologycalExamination = () => {
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
                        <i className="fe fe-user me-1"></i>Higher Functions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="secondC">
                        <i className="fe fe-calendar me-1"></i>Cramical Nerve Examination
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="thirdC">
                        <i className="fe fe-settings me-1"></i>Co Orination Examination
                    </Nav.Link>
                </Nav.Item>

            </Nav>

            <Tab.Content>
                <Tab.Pane eventKey="firstC">
                    <HigherFunctions />
                </Tab.Pane>
                <Tab.Pane eventKey="secondC">
                    <CramicalExam />
                </Tab.Pane>
                <Tab.Pane eventKey="thirdC">
                    <CoOrinationExam />
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

export default NeurologycalExamination