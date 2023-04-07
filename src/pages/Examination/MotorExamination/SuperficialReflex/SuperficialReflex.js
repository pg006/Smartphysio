import React, { Fragment } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import CustomSelect from '../../../../Common/CustomSelect/CustomSelect'

const SuperficialReflex = () => {
    const Data = [
        { name: "Abdominal(C7-C12)" },
        { name: "Cremasteric(L1-L2)" },
        { name: "Anal(S4-S5)" },
        { name: "Plantar Reflex" },
        { name: "Corneal Reflex" },

    ];
    return (
        <Fragment>
            <Row className='pt-5 mb-5'>
                {
                    Data.map((val) => {
                        return (
                            <div className='form-div'>
                                <Form>
                                    {['radio'].map((type) => (
                                        <>
                                            <div className='item-1 d-flex' key={`inline-${type}`}>
                                                <Col lg={2}>
                                                    <FormLabel className='mt-3 mx-2'>{val.name}</FormLabel>

                                                </Col>
                                                <Col lg={2} className='mt-3'>
                                                    <Form.Check
                                                        inline
                                                        name="group1"
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label="Normal" />

                                                </Col>
                                                <Col lg={2} className='mt-3'>
                                                    <Form.Check
                                                        inline
                                                        name="group1"
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label="Abnormal"
                                                    />

                                                </Col>
                                            </div>
                                        </>
                                    ))}
                                </Form >
                            </div >
                        )
                    })
                }

            </Row>
        </Fragment >
    )
}

export default SuperficialReflex
