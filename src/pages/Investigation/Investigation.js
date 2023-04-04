import React from 'react'
import { Fragment } from 'react'
import CustomInput from '../../Common/CustomInput/CustomInput'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'
import DataTable from 'react-data-table-component'
import './Investigation.scss'
import CustomSelect from '../../Common/CustomSelect/CustomSelect'
import { TableData } from '../../component/TableContainer/TableData'

const Investigation = () => {
  
  const [investigationData, setIncestigationData] = useState([0 , 1 , 2])
  const [pagination, setPagination] = useState({
    per_page: 10,
    page: 1,
    search: "",
  });

  const columns = [
    {
      name: "TEST",
      // selector: (row) => [row.REGISTER_ID],
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="">
            <CustomSelect />
          </div>
        );
      },
    },
    {
      name: "AREA",
      // selector: (row) => [row.DATE],
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="">
            <CustomInput
              type='text'
              placeholder='area'
            />
          </div>
        );
      },
    },
    {
      name: "FINDING",
      // selector: (row) => [row.PATIENT_NAME],
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="">
            <CustomInput
              textArea
              placeholder='findings'
              rows='3'
            />
          </div>
        );
      },
    },
    {
      name: "FILES",
      // selector: (row) => [row.MOBILE_NO],
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="">
            <input
              type='file'
              placeholder='findings'
              rows='3'
            />
          </div>
        );
      },
    },
    {
      sortable: true,
      cell: (row, index) => {
        return (
          <div className='d-flex justify-content-end w-100'>
            <BsTrash className='i-1'/>
          </div>
        );
      },
    },
  ];
  return (
    <Fragment>
      <div className='investigation-div'>

        <div className='top-div'>
          <h3>Investigation</h3>
          <hr />
        </div>

        <Row className='form-div'>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="number"
              placeholder="Enter Treatment Id"
              name="mobilenumber"
              label="Treatment Id"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="date"
              placeholder="Enter Date"
              name="date"
              label="Date"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />


          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              name="name"
              label="Name"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Register Id"
              name="patientid"
              label="Patient Id"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>


          <Col xl={12} className="pt-3">
            <TableData
              resTableDataItems={investigationData}
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

export default Investigation
