import React, { Fragment } from 'react'
import './GeneralExamination.scss'
import { Col, Row } from 'react-bootstrap'
import CustomInput from '../../../Common/CustomInput/CustomInput'

const GeneralExamination = () => {
  return (
    <Fragment>
      <Row className='mt-3'>
        <Col lg={6} className='left-part'>
          <CustomInput
            type='text'
            placeholder=''
            label='Date'
          />
          <CustomInput
            type='text'
            placeholder=''
            label='Treatment Id'
          />
          <CustomInput
            type='text'
            placeholder=''
            label='Register Id'
          />
          <CustomInput
            type='text'
            placeholder=''
            label='Name'
          />
          <div className='d-flex mx-5'>
            <CustomInput
              type='text'
              placeholder=''
              // label='Blood Pressure'
            />
            <CustomInput
              type='text'
              placeholder=''
            />
          </div>
        </Col>
        <Col lg={6} className='right-part'>

        </Col>
      </Row>
    </Fragment>
  )
}

export default GeneralExamination
