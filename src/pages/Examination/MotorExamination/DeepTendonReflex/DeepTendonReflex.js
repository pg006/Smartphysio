import React from 'react'
import { Accordion, Col, FormLabel, Row } from 'react-bootstrap'
import './DeepTendonReflex.scss'
import CustomSelect from '../../../../Common/CustomSelect/CustomSelect'
import { Fragment } from 'react'

const DeepTendonReflex = () => {
    const Data = [
        { name: "Jaw(CN-5)" },
        { name: "Biceps(C5-C6[musulocutaneous])" },
        { name: "Brachioradialis(C5,C6[radial])" },
        { name: "Triceps(C6-C7,[radial])" },
        { name: "Finger Flexors(C6-C7,T1,[radial])" },
        { name: "Hamstrings(C6-C7,S2,[sciatic])" },
        { name: "Quadriceps Knee Jerk(C6-C4,[Femoral])" },
        { name: "Achillies(S1-S2,[Tibial])" }
    ];

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
                                {
                                    Data.map((val) => {
                                        return (
                                            <div className='items d-flex'>
                                                <Col lg={4}>
                                                    <FormLabel className='mt-3 mx-2'>{val.name}</FormLabel>
                                                </Col>
                                                <Col lg={8}>
                                                    <CustomSelect
                                                        className='w-50'
                                                    />
                                                </Col>
                                            </div>
                                        )
                                    })
                                }
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Fragment>
    )
}

export default DeepTendonReflex