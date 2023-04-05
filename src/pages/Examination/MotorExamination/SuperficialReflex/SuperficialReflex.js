import React, { Fragment } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import CustomSelect from '../../../../Common/CustomSelect/CustomSelect'

const SuperficialReflex = () => {
    return (
        <Fragment>
            <Row className='pt-5 mb-5'>
                <Form>
                    {['radio'].map((type) => (
                        <>
                            <div className='item-1 d-flex' key={`inline-${type}`}>
                                <Col lg={2}>
                                    <FormLabel className='mt-3 mx-2'>Abdominal(C7-C12)</FormLabel>

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Normal' />

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Abnormal' />

                                </Col>
                            </div>
                            <div className='item-2 d-flex'>
                                <Col lg={2}>
                                    <FormLabel className='mt-3 mx-2'>Cremasteric(L1-L2)</FormLabel>

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Normal' />

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Abnormal' />

                                </Col>
                            </div>
                            <div className='item-3 d-flex'>
                                <Col lg={2}>
                                    <FormLabel className='mt-3 mx-2'>Anal(S4-S5)</FormLabel>

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Normal' />

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Abnormal' />

                                </Col>
                            </div>
                            <div className='item-4 d-flex'>
                                <Col lg={2}>
                                    <FormLabel className='mt-3 mx-2'>Plantar Reflex</FormLabel>

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Normal' />

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Abnormal' />

                                </Col>
                            </div>
                            <div className='item-5 d-flex'>
                                <Col lg={2}>
                                    <FormLabel className='mt-3 mx-2'>Corneal Reflex</FormLabel>

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Normal' />

                                </Col>
                                <Col lg={2} className='mt-3'>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`default-${type}`}
                                        label='Abnormal' />

                                </Col>
                            </div>
                        </>
                    ))}
                </Form>
            </Row>
        </Fragment>
    )
}

export default SuperficialReflex
