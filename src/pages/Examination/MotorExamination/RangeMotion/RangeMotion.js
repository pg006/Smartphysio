import React, { Fragment } from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import './RangeMotion.scss'
import CustomInput from '../../../../Common/CustomInput/CustomInput'
import CustomSelect from '../../../../Common/CustomSelect/CustomSelect'

const RangeMotion = () => {

    const Data = [
        { name: "Mandible Depression"},
        { name: "Mandible Elevation"},
        { name: "Mandible Protrusion"},
        { name: "Mandible Retraction"}
    ];

    return (
        <Fragment>
            <div className='range-div pt-5 mb-5'>
                <Accordion
                    defaultActiveKey="0"
                    className="panel-default"
                >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Cervical Spine
                        </Accordion.Header>
                        <Accordion.Body>
                            {
                                Data.map((val) => {
                                    return (
                                        <div className='text-div d-flex'>
                                            <h6 className='mt-3 mx-2'>{val.name}</h6>
                                            <Row>
                                                <Col lg={3}>
                                                    <CustomInput
                                                        type='text'
                                                        placeholder='AROM'
                                                    />
                                                </Col>
                                                <Col lg={3}>
                                                    <CustomInput
                                                        type='text'
                                                        placeholder='AROM'
                                                    />
                                                </Col>
                                                <Col lg={3}>
                                                    <CustomSelect
                                                    />
                                                </Col>
                                                <Col lg={3}>
                                                    <CustomSelect
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Tempermandibular Joint
                        </Accordion.Header>
                        <Accordion.Body>
                            2222
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Shoulder
                        </Accordion.Header>
                        <Accordion.Body>
                            3333
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            Elbow
                        </Accordion.Header>
                        <Accordion.Body>
                            4444
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            Wirst  & Fingers
                        </Accordion.Header>
                        <Accordion.Body>
                            5555
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            Thoracic Spine
                        </Accordion.Header>
                        <Accordion.Body>
                            6666
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>
                            Lumber Spine
                        </Accordion.Header>
                        <Accordion.Body>
                            7777
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>
                            Hip
                        </Accordion.Header>
                        <Accordion.Body>
                            8888
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>
                            Knee
                        </Accordion.Header>
                        <Accordion.Body>
                            9999
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>
                            Lower Leg Angle &  Foot
                        </Accordion.Header>
                        <Accordion.Body>
                            10 10
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </Fragment>
    )
}

export default RangeMotion