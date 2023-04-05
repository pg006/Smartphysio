import React from 'react'
import { Fragment } from 'react'
import './Diagnosis.scss'
import { Col, Row } from 'react-bootstrap'
import CustomInput from '../../Common/CustomInput/CustomInput'
import { TableData } from '../../component/TableContainer/TableData'
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import CustomSelect from '../../Common/CustomSelect/CustomSelect'

const Diagnosis = () => {

    const diagnosisData = [
        {
           ID: 1,
        },
        {
            ID: 2,
         },
         {
            ID: 3,
         },

    ];

    const columns = [
        {
            name: "S/N",
            selector: (row) => [row.ID],
            sortable: true,
        },
        {
            name: "DIAGNOSIS",
            sortable: true,
            cell: (row, index) => {
                return (
                    <div className="w-100">
                        <CustomSelect />
                    </div>
                );
            },
        },

        {
            sortable: true,
            cell: (row, index) => {
                return (
                    <div className='d-flex justify-content-end w-100'  >
                        <BsTrash className='i-1' />
                    </div>
                );
            },
        },
    ];

    return (
        <Fragment>
            <div className='diagnosis-div'>

                <div className='top-div'>
                    <h3>Diagnosis</h3>
                    <hr />
                </div>

                <Row className='form-div'>
                    <Col lg={6} md={6} sm={6}>
                        <CustomInput
                            type="number"
                            placeholder="Enter Treatment Id"
                            name="mobilenumber"
                            label="Treatment Id"
                            className=""
                      
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <CustomInput
                            type="date"
                            placeholder="Enter Date"
                            name="date"
                            label="Date"
                            className=""
                       
                        />


                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <CustomInput
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            label="Name"
                            className=""
                        
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <CustomInput
                            type="text"
                            placeholder="Enter Register Id"
                            name="patientid"
                            label="Patient Id"
                            className=""
                       
                        />
                    </Col>


                    <Col xl={12} className="pt-3">
                        <TableData
                            resTableDataItems={diagnosisData}
                            isPagination={true}
                            isSelectable={false}
                            columns={columns}
                        />

                    </Col>

                    <div className='btn-div d-flex'>
                        <button className='btns m-2' type='submit'>Save</button>
                        <button className='btns m-2'>Save/Next</button>
                        <button className='btns m-2'>Exit</button>
                    </div>
                </Row>
            </div>
        </Fragment>
    )
}

export default Diagnosis
