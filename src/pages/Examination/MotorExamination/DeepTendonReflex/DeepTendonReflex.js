import React from 'react'
import { Accordion, Col, FormLabel, Row } from 'react-bootstrap'
import './DeepTendonReflex.scss'
import CustomSelect from '../../../../Common/CustomSelect/CustomSelect'
import { Fragment } from 'react'

const DeepTendonReflex = () => {
    return (
        <Fragment>
            <div className='deep-div pt-5 mb-5'>
                <Accordion
                    defaultActiveKey="0"
                    className="panel-default"
                >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Jaw
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <div className='item-1 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Jaw(CN-5)</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>
                                </div>

                                <div className='item-2 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Biceps(C5-C6[musulocutaneous])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>
                                </div>

                                <div className='item-3 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Brachioradialis(C5,C6[radial])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>

                                </div>
                                <div className='item-4 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Triceps(C6-C7,[radial])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>


                                </div>
                                <div className='item-5 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Finger Flexors(C6-C7,T1,[radial])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>

                                </div>
                                <div className='item-6 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Hamstrings(C6-C7,S2,[sciatic])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>

                                </div>
                                <div className='item-7 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Quadriceps Knee Jerk(C6-C4,[Femoral])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>

                                </div>
                                <div className='item-8 d-flex'>
                                    <Col lg={3}>
                                        <FormLabel className='mt-3 mx-2'>Achillies(S1-S2,[Tibial])</FormLabel>

                                    </Col>
                                    <Col lg={9}>
                                        <CustomSelect
                                            className='w-40'
                                        />
                                    </Col>

                                </div>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Fragment>
    )
}

export default DeepTendonReflex